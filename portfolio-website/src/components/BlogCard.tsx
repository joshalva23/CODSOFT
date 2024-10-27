import React from 'react';

interface BlogCardProps {
    title:string;
    description:string;
    date: string; 
}

const BlogCard: React.FC<BlogCardProps> = ({ title, description, date }) =>
{
    return (
        <>
            <div className='relative group blog-card'>
                <div className="w-[70vw] min-h-56 bg-[#2D2D2D] flex flex-row px-9 py-5 rounded-xl relative z-10">
                    <div className="pr-[5%] space-y-4 overflow-hidden">
                        <div className="text-white font-dmsans text-left text-3xl md:text-5xl font-light ">
                            <p>
                                {title}
                            </p>
                        </div>
                        <div className="text-white font-dmsans text-left text-lg font-thin"> 
                            <p>
                                {description} 
                            </p>
                        </div>
                        <div className="text-white text-left font-robotoMono font-bold text-base">
                            <p>
                                {date}
                            </p>
                        </div>
                    </div>
                    <div className="hidden md:flex justify-center items-center ">
                        <div className="h-40 aspect-[1/1] bg-[#D9D9D9] rounded-lg"></div>
                    </div>
                </div>
                <div className="absolute inset-0 bg-black opacity-50 z-20 rounded-lg group-hover:opacity-0 transition-opacity duration-150"></div>
            </div>
        </>
    );
}

export default BlogCard;