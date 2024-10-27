import { ReactNode} from "react";
import React from 'react';
import { contacts } from "../content/content.ts";

function SpaceBar()
{
    return (
        <div className="w-full h-5 flex items-center justify-center">
                    <div className="w-[90vw] md:w-[75vw] bg-[#303030] h-1 rounded-3xl"></div>
        </div>
    );
}

interface ContactCardProps {
    image:string;
    children: ReactNode;
}

const ContactCard: React.FC<ContactCardProps> = ({image, children}) =>
{
    return (
            <div className="grid grid-cols-2 place-items-center md:w-[75vw] h-40 md:h-[30vh] relative rounded-xl" overflow-hidden>
                    <div className="flex items-center justify-end">
                        <img src={`/src/assets/contact/${image}`} alt="" className=" md:mr-60 w-16 md:w-1/4 h-full object-contain filter brightness-0 invert"  />
                    </div>
                    <div className="flex items-center justify-start w-full h-full md:pl-20">
                        <div className="flex flex-col gap-3 text-white text-xs md:text-base font-lexend font-regular text-left">
                            {children}
                        </div>
                    </div>
                    
            </div>
    );
}

function Contact()
{
    return (
        <>
            <div className="w-full h-full flex flex-col items-center justify-center py-10 ">
                <ContactCard image='mail.png'>
                            {contacts.email.map((mail,_)=>(
                                <p>{mail}</p>
                            ))}
                </ContactCard>
                <SpaceBar />

                <ContactCard image='github.png'>
                    <a href={contacts.github.link} target="blank">
                        <p>
                            {contacts.github.display}
                        </p>
                    </a>
                
                </ContactCard>

                <SpaceBar />

                <ContactCard image='linkedin.png'>
                    <a href={contacts.linkedIn.link} target="blank">
                        <p>
                            {contacts.linkedIn.display}
                        </p>
                    </a>
                
                </ContactCard>

                <div>
                    <div className="text-white">
                        {contacts.ps}
                    </div>
                </div>

            </div>
        </>
    );
}

export default Contact;