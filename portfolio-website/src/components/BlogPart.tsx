import React from 'react';

interface BlogPartProps {
    title:string;
    description:string;
    date: string; 
}

const BlogPart: React.FC<BlogPartProps> = ({ title, description, date }) =>
{
    return (
        <>
            <div className="w-[70vw] min-h-56 bg-[#2D2D2D] flex flex-row px-9 py-5 rounded-xl">
                <div className="pr-[5%] space-y-4">
                    <div className="text-white font-dmsans text-left text-5xl font-light ">
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
        </>
    );
}

export default BlogPart;