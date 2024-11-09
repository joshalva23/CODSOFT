import React,{useState,useEffect} from "react";
import { BlogYesContent } from "../interface/Blog";
import { doc,getDoc, updateDoc } from "firebase/firestore";
import { db } from "../../firebase/firebase";
import { useAuth } from "../../auth/AuthContext";
import Cross from '../../assets/cross.png';

interface EditBlogProps{
    blogId:string;
    closeModal:(value:boolean)=>void;
}
const EditBlog:React.FC<EditBlogProps> = ({blogId,closeModal})=>
{
    const [title,setTitle] = useState<string>('');
    const [description,setDescription] = useState<string>('');
    const [content,setContent] = useState<string>('');
    const [selectedImage, setSelectedImage] = useState<File | null>(null);
    const [previewUrl, setPreviewUrl] = useState<string | null>(null);
    const [originalImageUrl, setOriginalImageUrl] = useState<string | null>(null);
    const [imageModified, setImageModified] = useState<boolean>(false);
    const [editDocument,setEditDocument] = useState<BlogYesContent|null>(null);
    const [loading,setLoading] = useState<boolean>(false);

    const [response, setResponse] = useState<string>('');
    const [editAuthorized,setEditAuthorized] = useState<boolean>(false);

    const {currentUser} = useAuth();

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setSelectedImage(file);
            const previewUrl = URL.createObjectURL(file);
            setPreviewUrl(previewUrl);
            setImageModified(true);
        }
    };

    const handleUnselect =()=>{
        setSelectedImage(null);
        URL.revokeObjectURL(previewUrl ?? '');
        setPreviewUrl(null);
        setImageModified(!imageModified);
    }

    const fetchAndSetBlog = async ()=>{
        if(!blogId) return;
        try{
            const docRef = doc(db,"blogs",blogId);
            const docSnap = await getDoc(docRef);

            if (docSnap.exists()) {
                const blogData = docSnap.data() as BlogYesContent;

                if(blogData.authorId === currentUser?.uid) setEditAuthorized(true);

                setEditDocument(blogData);

                setTitle(blogData.title);
                setDescription(blogData.description);
                setContent(blogData.content.join('\n'));
                setOriginalImageUrl(blogData.imageUrl)
                setPreviewUrl(blogData.imageUrl);
            } else {
                setEditDocument(null);
            }
        }
        catch(error){
            console.error("Error fetching blog:",error);
        }finally{
            
        }
    }

    const handlePublish = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        try {
            const docRef = doc(db, "blogs", blogId);

            let imageUrl = null;

            if (imageModified && selectedImage) {
                const formData = new FormData();
                formData.append('file', selectedImage);
                formData.append('upload_preset', import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET); 
                
                const response = await fetch(`https://api.cloudinary.com/v1_1/${import.meta.env.VITE_CLOUDINARY_CLOUD_NAME}/image/upload`, {
                    method: 'POST',
                    body: formData,
                });
                const data = await response.json();
                imageUrl = data.secure_url;
            }
            const newImageUrl = imageModified ? imageUrl : originalImageUrl;


            await updateDoc(docRef, {
                title,
                description,
                content: content.split('\n'),
                imageUrl: newImageUrl,
            });

            setResponse("Blog post updated successfully!");
            setTimeout(() => setResponse(''), 1500);
        } catch (error) {
            console.error("Error editing blog:", error);
            alert("Failed to update the blog. Please try again.");
        } finally {
            setLoading(false);
            setTimeout(() => closeModal(false), 1700);
        }
    };

    useEffect(()=>{
        fetchAndSetBlog();
    },[]);


    return (editAuthorized && 
        <>
            <div className="flex h-full w-full justify-center items-center">
                <button onClick={()=>closeModal(false)} className="absolute top-5 right-5 w-6 aspect-[1/1]">
                    <img src={Cross} alt="w-full h-full object-contain filter brightness-0 invert" />
                </button>
                <form onSubmit={handlePublish} className="w-2/3 bg-white rounded-lg py-5 px-10">
                    <div className="w-full grid grid-cols-8 mb-5">
                        <div className="col-span-1">
                            <p className="text-black text-xl font-instrumentSans font-semibold">Title</p>
                        </div>
                        <div className="col-span-7 w-full">
                            <input 
                                type="text" 
                                name="title" 
                                id="title"
                                value={title}
                                className="bg-[#F1F1F1] w-full rounded-full px-4 text-black outline-none focus:ring-2 focus:ring-defYellow focus:ring-offset-2 font-instrumentSans"
                                onChange={(e)=>setTitle(e.target.value)}
                                required
                            />
                        </div>
                    </div>
                    <div className="w-full grid grid-cols-8 mb-2">
                        <div className="col-span-2">
                            <p className="text-black text-xl font-instrumentSans font-semibold">Description</p>
                        </div>
                    </div>
                    <div className="w-full grid mb-5">
                        <div className="w-full">
                            <textarea 
                                name="description" 
                                id="description" 
                                cols={30} 
                                rows={2}
                                value={description}
                                className="bg-[#F1F1F1] w-full rounded-xl px-3 py-2 text-black outline-none focus:ring-2 focus:ring-defYellow focus:ring-offset-2 font-instrumentSans"
                                onChange={(e)=>setDescription(e.target.value)}
                                required
                            />
                        </div>
                    </div>
                    <div className="w-full grid grid-cols-8 mb-2">
                        <div className="col-span-2">
                            <p className="text-black text-xl font-instrumentSans font-semibold">Content</p>
                        </div>
                    </div>
                    <div className="w-full grid mb-5">
                        <div className="w-full">
                            <textarea 
                                name="content" 
                                id="content" 
                                cols={30} 
                                rows={10}
                                value={content}
                                onChange={(e)=>setContent(e.target.value)}
                                className="bg-[#F1F1F1] w-full rounded-xl px-3 py-2 text-black outline-none focus:ring-2 focus:ring-defYellow focus:ring-offset-2 font-instrumentSans"
                                required
                            />
                        </div>
                    </div>
                    <div className="w-full flex flex-row space-x-10">
                        <div className="w-auto">
                            <div className="w-full">
                                <p className="text-black font-instrumentSans font-semibold text-xl">Image<span className="text-red-600 pl-1 font-mono">*</span></p>
                            </div>
                        </div>
                        <div className="w-auto">
                            <input
                                type="file"
                                accept="image/*"
                                id="file-upload"
                                onChange={handleImageChange}
                                className="hidden"
                            />
                            <label
                                htmlFor="file-upload"
                                className="font-instrumentSans font-medium bg-[#F1F1F1] text-black rounded-full px-8 py-2 cursor-pointer hover:bg-yellow-300 transition-colors"
                            >
                                Upload
                            </label>
                        </div>
                                {previewUrl && (
                                    <>
                                    <div className="image-preview">
                                        <div className="w-24 h-24 overflow-hidden">
                                            <img src={previewUrl} alt="Selected Preview" className="h-full w-full object-contain" />
                                        </div>
                                    </div>
                                    <div className="h-full w-auto ">
                                        <button onClick={handleUnselect} className="bg-red-600 px-3 rounded-full">
                                            <p className="text-white font-instrumentSans">DeSelect</p>
                                        </button>
                                    </div>
                                    </>
                                )}

                        <div className="w-auto flex flex-row flex-grow items-center justify-end h-full">
                            <button type='submit' className="bg-green-600 px-5 py-1 rounded-full h-8">
                                {!loading && <p className='text-white font-instrumentSans'>Publish</p>}
                                {loading && <div className="h-4/5 aspect-[1/1] border-4 border-white border-t-transparent rounded-full animate-spin"></div>}
                            </button>
                        </div>
                        
                    </div>
                    
                </form>
            </div>
            {response && 
            (
                <div className="fixed h-auto w-auto px-5 py-4 bg-green-600 bottom-5 right-5 rounded-xl flex items-center jusitfy-center">
                    <p className="text-white">{response}</p>
                </div>
            )
            }
        </>
    );
}

export default EditBlog;