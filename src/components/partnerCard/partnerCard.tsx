import Image from 'next/image'
import React from 'react'
interface className {
  track:string
  title:string // Optional prop
  point1:string
  point2:string
}
const partnerCard: React.FC<className> = ({ 
  track="Track 1", 
  title="Title",
  point1="point-1",
  point2="point-2",
}) => {
  return (
    <div className={`flex flex-col gap-2 bg-[#FFFFFF1F] w-60 h-56 px-4 justify-center relative border-slate-600 rounded-lg`} style={{"backdropFilter":"blur(10px)"}}>
      <span className='absolute w-16 h-6 bg-gradient-to-br from-[#5797D1] to-[#0F3782] -top-3 rounded-sm text-xs flex justify-center items-center'>{track}</span>
      <Image src='./Frame.svg' alt='frameSvg' width={25} height={25} />
      <h6 className='text-xl font-medium mt-2'>{title}</h6>
      <div className='flex gap-2'>
        <Image src='./lets-icons_check-fill.svg' alt='tick icon' width={17} height={17} />
        <p>{point1}</p>
      </div>
      <div className='flex gap-2'>
        <Image src='./lets-icons_check-fill.svg' alt='tick icon' width={17} height={17} />
        <p>{point2}</p>
      </div>
    </div>
  )
}

export default partnerCard
