import React from 'react';

interface ProjectCardProps {
  projectname: string;
  description: string;
  start_date: string;
  end_date:string;
  company: string;
  image: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ projectname, description, start_date, end_date, company, image }) => {
  return (
    <div className="relative w-[100%] bg-[#2D2D2D] min-h-[45vh] p-4 rounded-lg mb-6 group projectcard">
        <div className="z-10 relative"> 
            <div className="mx-2 h-[25vh] w-auto bg-[#3D3D3D] rounded-lg mb-4 overflow-hidden p-1">
                <img src={`/src/assets/project/${image}`} alt="" className="h-full w-full object-contain" />
            </div>
            <div className="flex gap-2 flex-wrap px-2">
                <p className="text-white text-4xl font-dmsans font-light text-left w-full">{projectname}</p>
                <div className="flex flex-row w-full">
                    <p className="text-white w-1/2 text-sm md:text-base font-dmsans font-light text-left">{'For ' + company}</p>
                    <p className="text-white w-1/2 text-xs md:text-sm font-robotoMono text-right">{start_date + ' - ' + end_date}</p>
                </div>
                <p className="mt-2 text-white font-thin font-dmsans tracking-wide text-base text-justify">{description}</p>
            </div>
        </div>

        <div className="absolute inset-0 bg-black opacity-50 z-20 rounded-lg group-hover:opacity-0 transition-opacity duration-150"></div>
    </div>

  );
};

export default ProjectCard;