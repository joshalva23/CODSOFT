import BlogPart from '../components/BlogPart.tsx'
function Blog()
{
    const blogs =[
        {
            title:"How to get Started as a developer!",
            description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tempus magna sagittis, imperdiet augue vel, pellentesque odio. Nulla facilisi. Curabitur feugiat, velit nec venenatis bibendum, odio libero mollis tortor, at malesuada nulla libero nec lectus.",
            date:"25.10.2024"
        },
        {
            title:"Working your way through tech - a perspective",
            description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tempus magna sagittis, imperdiet augue vel, pellentesque odio. Nulla facilisi. Curabitur feugiat, velit nec venenatis bibendum, odio libero mollis tortor, at malesuada nulla libero nec lectus. ",
            date:"25.10.2024"
        },{
            title:"How to get Started as a developer!",
            description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tempus magna sagittis, imperdiet augue vel, pellentesque odio. Nulla facilisi. Curabitur feugiat, velit nec venenatis bibendum, odio libero mollis tortor, at malesuada nulla libero nec lectus.",
            date:"25.10.2024"
        },
    ];

    return (
        <>
            <div className='flex flex-col space-y-8 mt-12 items-center justify-center'>
            {blogs.map((blog, _) => (
                <BlogPart title={blog.title} description={blog.description} date={blog.date} />
            ))}

            </div>

            <div>This is Blog</div>
        </>
    );
}

export default Blog;