import ContactCard from "../components/ContactCard.tsx";
import { contacts } from "../content/content.ts";

// function SpaceBar()
// {
//     return (
//         <div className="w-full h-5 flex items-center justify-center hidden">
//                     <div className="w-[90vw] md:w-[75vw] bg-[#303030] h-1 rounded-3xl"></div>
//         </div>
//     );
// }



function Contact()
{

    const openEmail = (email:string) => {
        const subject = "GET IN TOUCH : From portfolio site";
        const body = "Hi Joshua,\nI saw your portfolio site. I was interested to know more about ...(continue from here)\n\nRegards,\n(Your Name)";
        window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    };
    return (
        <>
            <div className="w-full h-full flex flex-col items-center justify-center py-10 divide-y-4 divide-[#303030] ">
                <ContactCard image='/contact/mail.png'>
                            {contacts.email.map((mail,_)=>(
                                <div onClick={()=>openEmail(mail)}><p>{mail}</p></div>
                            ))}
                </ContactCard>

                <ContactCard image='/contact/github.png'>
                    <a href={contacts.github.link} target="blank">
                        <p>
                            {contacts.github.display}
                        </p>
                    </a>
                
                </ContactCard>

                <ContactCard image='/contact/linkedin.png'>
                    <a href={contacts.linkedIn.link} target="blank">
                        <p>
                            {contacts.linkedIn.display}
                        </p>
                    </a>
                </ContactCard>

                <div className="py-6">
                    <div className="text-white font-lexend font-light text-center text-base">
                        {contacts.ps}
                    </div>
                </div>

            </div>
        </>
    );
}

export default Contact;