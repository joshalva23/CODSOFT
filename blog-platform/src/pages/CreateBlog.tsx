import React, { useState ,useRef} from "react";
import { db } from "../firebase/firebase";
import { v4 as uuidv4 } from 'uuid';
import { doc,setDoc,serverTimestamp } from "firebase/firestore";
import { useAuth } from "../auth/AuthContext";

function CreateBlog()
{
    const [title,setTitle] = useState<string>('');
    const [description,setDescription] = useState<string>('');
    const contentRef = useRef<HTMLTextAreaElement>(null);

    const [selectedImage, setSelectedImage] = useState<File | null>(null);
    const [previewUrl, setPreviewUrl] = useState<string | null>(null);
    const [loading,setLoading] = useState<boolean>(false);
    const {currentUser} = useAuth();

    const [response, setResponse] = useState<string>('');

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
        setSelectedImage(file);
        const previewUrl = URL.createObjectURL(file);
        setPreviewUrl(previewUrl);
        }
    };

    

    const handleUnselect =()=>{
        setSelectedImage(null);
        setPreviewUrl(null);
    }

    const handlePublish = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
    
        try {
            let imageUrl = null;

            if (selectedImage) {
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
            
            const content = contentRef.current?.value || '';
            const contentArray = content.split('\n').filter((para) => para.trim() !== '');

            const newBlogPost = {
                title,
                content: contentArray,
                imageUrl,
                description,
                authorName: currentUser?.displayName,
                authorId: currentUser?.uid,
                createdAt: serverTimestamp(),
                lastEditAt: null,
                isVisible:true
            };
            
            const blogPostRef = doc(db, 'blogs', uuidv4());
            await setDoc(blogPostRef, newBlogPost);
    
            if(contentRef.current) contentRef.current.value = '';
            setTitle('');
            setDescription('');
            setSelectedImage(null);
            setPreviewUrl(null);
            setResponse("Blog post published successfully!");
            setTimeout(()=>setResponse(''),1500);
    
        } catch (error) {
            console.error("Error publishing blog:", error);
            alert("Failed to publish the blog. Please try again.");
        } finally {
            setLoading(false);
        }
    };
    

    return (
        <>
        <div className="w-full h-full flex flex-col space-y-3">
            <div className="w-full px-4">
                <div className="bg-[#FFF4D4] rounded-lg w-fit p-2">
                    <p className="font-instrumentSans font-semibold text-2xl text-[#E0A900]">Create Blog</p>
                </div>
            </div>
            <div className="w-full flex items-center justify-center py-2">
                <form onSubmit={handlePublish} className="w-2/3 bg-white rounded-lg py-10 px-10">
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
                                ref={contentRef}
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
                                    <div className="h-full w-auto ">
                                        <button onClick={handleUnselect} className="bg-red-600 px-3 rounded-full">
                                            <p className="text-white font-instrumentSans">DeSelect</p>
                                        </button>
                                    </div>
                                )}

                        <div className="w-auto flex flex-row flex-grow items-center justify-end h-full">
                            <button type='submit' className="bg-green-600 px-5 py-1 rounded-full h-8">
                                {!loading && <p className='text-white font-instrumentSans'>Publish</p>}
                                {loading && <div className="h-4/5 aspect-[1/1] border-4 border-white border-t-transparent rounded-full animate-spin"></div>}
                            </button>
                        </div>
                    </div>
                    {previewUrl && (
                        <div className="image-preview mt-4">
                            <h4 className="text-black font-instrumentSans font-semibold mb-4">Preview:</h4>
                            <div className="w-28 h-28 overflow-hidden">
                                <img src={previewUrl} alt="Selected Preview" className="h-full w-full object-contain" />
                            </div>
                        </div>
                    )}
                </form>
            </div>
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

export default CreateBlog;