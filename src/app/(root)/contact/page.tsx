'use client'
import Footer from '@/components/footer/footer'
import Nav from '@/components/navbar/nav'
import React from 'react'

function page() {
    const handleSubmit=(e: { preventDefault: () => void })=>{e.preventDefault()}
  return (
    <div className=''>
    <Nav/>
    <section className='w-screen relative bg-[#080808] flex flex-col before:absolute before:w-96 before:h-96 before:bg-[#3305FF] before:bg-opacity-10 before:rounded-full before:z-[1] before:blur-3xl before:-top-10 after:absolute after:w-96 after:h-96 after:bg-[#9CF05C]  after:bg-opacity-10 after:rounded-full after:z-[1] after:blur-3xl after:top-10 after:-left-20 py-24'>
      <div className='flex flex-col gap-6 items-center text-white px-44'>
        <div className='text-center flex flex-col gap-4'>
        <div className='text-6xl text-[#BAAEFF] font-bold'>Lets Get In Touch</div>
        <div className='text-2xl font-semibold'>Don't be afraid to say hello</div>
        </div>
        <div className='flex flex-col rounded-xl overflow-hidden'>
         <div className='flex flex-col gap-2 bg-[#3305FF] text-center p-2'> 
            <p>Great! We're excited to hear from you lets's start something togather.</p>
            <p className='font-medium'>Contact us for any quaries.</p>
            <p className='font-medium'>Email: support@fundedpartners.com</p>
         </div>
         <form onSubmit={handleSubmit} className='flex flex-col gap-2 py-6 bg-[#FFFFFF1F] bg-opacity-20 ' style={{"backdropFilter":"blur(10px)"}}>
            <div className='flex flex-col gap-1'>
            <h5 className='text-2xl font-medium ml-4'>Contact</h5>
            <hr className='opacity-20' />
            </div>
            <div className='flex flex-col'>
           <input type="text" placeholder='Fullname' className='text-lg  bg-transparent border-none outline-none px-4 py-2' />
           <hr className='opacity-20' />
            </div>
            <div className='flex w-full gap-4'>
            <div className='flex flex-col w-full'>
           <input type="text" placeholder='Phone' className='text-lg  bg-transparent border-none outline-none px-4 py-2' />
           <hr className='opacity-20' />
            </div>
            <div className='flex flex-col w-full'>
           <input type="text" placeholder='Email' className='text-lg  bg-transparent border-none outline-none px-4 py-2' />
           <hr className='opacity-20' />
            </div>
            </div>
            <div className='flex flex-col w-full'>
           <input type="text" placeholder='Subject' className='text-lg  bg-transparent border-none outline-none px-4 py-2' />
           <hr className='opacity-20' />
            </div>
            <div className='flex flex-col w-full'>
           <label htmlFor="textarea" className='text-gray-500 pl-4 py-2'>Message</label>
           <hr className='opacity-20' />
              <textarea name="textarea" className='w-full h-full bg-transparent border-none outline-none p-4 text-base' rows={7}></textarea>
           <hr className='opacity-20' />
            </div>
            <div className='w-full flex justify-center py-2'>
            <input type="submit" value='Send Message' className='bg-[#3305FF] px-24 py-2 rounded-md text-sm cursor-pointer' />
            </div>
         </form>
        </div>
      </div>
         <div className='w-full translate-y-60 relative before:absolute before:w-96 before:h-96 before:bg-[#3305FF] before:bg-opacity-10 before:rounded-full before:z-[1] before:blur-3xl before:bottom-16 before:-left-20 after:absolute after:w-96 after:h-96 after:bg-[#9CF05C]  after:bg-opacity-10 after:rounded-full after:z-[1] after:blur-3xl after:bottom-0 after:-left-10'></div>
    </section>
    <Footer/>
    </div>
  )
}

export default page
