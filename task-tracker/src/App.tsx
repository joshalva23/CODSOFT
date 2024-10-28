import { useState } from 'react';

import Plus from './assets/plus.png';
function AddButton()
{
  return (
      <>
        <button>
          <div className='h-12 aspect-[3/1] bg-shadowBox rounded-full grid grid-cols-5 place-items-center'>
            <div className='col-span-2 w-full h-full flex flex-row items-center justify-end'>
              <div className='w-1/2 h-full grid place-items-center '>
                <img src={Plus} alt="" className='object-contain' />
              </div>
            </div>
            <div className='col-span-3 w-full h-full flex flex-row items-center justify-start pl-2'>
              <p className='font-inter font-semibold text-2xl'>Add</p>
            </div>
          </div>
        </button>
      </>
  );
}

import TaskCard,{Status} from './component/TaskCard.tsx';
function App() {

  return (
    <>
      <div className='bg-bgColor w-full h-full flex flex-col relative'>

        <div className='w-full'>
          <div className='bg-blueOne w-fit h-16 flex items-center'>
            <div className='text-center px-6'>
              <p className='uppercase text-white text-2xl border-b-2 border-inherit pb-0.5 font-inter font-semibold italic'>Plan It!</p>
            </div>
          </div>
        </div>

        <div className="relative w-full h-28 py-10 md:py-12">
            <div className='flex flex-row w-[85vw] justify-end items-center'>
                    <AddButton />
            </div>
        </div>

        <div className="relative w-full h-auto py-6">
            <div className='flex flex-col w-full space-y-5'>
                    <TaskCard id={2} title={'Task Name'} description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus non.'} status={Status.Created}/>
                    <TaskCard id={2} title={'Task Name'} description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus non.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus non.'} status={Status.Modified}/>
                    <TaskCard id={2} title={'Task Name'} description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus non.'} status={Status.Completed}/>
            </div>
        </div>

      </div>
    </>
  )
}

export default App;
