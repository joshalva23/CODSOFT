import StackCard from "../components/StackCard.tsx";
import { stackrows } from "../content/content.ts";

function AboutMe()
{
    return (
        <>
            <div className="my-10 flex w-full items-center justify-center">
                <p className="font-lexend text-2xl md:text-5xl font-regular text-white border-b-4 border-white pb-0.5 ">Tech Stack</p>
            </div>
            <div className="w-full mt-20 px-6">
                <div className={` sm:grid md:grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-1   sm:place-items-center md:place-items-center w-full mb-24 `}>
                {
                    stackrows.map((stacks,index) =>(
                        <div 
                        className={`lg:grid 
                            ${index%2 === 0 ? 'lg:grid-cols-4 lg:px-32 ':'lg:grid-cols-3 lg:px-72 '} place-items-center w-full mb-10 md:mb-24 lg:mb-24 space-y-10 md:space-y-10 lg:space-y-0`}
                        >
                        {
                            stacks.map((stack,index)=>(
                                <StackCard key={index} name={stack.name} image={stack.image} />
                            ))
                        }
                        </div>
                    ))
                }
                </div>
            
            </div>
            <div className="w-full h-20 pb-40 lg:-mt-20 flex items-center justify-center">
                <div className="w-[75vw] bg-[#303030] h-1.5 rounded-3xl"></div>
            </div>
        </>
    );
}

export default AboutMe;