'use client'
import Footer from '@/components/footer/footer'
import Nav from '@/components/navbar/nav'
import React from 'react'
import { useForm, SubmitHandler } from "react-hook-form"
type Inputs = {
  example: string
  exampleRequired: string
}
function page() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>()
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data)
  return (
    <div className=''>
    <Nav/>
    <section className='w-screen relative bg-[#080808] flex flex-col before:absolute before:w-96 before:h-96 before:bg-[#3305FF] before:bg-opacity-10 before:rounded-full before:z-[1] before:blur-3xl before:-top-10 after:absolute after:w-96 after:h-96 after:bg-[#9CF05C]  after:bg-opacity-10 after:rounded-full after:z-[1] after:blur-3xl after:top-10 after:-left-20 py-24'>
      <div className='flex flex-col gap-6 items-center text-white px-44'>
        <div className='text-center flex flex-col gap-4'>
        <div className='text-6xl font-bold relative bg-gradient-to-r from-[#FFFFFF] to-[#5B8BE3] bg-clip-text text-transparent'>Lets Get In Touch</div>
        <div className='text-2xl font-semibold'>Don't be afraid to say hello</div>
        </div>
        <div className='flex flex-col rounded-xl overflow-hidden'>
         <div className='flex flex-col gap-2 bg-[#3305FF] text-center p-2'> 
            <p>Great! We're excited to hear from you lets's start something togather.</p>
            <p className='font-medium'>Contact us for any quaries.</p>
            <p className='font-medium'>Email: support@fundedpartners.com</p>
         </div>
         <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-2 py-6 bg-[#FFFFFF1F] bg-opacity-20 text-base font-normal' style={{"backdropFilter":"blur(10px)"}}>
            <div className='flex flex-col gap-1 pb-2 border-b border-slate-600 '>
            <h5 className='text-2xl font-medium ml-4'>Contact</h5>
            </div>
            <div className='flex flex-col border-b border-slate-600'>
           <input type="text" placeholder='Fullname' {...register("fullname")} className='text-lg  bg-transparent border-none outline-none px-4 py-2'/>
           <hr className='opacity-20' />
            </div>
            <div className='flex w-full gap-4 '>
            <div className='flex flex-col w-full border-b border-slate-600'>
           <input type="text" placeholder='Phone' {...register("phone no")} className='text-lg  bg-transparent border-none outline-none px-4 py-2' />
           <hr className='opacity-20' />
            </div>
            <div className='flex flex-col w-full border-b border-slate-600'>
           <input type="text" placeholder='Email' {...register("email")} className='text-lg  bg-transparent border-none outline-none px-4 py-2' />
           <hr className='opacity-20' />
            </div>
            </div>
            <div className='flex flex-col w-full border-b border-slate-600'>
           <input type="text" placeholder='Subject' {...register("subject")} className='text-lg  bg-transparent border-none outline-none px-4 py-2' />
           <hr className='opacity-20' />
            </div>
            <div className='flex flex-col w-full border-b border-slate-600'>
           <label htmlFor="textarea" className='text-gray-500 pl-4 py-2'>Message</label>
           <hr className='opacity-20' />
              <input {...register("message")}  className='w-full h-full bg-transparent border-none outline-none p-4 text-base'></input>
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
