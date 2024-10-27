import {projects} from '../content/content.ts';
import ProjectCard from '../components/ProjectCard.tsx';
import {Link } from 'react-router-dom';
function Projects()
{
    return (
        <>
        <div className='relative '>
            <div className='flex h-auto w-auto justify-center items-center py-14 px-12'>
                <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 place-items-center">

                    {projects.map((project, _) => (
                        <ProjectCard projectname={project.name} description={project.description} start_date={project.start_date} end_date={project.end_date} company={project.company} image={project.image}  />
                    ))}
                </div>
            </div>
            <div className='flex justify-center items-center pb-16'>
                <Link to='/contact'>
                    <p className="font-lexend font-center font-light text-xl text-white">
                        Get in Touch to know more!
                    </p>
                </Link>
            </div>
        </div>
        </>
    );
}

export default Projects;