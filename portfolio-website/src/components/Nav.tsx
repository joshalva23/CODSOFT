import { Outlet, Link } from 'react-router-dom';

function Nav()
{
    return (
        <>
            <div>
            <div className="static">
                <div className="p-0 m-0 h-16 w-screen absolute top-0 left-0 bg-bgcolor z-0"></div>
                <div className="p-0 m-0 h-20 bg-gradient-to-r from-[#7c3715] to-[#ac5f36] w-screen absolute top-0 left-0 z-10">
                    <div className="h-full flex space-x-10 justify-center items-center">
                        <Link to="/">
                            <div className="bg-white p-1.5 px-4 rounded-2xl font-lexend">
                                <span className="font-semibold text-black text-base" >
                                    Home
                                </span>
                            </div>
                        </Link>
                        <Link to="/blogs">
                            <div className="bg-[#431600] p-1.5 px-6 rounded-2xl font-lexend">
                                <span className="font-semibold text-white text-base">
                                    Blog
                                </span>
                            </div>
                        </Link>
                        <Link to="/projects">
                            <div className="bg-transparent  px-3 rounded-2xl font-lexend">
                                <span className="font-semibold text-white text-base">
                                    Projects
                                </span>
                            </div>
                        </Link>
                        <Link to="/about">
                            <div className="bg-transparent px-3 rounded-2xl font-lexend">
                                <span className="font-semibold text-white text-base">
                                    About Me
                                </span>
                            </div>
                        </Link>
                        <Link to="/contact">
                            <div className="bg-transparent rounded-2xl font-lexend">
                                <span className="font-semibold text-white text-base">
                                    Get in Touch
                                </span>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="pt-20">
                <Outlet />
            </div>
            
            </div>
        </>
    )
}


export default Nav;