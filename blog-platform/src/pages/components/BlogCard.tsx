import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { db } from "../../firebase/firebase";
import { doc,updateDoc } from "firebase/firestore";

import editImage from '../../assets/pencil.svg';
import EyeImage from '../../assets/eye.png';
import NoEyeImage from '../../assets/NoEye.png';
import BinImage from '../../assets/bin.svg';

interface BlogCardProps {
    title: string;
    description: string;
    authorName: string;
    imageURL: string | null;
    blogId: string;
    isModifiable:boolean,
    isVisible?:boolean,
    deleteBlog?: (value:string) => void;
}

const BlogCard: React.FC<BlogCardProps> = ({ title, description, authorName, imageURL, blogId, isModifiable, isVisible,deleteBlog }) => {

    const navigate = useNavigate();
    const [visible,setVisible] = useState<boolean>(isVisible ?? false);

    const handleNavigation = (blogId:string)=>{
        navigate(`/blogs/${blogId}`)
    }

    const handleEditBlog = ()=>{
        navigate(`/edit/${blogId}`);
    }

    const handleVisibleBlog = async ()=>{
        try {
            const newVisibility = !visible;
            setVisible(newVisibility);
    

            const blogRef = doc(db, "blogs", blogId);
            await updateDoc(blogRef, {
                isVisible: newVisibility
            });
    
        } catch (error) {
            console.error("Error updating visibility:", error);
            setVisible(visible);
        }
    }

    return (
        <>
            <div className="w-full h-full flex justify-center pb-10">
                <div className="text-black bg-gray-100 w-3/4 h-fit px-4 py-4 rounded-xl">
                    <button className="w-full flex flex-col  text-left break-words" onClick={()=>handleNavigation(blogId)}>
                        <div className="w-full mb-2">
                            <p className="font-bold text-2xl font-notoSans">{title}</p>
                        </div>
                        <div className="w-full mb-2">
                            <p className="font-notoSans">by {authorName}</p>
                        </div>
                        <div className="w-full mb-3">
                            <p className="font-extralight font-notoSans text-sm text-justify px-2"> {description} </p>
                        </div>
                    </button>
                    <div className="w-full flex flex-row overflow-hidden rounded-xl flex justify-center ">
                        <div className={`${isModifiable?'w-[75%]':'w-[95%]'} h-80 bg-gray-300 overflow-hidden rounded-xl relative`}>
                            <img src={imageURL ? imageURL:'/placeholder-img.svg'} alt="BlogImage" className=" w-full h-full object-cover object-[50%_50%]" />
                            <div className="absolute inset-0 bg-black hover:bg-opacity-0 bg-opacity-50 flex items-center justify-center">
                            </div>
                        </div>
                        {isModifiable &&
                        (
                            <div className="w-[25%] flex flex-col justify-center items-center space-y-6">
                                <button onClick={(e)=>handleVisibleBlog()} className="w-10 aspect-[1/1]">
                                    <img src={visible ? EyeImage:NoEyeImage} alt="h-full w-full object-contain" />
                                </button>
                                <button onClick={(e)=>handleEditBlog()} className="w-10 aspect-[1/1]">
                                    <img src={editImage} alt="h-full w-full object-contain" />
                                </button>
                                <button onClick={(e)=> deleteBlog && deleteBlog(blogId)} className="w-10  aspect-[1/1]">
                                    <img src={BinImage} alt="h-full w-full object-contain" />
                                </button>
                            </div>
                        )}
                    </div>

                </div>
            </div>
        </>
    );
};

export default BlogCard;
