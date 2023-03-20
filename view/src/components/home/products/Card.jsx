import React from 'react';

const Card = ({ name, price }) => {
    return (
        <>
            <div className="
                w-64 
                bg-[color:var(--child-background-color)] 
                rounded-sm 
                overflow-hidden 
                shadow 
                hover:cursor-pointer"
            >
                <img src="/league-of-legends.jpg" className='w-full'/>
                <p className='text-white text-base px-2 py-3'>{name}</p>
                <div className="flex items-center justify-between px-2 py-2">
                    <button className='btn-primary px-6 py-2 font-bold'>Purchase</button>
                    <p className='pr-4 font-bold text-base text-green-400'>${price}</p>
                </div>
            </div>
        </>
    )
}

export default Card;