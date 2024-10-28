import { useEffect, useState } from 'react';


import TaskCard,{Status} from './component/TaskCard.tsx';
import AddOverlay from './component/AddOverlay.tsx';
import AddButton from './component/AddButton.tsx';

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

    setTasks([...tasks, newTask]);
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
    if (index >= 0 && index < tasks.length) {
      const inTasks = [...tasks];
      const completeTask = {
        ...inTasks[index],
        status:Status.Completed
      };
      inTasks.splice(index,1);
      inTasks.push(completeTask);
      setTasks(inTasks);
    }
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
      }
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
    <div className='bg-bgColor w-full h-max md:h-full flex flex-grow flex-col relative'>
      <div className='w-full'>
        <div className='bg-blueOne w-fit h-16 flex items-center'>
          <div className='text-center px-6'>
            <p className='uppercase text-white text-2xl border-b-2 border-inherit pb-0.5 font-inter font-semibold italic'>Plan It!</p>
          </div>
        </div>
      </div>

      <div className="relative w-full h-28 py-10 md:py-12">
        <div className='flex flex-row w-[85vw] justify-end items-center'>
          <AddButton action={handleAddAction} />
        </div>
      </div>

      <div className="relative w-full h-auto py-6">
        <div className='flex flex-col w-full space-y-5'>
          {tasks.map((task, index) => (
            <TaskCard key={index} id={index} title={task.name} description={task.description} status={task.status} deleteTask={handleDeleteTask} editTask={handleEditTask} completeTask={handleCompleteAction}/>
          ))}
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
      />
    </div>
  );
}

export default App;