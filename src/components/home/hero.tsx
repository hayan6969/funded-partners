import React from 'react'
import Spline from '@splinetool/react-spline/next';

function Hero() {
  return (
    <>
    <section id='Home' className='w-screen h-screen relative before:absolute before:w-96 before:h-96 before:bg-[#3305FF] before:bg-opacity-10 before:rounded-full before:z-[1] before:blur-3xl before:-top-10 after:absolute after:w-96 after:h-96 after:bg-[#9CF05C]  after:bg-opacity-0 after:rounded-full after:z-[1] after:blur-3xl after:-bottom-20 after:-right-20 overflow-hidden'>  
      <div className='w-full h-full overflow-hidden before:absolute before:w-full before:h-full before:bg-[#151414] before:opacity-80'>
        <video src={require('../../../videos/trading video.mp4')} autoPlay loop muted className='w-full' ></video>
      </div>
<div className='w-screen h-screen absolute top-0 left-0 flex justify-between items-center px-24 max-lg:px-12 max-lg:pt-12 max-md:pt-20 max-md:px-6 max-sm:px-1'>
  <div className='flex flex-col gap-4 text-white w-3/5 max-lg:w-full'>
    <h1 className='text-5xl'>Instant funding</h1>
    <h1 className='text-5xl text-[#94BFFF] font-semibold'>No Wait, Just Trade</h1>
    <p className='text-light'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus non pellentesque lectus. Mauris sollicitudin nisl sed ipsum euismod, </p>
  <div className='flex gap-4 text-sm my-4 z-10 max-lg:flex-col'>
  <button className='px-3 py-2 bg-[#3305FF] rounded-lg '>Start Challange</button>
  <button className='px-3 py-2 bg-white rounded-lg text-black'>Join Our Discord</button>
  </div>
  </div>
  <div className='w-2/5 h-[150vh] z-10 overflow-y-hidden overflow-x-auto flex justify-center items-center max-lg:hidden'>
  <Spline 
        scene="https://prod.spline.design/YJLrAxEBzpT8h1ah/scene.splinecode" 
        />
  </div>
</div>
    </section>
      </>
  )
}

export default Hero