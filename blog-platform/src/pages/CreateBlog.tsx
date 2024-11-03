import { useState } from "react";
import { db } from "../firebase/firebase";

function CreateBlog()
{
    const [title,setTitle] = useState<string>('');
    const [content,setContent] = useState<string>('');

    const [selectedImage, setSelectedImage] = useState<File | null>(null);
    const [previewUrl, setPreviewUrl] = useState<string | null>(null);

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

    const handlePublish =(e: React.FormEvent) =>
    {
        e.preventDefault();


    }

    return (
        <>
        <div className="w-full h-full flex flex-col space-y-3">
            <div className="w-full px-4">
                <div className="bg-[#FFF4D4] rounded-lg w-fit p-2">
                    <p className="font-instrumentSans font-semibold text-2xl text-[#E0A900]">Create Blog</p>
                </div>
            </div>
            <div className="w-full flex items-center justify-center py-4">
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
                                className="bg-[#F1F1F1] w-full rounded-full pl-4 text-black outline-none focus:ring-2 focus:ring-defYellow focus:ring-offset-2 font-instrumentSans"
                                onChange={(e)=>setTitle(e.target.value)}
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
                                className="bg-[#F1F1F1] w-full rounded-xl px-3 py-2 text-black outline-none focus:ring-2 focus:ring-defYellow focus:ring-offset-2 font-instrumentSans"
                                onChange={(e)=>setContent(e.target.value)}
                                required
                            />
                        </div>
                    </div>
                    <div className="w-full flex flex-row space-x-10">
                        <div className="w-auto">
                            <div className="w-full">
                                <p className="text-black font-instrumentSans font-semibold text-xl">Image</p>
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
                                className="font-instrumentSans font-medium bg-[#F1F1F1] text-black rounded-full px-8 py-2 cursor-pointer hover:bg-gray-300 transition-colors"
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

                        <div className="w-auto flex flex-row flex-grow justify-end h-full">
                            <button type='submit' className="bg-green-600 px-3 py-1 rounded-full h-full">
                                            <p className="text-white font-instrumentSans">Publish</p>
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
        </>
    );
}

export default CreateBlog;