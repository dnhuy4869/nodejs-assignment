import React from 'react';

const Card = ({ product }) => {
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
                <img src={`http://127.0.0.1:8000/public/images/${product.image}`} className='w-full h-44'/>
                <p className='text-white text-base px-2 py-3'>{product.name}</p>
                <div className="flex items-center justify-between px-2 pt-1.5 pb-4">
                    <button className='btn-primary px-6 py-2 font-bold'>Purchase</button>
                    <p className='pr-4 font-bold text-base text-green-400'>${product.price}</p>
                </div>
            </div>
        </>
    )
}

export default Card;