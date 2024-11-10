import React from 'react'
interface className {
no:number;
title:string;
text:string;
}
const Card1: React.FC<className> = ({
no=1,
title='title',
text="text"

 })=>{
  return (
    <div className='w-48 h-44 bg-gradient-to-br from-[#3C4CDB] to-[#A844CB] p-0.5 rounded-lg relative before:absolute before:w-[98%] before:rounded-lg before:h-[98%] before:bg-[#080808] flex justify-center items-center'>
        <div className='relative w-full h-full flex flex-col py-10 items-center text-center gap-1 rounded-lg bg-white bg-opacity-[0.01] px-4' style={{"backdropFilter":"blur(10px)"}}>
        <span className='absolute w-16 h-6 bg-gradient-to-br from-[#5797D1] to-[#0F3782] -top-3 rounded-sm text-xs flex justify-center items-center'>Step 0{no}</span>
         <h3 className='text-lg font-semibold'>{title}</h3>
         <p className='text-sm font-light text-gray-400'>{text}</p>
        </div>
    </div>
)
}

export default Card1;