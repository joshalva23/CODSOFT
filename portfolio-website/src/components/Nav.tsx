import { useState } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

function Nav() {
    const [isSidebarOpen, setSidebarOpen] = useState(false);

    const OpenNav = () => setSidebarOpen(true);
    const CloseNav = () => setSidebarOpen(false);

    return (
        <>
            <div className="flex flex-col w-screen" id="nav">

                <button
                    id="openSidebar"
                    className="fixed top-2 right-4 z-40 text-gray-900 p-3 hover:shadow-xl transition duration-300 md:hidden"
                    onClick={OpenNav}
                >
                    <FontAwesomeIcon icon={faBars} size="lg" className="text-black" />
                </button>

                <nav
                    className={`w-full bg-gradient-to-r from-[#7c3715] to-[#ac5f36] p-4 md:p-0 absolute md:static z-50 ${
                        isSidebarOpen ? 'block' : 'hidden'
                    } md:block`}
                >
                    <div className="container mx-auto flex flex-col md:flex-row h-screen md:h-20 p-12 md:p-0 items-center md:justify-center space-y-4 md:space-y-0 md:space-x-10">

                        <button
                            className="fixed top-2 right-4 md:hidden text-3xl font-bold text-white"
                            onClick={CloseNav}
                        >
                            &times;
                        </button>

                        <Link to="/" className="w-full md:w-auto text-center" onClick={CloseNav}>
                            <div className="bg-white p-2 md:p-1.5 px-6 md:px-4 rounded-2xl font-lexend text-center">
                                <span className="font-semibold text-black text-sm md:text-base">Home</span>
                            </div>
                        </Link>

                        <Link to="/blogs" className="w-full md:w-auto text-center" onClick={CloseNav}>
                            <div className="bg-[#431600] p-2 md:p-1.5 px-6 md:px-4 rounded-2xl font-lexend text-center">
                                <span className="font-semibold text-white text-sm md:text-base">Blog</span>
                            </div>
                        </Link>

                        <Link to="/projects" className="w-full md:w-auto text-center" onClick={CloseNav}>
                            <div className="bg-transparent px-4 md:px-3 rounded-2xl font-lexend text-center">
                                <span className="font-semibold text-white text-sm md:text-base">Projects</span>
                            </div>
                        </Link>

                        <Link to="/about" className="w-full md:w-auto text-center" onClick={CloseNav}>
                            <div className="bg-transparent px-4 md:px-3 rounded-2xl font-lexend text-center">
                                <span className="font-semibold text-white text-sm md:text-base">About Me</span>
                            </div>
                        </Link>

                        <Link to="/contact" className="w-full md:w-auto text-center" onClick={CloseNav}>
                            <div className="bg-transparent px-4 md:px-3 rounded-2xl font-lexend text-center">
                                <span className="font-semibold text-white text-sm md:text-base">Get in Touch</span>
                            </div>
                        </Link>
                    </div>
                </nav>

                
            </div>
            <main className="flex-grow w-screen">
                    <Outlet />
            </main>
        </>
    );
}

export default Nav;
