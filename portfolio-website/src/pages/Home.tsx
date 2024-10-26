
import Octagon from '../components/Octagon.tsx';
import img1 from '../assets/home-2.png';
import img2 from '../assets/home-3.png';

function Home()
{
    return (
        <>
            <div className="flex flex-col w-full" id='top'>

                <div className="m-0 p-0 bg-transparent text-black relative h-[65vh]">
                        <div className="w-auto h-auto flex flex-row absolute top-32 left-56">
                            <div className="relative inline-flex items-center justify-center">
                                <div className="w-32 aspect-[1.2/1] rounded-full bg-[#2A2A2A] absolute z-10"></div>
                                <div className=" text-7xl font-bold font-robotoMono text-orangeOne absolute z-20">
                                    Hi
                                </div>
                            </div>
                            <div className="relative w-auto pl-20 text-7xl ">
                                <p>
                                    <span className="font-bold tracking-tighter font-robotoMono text-orangeOne">I'm</span>
                                    &nbsp;
                                    <span className="font-dotGothic16 tracking-wider text-7xl text-white">Joshua.</span>
                                </p>
                            </div>
                        </div>

                        <Octagon size="20" />
                        <div className="w-auto h-auto flex flex-row absolute top-1/2 left-44">
                            <p className="text-3xl text-white font-robotoMono font-extralight">A developer with limitless domains.</p>
                        </div>
                        
                </div>

                <div className="m-0 p-0 bg-[#2D2D2D] text-black w-full relative block h-auto py-16">
                    <div className="flex flex-col md:flex-row items-start justify-between w-full px-40 space-y-8 md:space-y-0">
                        <div className="w-[30vw] mt-12">
                            <p className="uppercase text-left font-robotoMono font-light text-white">
                                Passionate professional with a dedication to creating solutions that are both innovative and meaningful. My work spans creating apps that enable people to experience the topic with new eyes, and I take pride in delivering projects that reflect a commitment to both technical precision and user experience.
                            </p>
                        </div>
                        <div className="w-[26vw]">
                            <img src={img1} alt="Profile" className="h-[20vw] w-auto" />
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row items-start justify-between w-full px-40 mt-32 space-y-8 md:space-y-0">
                        <div className="w-[26vw] -mt-12">
                            <img src={img2} alt="Profile" className="h-[20vw] w-auto" />
                        </div>
                        <div className="w-[30vw]">
                            <p className="uppercase text-left font-robotoMono font-light text-white">
                            Discover my journey as a <span className='text-orangeOne'>Developer</span>, where creativity meets precision. Here, you'll find a curated selection of my projects, crafted to deliver real-world impact and innovation. My focus is on blending cutting-edge technology with thoughtful design to solve complex challenges. Let's connect and explore how we can bring ideas to life together.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="m-0 p-0 bg-transparent text-black w-full relative block h-auto pt-8 pb-4">

                    <div className="font-lexend text-white font-light space-y-4">
                        <p>Let's get in Touch! Discuss possibilities.</p>
                        <p>Explore more of my portfolio through the navbar.</p>
                    </div>

                    <div className="mt-12 font-lexend text-orangeOne font-medium mb-0">
                        <a href="#nav">
                            <p>Click Here to Go Up!</p>
                        </a>
                    </div>

                </div>

            </div>

        </>
    );
}

export default Home;