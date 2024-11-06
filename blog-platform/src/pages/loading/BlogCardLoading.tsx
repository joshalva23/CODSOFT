
const BlogCardLoading = () => {
    return (
        <>
            <div className="w-full h-full flex items-center justify-center pb-10">
                <div className="text-black bg-gray-100 w-3/4 h-92 px-4 py-4 rounded-xl animate-pulse">
                    <div className="w-full mb-2">
                        <div className="bg-gray-300 h-10 w-2/3 rounded-md"></div>
                    </div>
                    <div className="w-full mb-2">
                        <div className="bg-gray-300 h-6 w-1/4 rounded-md"></div>
                    </div>
                    <div className="w-full mb-3 px-2">
                        <div className="bg-gray-300 h-16 w-full rounded-md "></div>
                    </div>
                    
                    <div className="w-full overflow-hidden rounded-xl flex justify-center ">
                        <div className="w-full h-44 bg-gray-300 rounded-xl relative">
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
};

export default BlogCardLoading;
