import { motion } from 'framer-motion';

export enum Status {
    Created = "created",
    Modified = "modified",
    Completed = "completed",
  }
  

interface TaskCardProps{
    id: number;
    title:string;
    description:string;
    status: Status;
    deleteTask: (value:number)=> void;
    editTask: (value:number) => void;
    completeTask:(value:number) => void;
    isDark:boolean;
}


import Edit from '../assets/edit.png';
import Delete from '../assets/bin.png';
import Tick from '../assets/tick.png';

const TaskCard: React.FC<TaskCardProps> = ({id,title,description,status, deleteTask, editTask,completeTask,isDark})=>
{
    return (
        <>
            <motion.div
            className="w-full h-auto flex justify-center"
            initial={{ opacity: 0, translateY: -5 }}
            animate={{ opacity: 1, translateY: 0 }}
            exit={{ opacity: 0, translateY: -5 }}
            layout 
            transition={{ duration: 0.3 }} 
            >
                <div className={`w-3/4 bg-shadowBox rounded-xl min-h-20 px-10 py-4 space-y-1 ${isDark?'bg-shadowDarkBox': 'bg-shadowBox'}`}>
                    <div className="w-full h-auto relative flex flex-row">
                            <div className="w-fit text-left font-openSans font-medium text-xl">
                                <p className={`
                                    ${status === Status.Completed ? 'line-through' : ''}
                                    ${isDark?'text-white':'text-black'}
                                    `}>
                                    {title}
                                </p>
                            </div>
                            <div className="flex items-center px-2">
                                <div className={`h-3 aspect-[1/1] rounded-full 
                                    ${status === Status.Created ? 'bg-green-500' : 
                                    status === Status.Modified ? 'bg-red-500' : 
                                    'bg-black'}`}
                                ></div>
                            </div>
                    </div>
                    <div className="flex flex-col md:flex-row">
                        <div className="text-left font-raleway w-full md:w-[80%]">
                               <p className={`${isDark?'text-white':'text-black'}
                                    `}>{description}</p> 
                        </div>
                        <div className="flex flex-row justify-end items-end w-full md:w-[20%] mt-2 md:mt-0 space-x-2">
                        {status !== Status.Completed && (
                            <>
                                <button onClick={() => completeTask(id)}>
                                <div className="h-7 w-7">
                                    <img src={Tick} alt="Complete Task" className={`object-contain ${isDark?'filter brightness-0 invert':''}`}  />
                                </div>
                                </button>

                                <button onClick={() => editTask(id)}>
                                <div className="h-7 w-7">
                                    <img src={Edit} alt="Edit Task" className={`object-contain ${isDark?'filter brightness-0 invert ':''}`}  />
                                </div>
                                </button>
                            </>
                        )}
                            
                            <button onClick={()=> deleteTask(id)}>
                                <div className='h-7 w-7'>
                                    <img src={Delete} alt={Delete} className={`object-contain ${isDark?'filter brightness-0 invert':''}`}  />
                                </div>
                            </button>
                            
                        </div>
                    </div>
                </div>
            </motion.div>
        </>
    );
}


export default TaskCard;

