import React from 'react';
import { useParams } from 'react-router-dom';
import { blogs } from '../content/content.ts';


const BlogArticle : React.FC = ()=>
{

    const { id } = useParams<{ id: string }>();

    const Id = id ? parseInt(id) : undefined;

    if (Id === undefined || isNaN(Id) || Id > blogs.length || Id < 0) {
        return (
            <div className='text-white text-5xl mt-20 font-dmsans font-semibold text-center'>
                    Invalid ID
            </div>
        );
    }
    return (
        <>
            <div className='flex flex-col items-start py-12 px-6 space-y-3'>
                <div className='text-white text-5xl font-dmsans font-semibold text-left'>
                    {blogs[Id].title}
                </div>
                <div className='text-white text-sm font-robotoMono font-bold text-left'>
                    {blogs[Id].date}
                </div>
                <div className='text-white text-base font-robotoMono font-thin md:w-4/5 text-justify'>
                    {blogs[Id].description}
                </div>
                <div className='px-2 md:px-6 pt-2 text-white text-lg font-roboto-400 text-justify tracking-normal leading-normal space-y-3'>
                    {
                        blogs[Id].body.map((bod,_)=>(
                            <p>{bod}</p>
                        ))
                    }
                </div>
            </div>
        </>
    );
}

export default BlogArticle;