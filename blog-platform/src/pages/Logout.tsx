import { logout } from "../auth/auth.tsx";
import {useEffect} from 'react';
import { Navigate } from "react-router-dom";
function Logout()
{
    useEffect(()=>{
        logout();
    },[]);
    return (
        <>
        <Navigate to="/login"/>
        </>
    );
}

export default Logout;