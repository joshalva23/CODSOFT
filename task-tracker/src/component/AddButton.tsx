import Plus from '../assets/plus.png';


function AddButton({action, isDark} : {action: ()=> void;isDark:boolean;})
{
  return (
      <>
        <button onClick={action}>
          <div className={`h-8 md:h-12 aspect-[3/1] ${isDark?'bg-shadowDarkBox': 'bg-shadowBox'} rounded-full grid grid-cols-5 place-items-center`}>
            <div className='col-span-2 w-full h-full flex flex-row items-center justify-end'>
              <div className='w-1/2 h-full grid place-items-center '>
                <img src={Plus} alt="" className={`object-contain ${isDark?'filter brightness-0 invert':''}`} />
              </div>
            </div>
            <div className='col-span-3 w-full h-full flex flex-row items-center justify-start pl-2'>
              <p className={`font-inter font-semibold text-lg md:text-2xl ${isDark?'text-white':'text-black'}`}>Add</p>
            </div>
          </div>
        </button>
      </>
  );
}

export default AddButton;