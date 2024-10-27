import React from 'react';

interface StackCardProps{
    name:string;
    image:string;
}

const StackCard: React.FC<StackCardProps>= ({name,image})=>
{
    return (
        <>
            <div>
                <div className="relative w-44 aspect-[1/1] b-0">
                    <div className="w-full h-full bg-[#303030] overflow-hidden rounded-xl p-1.5">
                        <img src={`/src/assets/stack/${image}`} alt={image} className="h-full w-full object-contain" />
                    </div>
                </div>
                <div className="relative mt-2 text-white">
                    <p className="font-dmmono font-medium text-center">{name}</p>
                </div>
            </div>
        </>
    );
}

export default StackCard;