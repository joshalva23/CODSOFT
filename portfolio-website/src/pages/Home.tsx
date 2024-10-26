import '../styles/polygon.css';
import Octagon from '../components/Octagon.tsx';

function Home()
{
    return (
        <>
    
            <div className="flex flex-col w-full">
                <div className="m-0 p-0 bg-transparent text-black relative h-[65vh] ">
                        <div className="w-auto h-auto flex flex-row absolute top-32 left-56">
                            <div className="relative inline-flex items-center justify-center">
                                <div className="w-32 aspect-[1.2/1] rounded-full bg-[#2A2A2A] absolute z-10"></div>
                                <div className=" text-7xl font-bold font-robotoMono text-orangeOne absolute z-20">
                                    Hi
                                </div>
                            </div>
                            <div className="relative w-auto pl-20 text-7xl ">
                                <p>
                                    <span className="font-bold font-robotoMono text-orangeOne">I'm</span>
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
                <div className="m-0 p-0 bg-[#2D2D2D] text-black w-full relative h-[75vh] ">
                    <p className="text-center text-white">Content Here</p>
                    
                </div>
               
                
            </div>

        </>
    );
}

export default Home;