import BlogCard from '../components/BlogCard.tsx'
import {blogs} from '../content/content.ts';


function Blog()
{
    return (
        <>
        <div className='relative py-12'>
            <div className='flex flex-col space-y-8 items-center justify-center'>
                {blogs.map((blog, _) => (
                    <BlogCard title={blog.title} description={blog.description} date={blog.date} />
                ))}
            </div>
        </div>
        </>
    );
}

export default Blog;