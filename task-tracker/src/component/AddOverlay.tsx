import Cross from '../assets/cross.png';

interface AddOverlayProps {
  isVisible: boolean;
  header: string;
  taskName: string;
  taskDescription: string;
  buttonName: string;
  buttonColor: string;
  buttonAction: () => void;
  hideOverlayAction: () => void;
  taskNameInput: (value: string) => void;
  taskDescriptionInput: (value: string) => void;
  isDark: boolean;
}

const AddOverlay: React.FC<AddOverlayProps> = ({
  isVisible,
  header,
  taskName,
  taskDescription,
  buttonName,
  buttonColor,
  buttonAction,
  hideOverlayAction,
  taskNameInput,
  taskDescriptionInput,
  isDark
}) => {
  if (!isVisible) return null;

  return (
    <div className={`fixed inset-0 bg-black bg-opacity-50 z-40 flex items-center justify-center`}>
      <div className={`${isDark?'bg-bgDarkColor': 'bg-bgColor'} p-4 w-[90vw] md:w-[35vw] aspect-[2/1] rounded-lg shadow-lg`}>
        <div className="flex flex-col space-y-4">
          <div className='grid grid-cols-2'>
            <div className='w-full text-xl'>
              <p className={`font-openSans font-bold ${isDark?'text-white':'text-black'}`}>{header}</p>
            </div>
            <div className='w-full flex justify-end'>
              <button onClick={hideOverlayAction}>
                <div className='w-4'>
                  <img src={Cross} alt="Close" className={`object-contain ${isDark? 'filter brightness-0 invert':''}`} />
                </div>
              </button>
            </div>
          </div>
          <div className='w-full px-10'>
            <div className='w-full grid grid-cols-7 place-items-center'>
              <div className="w-full col-span-2 text-xl text-left text-black">
                <p className={`font-openSans ${isDark?'text-white':'text-black'}`}>Task Name</p>
              </div>
              <div className="w-full col-span-5">
                <input
                  type="text"
                  className={`${isDark?'bg-shadowDarkBox text-white':'bg-shadowBox text-black'} w-full rounded-xl px-2 text-lg py-1`}
                  value={taskName}
                  onChange={(e) => taskNameInput(e.target.value)}
                />
              </div>
            </div>

            <div className='w-full text-xl mt-5'>
              <p className={`font-openSans ${isDark?'text-white':'text-black'}`}>Task Description</p>
            </div>
            <div className='w-full mt-3'>
              <textarea
                cols={30}
                rows={3}
                className={`${isDark?'bg-shadowDarkBox text-white':'bg-shadowBox text-black'} w-full rounded-xl p-3 text-xl`}
                value={taskDescription}
                onChange={(e) => taskDescriptionInput(e.target.value)}
              />
            </div>
            <div className='w-full mt-3 flex justify-end'>
              <button onClick={buttonAction} className='w-1/3 md:w-1/4'>
                <div className={`${buttonColor} w-full h-10 rounded-full flex items-center justify-center`}>
                  <p className='text-white text-base md:text-xl font-openSans'>{buttonName}</p>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddOverlay;
