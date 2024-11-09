import { useState,useEffect } from "react";
import { useAuth } from "../auth/AuthContext";
import { db } from "../firebase/firebase";
import BlogCard from "./components/BlogCard";
import { BlogNoContent } from "./interface/Blog";
import { collection, getDocs,query, limit, startAfter,orderBy,where } from "firebase/firestore";
import BlogCardLoading from "./loading/BlogCardLoading";

function Home()
{
    const {currentUser} = useAuth();
    const [blogs, setBlogs] = useState<BlogNoContent[]>([]);
    const [loading, setLoading] = useState(true);
    const [lastVisible, setLastVisible] = useState<any>(null);
    const [hasMore, setHasMore] = useState<boolean>(true);
    const [loadingMore, setLoadingMore] = useState<boolean>(false);
    
    const fetchBlogs = async () => {
        if (loadingMore) return; 
        setLoadingMore(true);
        setLoading(true);
        try {
            let numberOfBlogs = 2;
            const blogsRef = collection(db,"blogs");
            let q;

            if(lastVisible){
                q = query(blogsRef,
                     where("isVisible","==",true),
                     orderBy("createdAt","desc"), 
                     startAfter(lastVisible),
                     limit(numberOfBlogs));
            }
            else{
                q = query(blogsRef,
                     where("isVisible","==",true),
                     orderBy("createdAt","desc"),
                     limit(numberOfBlogs));
            }

            const querySnapshot = await getDocs(q);
            const blogsData: BlogNoContent[] = querySnapshot.docs.map((doc)=> ({
                id:doc.id,
                ...doc.data(),
            })) as BlogNoContent[];
            
            setBlogs([...blogs, ...blogsData]);

            if (querySnapshot.docs.length > 0) {
                setLastVisible(querySnapshot.docs[querySnapshot.docs.length - 1]);
            }
            setHasMore(!querySnapshot.empty && querySnapshot.docs.length === numberOfBlogs);

        } catch (error) {
            console.error("Error fetching blogs:", error);
            setHasMore(false);
        } finally {
            setLoading(false);
            setLoadingMore(false);
        }
    };

    useEffect(()=>{
        fetchBlogs();
    },[]);

    return (
        <>
        <div className="w-full min-h-full">
            <div className="w-full h-auto">
                <p className="font-instrumentSans text-black text-2xl font-bold pl-4">Hi {currentUser?.displayName}!</p>
            </div>
            <div className="w-full grid grid-cols-2 my-10">
                {blogs.map((blog,index)=>(
                    <BlogCard key={index} title={blog.title} authorName={blog.authorName} description={blog.description} blogId={blog.id} imageURL={blog.imageUrl} isModifiable={false}/>
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
                            <button onClick={fetchBlogs} className="bg-white w-32 aspect-[3/1] rounded-full">
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
export default Home;