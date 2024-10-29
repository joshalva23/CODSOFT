
import { ReactNode} from 'react';

import React from 'react';

interface ContactCardProps {
    image:string;
    children: ReactNode;
}

const ContactCard: React.FC<ContactCardProps> = ({image, children}) =>
{
    return (
            <div className="grid grid-cols-2 place-items-center w-full md:w-[75vw] h-40 md:h-[30vh] relative overflow-hidden" >
                    <div className="flex items-center md:justify-end justify-center w-full h-full overflow-hidden">
                        <img src={image} alt="" className=" md:mr-60 w-16 md:w-1/4 h-full object-contain filter brightness-0 invert"  />
                    </div>
                    <div className="flex items-center justify-start w-full h-full md:pl-20relative ">
                        <div className="flex flex-col gap-3 text-white text-xs md:text-base font-lexend font-regular text-left">
                            {children}
                        </div>
                    </div>
                    
            </div>
    );
}

export default ContactCard;