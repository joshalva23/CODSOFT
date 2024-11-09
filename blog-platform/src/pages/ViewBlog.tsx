import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { BlogYesContent } from './interface/Blog';
import { doc, getDoc } from "firebase/firestore";
import { db } from '../firebase/firebase';
import SplashScreen from './components/SplashScreen';

function ViewBlog() {
    const { blogId } = useParams<{ blogId: string }>();
    const [document, setDocument] = useState<BlogYesContent | null>(null);
    const [loading, setLoading] = useState(true);

    const fetchDocument = async (id: string | undefined) => {
        if (!id) {
            console.error("Document ID is undefined");
            setLoading(false);
            return;
        }
        try {
            const docRef = doc(db, "blogs", id);
            const docSnap = await getDoc(docRef);

            if (docSnap.exists()) {
                setDocument(docSnap.data() as BlogYesContent);
            } else {
                setDocument(null);
            }
        } catch (error) {
            setDocument(null);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchDocument(blogId);
    }, []);

    return (
            loading ? (
                <SplashScreen />
            ) : (
                <div className='w-full'>
                    <div className='w-full grid place-items-center my-10'>
                        <div className='w-3/4 border-t-4 border-black rounded-full'></div>
                    </div>
                    <div className='text-black flex flex-col px-2 mb-10 '>
                        {document ? (
                            <>
                                <div className='space-y-1 pl-5 mb-4'>
                                    <div className='font-notoSans text-3xl font-bold'>
                                        {document.title}
                                    </div>
                                    <div className='font-inclusiveSans text-lg text-[#222222]'>
                                        {document.description}
                                    </div>
                                </div>
                                {document.imageUrl && (
                                    <div className='w-full grid place-items-center mb-10'>
                                        <div className='w-3/5 '>
                                            <img src={document.imageUrl} alt="Blog" className="w-full h-auto object-contain rounded-xl" />
                                        </div>
                                    </div>
                                )}
                                <div className='space-y-3 px-3 text-justify font-notoSans font-medium text-sm leading-6 indent-20'>
                                    {document.content.map((para, index) => (
                                        <div key={index}>
                                            {para}
                                        </div>
                                    ))}
                                </div>
                            </>
                        ) : (
                            <p className='text-center text-3xl font-bold font-notoSans'>Blog not found.</p>
                        )}
                    </div>
                    <div className='w-full grid place-items-center my-10'>
                        <div className='w-3/4 border-t-4 border-black rounded-full'></div>
                    </div>
                </div>
            )
    );
}

export default ViewBlog;
