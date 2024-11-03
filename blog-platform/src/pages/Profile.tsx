import { useAuth } from "../auth/AuthContext";

function Profile()
{
    const {currentUser} = useAuth();
    return (
        <>
        <div className="w-full h-auto flex items-center justify-center">
            <div className="w-2/3 py-8 px-5 place-items-center bg-white rounded-xl space-y-10 text-black font-instrumentSans ">
                <div className="grid grid-cols-2 w-full">
                    <div className="text-center font-light"><p>Name</p></div>
                    <div className="text-center font-semibold"><p>{currentUser?.displayName}</p></div>
                </div>
                <div className="grid grid-cols-2 w-full">
                    <div className="text-center font-light"><p>Email</p></div>
                    <div className="text-center font-semibold"><p>{currentUser?.email}</p></div>
                </div>
                
            </div>
        </div>
        </>
    );
}

export default Profile;