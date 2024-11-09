import {useState, useEffect} from "react";
import { BlogNoContent } from "./interface/Blog";
import { useAuth } from "../auth/AuthContext";
import { collection,getDocs, where, query,limit,startAfter,orderBy,doc,deleteDoc } from "firebase/firestore";
import { db } from "../firebase/firebase";

import BlogCardLoading from "./loading/BlogCardLoading";
import BlogCard from "./components/BlogCard";

function PersonalBlog()
{
    const {currentUser} = useAuth();
    const [blogs, setBlogs] = useState<BlogNoContent[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [lastVisible, setLastVisible] = useState<any>(null);
    const [hasMore, setHasMore] = useState<boolean>(true);
    const [loadingMore, setLoadingMore] = useState<boolean>(false);

    const currentUserId = currentUser?.uid.toString();
    console.log(currentUserId)

    const fetchPersonalBlogs = async ()=>
    {
        if(loadingMore) return;
        setLoadingMore(true);
        setLoading(true);

        try{
            let numberOfBlogs = 2;
            const blogsRef = collection(db,"blogs");
            let q;

            if(lastVisible)
            {
                q = query(blogsRef,
                    where("authorId" ,"==", currentUserId),
                    orderBy("createdAt","desc"),
                    startAfter(lastVisible),
                    limit(numberOfBlogs));
            }
            else{
                q = query(blogsRef,
                    where("authorId" ,"==", currentUserId),
                    orderBy("createdAt","desc"),
                    limit(numberOfBlogs));
            }

            const querySnapshot = await getDocs(q);
            const blogsData: BlogNoContent[] = querySnapshot.docs.map((doc)=>({
                id:doc.id,
                ...doc.data()
            })) as BlogNoContent[];

            setBlogs([...blogs,...blogsData]);

            console.log(querySnapshot.docs);

            if(querySnapshot.docs.length > 0)
            {
                setLastVisible(querySnapshot.docs[querySnapshot.docs.length-1]);
            }
            setHasMore(!querySnapshot.empty && querySnapshot.docs.length === numberOfBlogs);
        }
        catch(error){
            console.error("Error fetching blogs:",error);
            setHasMore(false);
        }finally{
            setLoading(false);
            setLoadingMore(false);
        }
    }

    useEffect(()=>{
        fetchPersonalBlogs();
    },[]);
    
    

    const handleDeleteBlog = async (id:string)=>{
        try{
            const blogIndex = blogs.findIndex(blog => blog.id === id);

            if (blogIndex === -1) {
                console.error("Blog not found with id:", id);
                return;
            }

            const blogRef = doc(db, "blogs", id);
            await deleteDoc(blogRef);

            setBlogs(prevBlogs => prevBlogs.filter(blog => blog.id !== id));

            console.log("Blog deleted successfully:", id);

        }catch(error)
        {
            console.error("Error deleting blog:", error);
        }
    }
    


    return (
        <>
        <div className="w-full min-h-full">
            <div className="w-full grid grid-cols-2 my-10">
                {blogs.map((blog,index)=>(
                    <BlogCard key={index} title={blog.title} authorName={blog.authorName} description={blog.description} blogId={blog.id} imageURL={blog.imageUrl} isVisible={blog.isVisible} isModifiable={true} deleteBlog={handleDeleteBlog} />
                )) }
                {loading && (
                    <>
                        <BlogCardLoading />
                        <BlogCardLoading />
                   </>
                )}
                {!loading && hasMore && (
                    <>
                        <div className="w-full flex items-center justify-center col-span-2">
                            <button onClick={fetchPersonalBlogs} className="bg-white w-32 aspect-[3/1] rounded-full">
                                <p className="text-black font-notoSans font-bold ">More</p>
                            </button>
                        </div>
                    </>
                )}
                {!blogs.length && !loading && (
                    <>
                        <div className="w-full flex items-center justify-center col-span-2">
                                <p className="text-black font-notoSans font-bold text-2xl">Nothing to Show!</p>
                        </div>
                    </>
                )}
            </div>

        </div>
        </>
    );
}

export default PersonalBlog;