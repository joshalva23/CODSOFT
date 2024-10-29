import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';


import TaskCard,{Status} from './component/TaskCard.tsx';
import AddOverlay from './component/AddOverlay.tsx';
import AddButton from './component/AddButton.tsx';

import Sun from './assets/sun.png';

interface Task {
  name: string;
  description: string;
  status: Status;
}

function App() {
  const [tasks, setTasks] = useState<Task[]>(() => {
    const storedTasks = localStorage.getItem('tasks');
    return storedTasks ? JSON.parse(storedTasks) : [];
  });
  const [isCreateTask, setCreateTask] = useState<boolean>(false);
  const [taskName, setTaskName] = useState<string>('');
  const [taskDescription, setTaskDescription] = useState<string>('');
  const [isEditTask, setTaskEdit] = useState<boolean>(false);
  const [editTaskId, setEditTaskId] = useState<number>(0);

  const [isDark , setDark] = useState<boolean>(false);


  const handleAddAction = () => {
    setTaskName('');
    setTaskDescription('');
    setCreateTask(true);
  };

  const closeAddAction = () => {
    setCreateTask(false);
  };

  const handleCreateAction = () => {
    const newTask: Task = {
      name: taskName,
      description: taskDescription,
      status: Status.Created,
    };

    setTasks([ newTask,...tasks]);
    localStorage.setItem('tasks', JSON.stringify(tasks));
    setTaskName('');
    setTaskDescription('');
    closeAddAction();
  };

  const handleDeleteTask = (index:number) =>
  {
      setTasks((prevTasks) => prevTasks.filter((_, i) => i !== index));
      
  }

  const closeEditAction = () => {
    setTaskEdit(false);
  };

  const handleEditTask = (index:number) =>
  {
    if(index >= tasks.length) return;
    setEditTaskId(index);
    setTaskDescription(tasks[editTaskId].description);
    setTaskName(tasks[editTaskId].name);
    setTaskEdit(true);
  }

  const handleEditAction = () =>
  {
    if (editTaskId >= 0 && editTaskId < tasks.length) {
      const updatedTasks = [...tasks];
      updatedTasks[editTaskId] = {
        ...updatedTasks[editTaskId],
        name: taskName,
        description: taskDescription,
        status:Status.Modified
      };

      setTasks(updatedTasks);
      setTaskName('');
      setTaskDescription('');
      closeEditAction();
    }
  }

  const handleCompleteAction = (index: number) =>
  {
    if (index >= 0 && index < tasks.length){
      const prevTasks = [...tasks];
      const [completedTask] = prevTasks.splice(index,1);
      completedTask.status = Status.Completed;
      setTasks(prevTasks);

      setTimeout(() => {
        setTasks([...prevTasks,completedTask]);
      },300);
    } 
  }

  const handleDarkness = ()=>
  {
    setDark(!isDark);
  }

  useEffect(()=>{
    setTasks([
      {
        name:'Task Name',
        description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus non.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus.',
        status: Status.Created
      },
      {
        name:'Task Name',
        description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus non.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus non.',
        status: Status.Modified
      },
      {
        name:'Task Name',
        description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus non.Lorem ipsum dolor sit amet, consectetur adipiscing elit..',
        status: Status.Completed
      },
      {
        name:'Task Name',
        description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus non.Lorem ipsum dolor sit amet, consectetur adipiscing elit..',
        status: Status.Completed
      },
    ])
  },
  []);


  /* Use this for locally storing task data */
  // const saveTasksToLocalStorage = () => {
  //   localStorage.setItem('tasks', JSON.stringify(tasks));
  // };

  // useEffect(() => {
  //   const intervalId = setInterval(saveTasksToLocalStorage, 3000);

  //   return () => {
  //     clearInterval(intervalId);
  //   };
  // }, [tasks]); 


  // useEffect(() => {
  //   const storedTasks = localStorage.getItem('tasks');
  //   if (storedTasks) {
  //     setTasks(JSON.parse(storedTasks));
  //   }
  // }, []);


  return (
    <div className={`${isDark?'bg-bgDarkColor' : 'bg-bgColor'} w-full min-h-full flex flex-grow flex-col relative`}>
      <div className={`w-full  fixed ${isCreateTask||isEditTask ? 'z-0': 'z-50'}  h-32 `}>
        <div className={`absolute bottom-0 w-full h-full bg-gradient-to-b ${isDark?'from-bgDarkColor' : 'from-bgColor'} ${isDark?'via-bgDarkColor/90' : 'via-bgColor/90'} to-transparent pointer-events-none`}></div>
        <div className={`w-full grid grid-cols-2 h-16 relative`}>
          <div className='w-full'>
            <div className='bg-blueOne w-fit h-16 flex items-center '>
              <div className='text-center px-6'>
                <p className={`uppercase text-2xl border-b-2 pb-0.5 font-inter font-semibold italic text-white `}>Plan It!</p>
              </div>
            </div>
          </div>
          <div className='flex justify-end h-16 items-center pr-4 md:pr-12 w-full'>
            <button onClick={handleDarkness} className='h-full'>
              <div className={`h-2/3 aspect-[1/1] ${isDark?'bg-shadowDarkBox': 'bg-shadowBox'} rounded-full flex items-center justify-center`}>
                  <img src={Sun} alt="" className={`h-3/4 object-contain ${isDark?'filter brightness-0 invert':''}`} />
              </div>
            </button>
          </div>
        </div>
        
      </div>

      <div className="relative w-full h-28 py-10 md:py-12 mt-20">
        <div className='flex flex-row w-[85vw] justify-end items-center'>
          <AddButton action={handleAddAction} isDark={isDark}/>
        </div>
      </div>

      <div className="relative w-full h-auto py-6">
        <div className='flex flex-col w-full space-y-5'>
        <AnimatePresence>
          {tasks.map((task, index) => (
              <motion.div
                key={task.name + index} 
                layout 
                initial={{ opacity: 0, translateY: -20 }}
                animate={{ opacity: 1, translateY: 0 }}
                exit={{ opacity: 0, translateY: 20 }}
                transition={{ duration: 1 }}
              >
                <TaskCard key={index} id={index} title={task.name} description={task.description} status={task.status} deleteTask={handleDeleteTask} editTask={handleEditTask} completeTask={handleCompleteAction} isDark={isDark} />
              </motion.div>
          ))}
          </AnimatePresence>
          {
            tasks.length === 0 && 
            (<div className='flex flex-grow flex-col w-full items-center   justify-center font-openSans text-3xl font-semibold py-2'>
              <p>Nothing Planned Yet</p>
              <div className='h-32 w-auto'>
                <img src="/SleepyCat.png" alt="" className='object-contain' />
              </div>
            </div>)
          }
          
        </div>
      </div>

      <AddOverlay 
        buttonAction={handleCreateAction} 
        buttonColor='bg-green-600'  
        buttonName='Create'
        header='Task Create'
        hideOverlayAction={closeAddAction}
        isVisible={isCreateTask}
        taskDescription={taskDescription}
        taskName={taskName}
        taskDescriptionInput={setTaskDescription}
        taskNameInput={setTaskName}
        isDark={isDark}
      />

      <AddOverlay 
        buttonAction={handleEditAction} 
        buttonColor='bg-red-600'  
        buttonName='Edit'
        header='Task Edit'
        hideOverlayAction={closeEditAction}
        isVisible={isEditTask}
        taskDescription={taskDescription}
        taskName={taskName}
        taskDescriptionInput={setTaskDescription}
        taskNameInput={setTaskName}
        isDark={isDark}
      />
    </div>
  );
}

export default App;