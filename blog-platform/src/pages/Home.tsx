import { useEffect } from "react";
import { useAuth } from "../auth/AuthContext.tsx";
function Home()
{
    const {currentUser} = useAuth();
    useEffect(()=>{
        
    },[]);
    return (
        <>
        <div className="text-white font-bold">Welcome {currentUser?.displayName},</div>
        </>
    );
}
export default Home;