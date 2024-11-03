import {Link, Outlet } from "react-router-dom";
import home from '../../assets/home.svg';
import edit from '../../assets/edit.svg';
import profile from '../../assets/profile.svg'
import blog from '../../assets/blog.svg';
import logoutIcon from '../../assets/logout.svg';

function Nav()
{
    
    return (
        <>
        <div className="w-full h-full bg-defYellow">
            <div className="w-full h-auto flex-flex-col py-2">
                <div className="font-instrumentSans font-semibold text-3xl pl-5"><p>Daily Blogger</p></div>
                <div className="w-full h-20 py-4 flex items-center justify-center">
                    <div className="w-1/3 h-3/4 bg-white rounded-full flex justify-center relative">
                        <div className="w-3/4 h-full grid grid-cols-5 place-items-center py-1">
                            <div className="flex items-center justify-center w-auto h-full overflow-hidden ">
                                <Link to='/' className="overflow-hidden h-full hover:cursor-pointer ">
                                    <img src={home} alt="" className="object-contain h-full"/>
                                </Link>
                            </div>
                            <div className="flex items-center justify-center w-auto h-full overflow-hidden ">
                                <Link to='/edit' className="overflow-hidden h-full hover:cursor-pointer ">
                                    <img src={edit} alt="" className="object-contain h-full"/>
                                </Link>
                            </div>
                            <div className="flex items-center justify-center w-auto h-full overflow-hidden ">
                                <Link to='/profile' className="overflow-hidden h-full hover:cursor-pointer ">
                                    <img src={profile} alt="" className="object-contain h-full"/>
                                </Link>
                            </div>
                            <div className="flex items-center justify-center w-auto h-full overflow-hidden ">
                                <Link to='/myblogs' className="overflow-hidden h-full hover:cursor-pointer ">
                                    <img src={blog} alt="" className="object-contain h-full"/>
                                </Link>
                            </div>
                            <div className="flex items-center justify-center w-auto h-full overflow-hidden ">
                                <Link to='/logout' className="overflow-hidden h-full hover:cursor-pointer ">
                                    <img src={logoutIcon} alt="" className="object-contain h-full"/>
                                </Link>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
            <main className="w-full flex flex-grow">
                <Outlet/>
            </main>
        </div>
        </>
    );
}

export default Nav;