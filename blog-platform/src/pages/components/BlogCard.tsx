import React from "react";

interface BlogCardProps {
    title: string;
    description: string;
    authorName: string;
    imageURL: string | null;
    blogId: string;
}

const BlogCard: React.FC<BlogCardProps> = ({ title, description, authorName, imageURL, blogId }) => {
    return (
        <>
            <div className="w-full h-full flex justify-center pb-10">
                <div className="text-black bg-gray-100 w-3/4 h-fit px-4 py-4 rounded-xl">
                    <div className="w-full mb-2">
                        <p className="font-bold text-2xl font-notoSans">{title}</p>
                    </div>
                    <div className="w-full mb-2">
                        <p className="font-notoSans">by {authorName}</p>
                    </div>
                    <div className="w-full mb-3">
                        <p className="font-extralight font-notoSans text-sm text-justify px-2"> {description} </p>
                    </div>
                    
                    <div className="w-full overflow-hidden rounded-xl flex justify-center ">
                        <div className="w-[95%] h-1/2 bg-gray-300 overflow-hidden rounded-xl relative">
                            {imageURL && (
                                <img src={imageURL} alt="Blog" className="w-full object-cover" />
                            )}
                            <div className="absolute inset-0 bg-black hover:bg-opacity-0 bg-opacity-50 flex items-center justify-center">
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
};

export default BlogCard;
