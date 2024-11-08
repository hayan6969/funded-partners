import { NAVBAR_ITEMS, SOCIAL_ITEMS } from '@/constant'
import Link from 'next/link'
import React from 'react'

function Footer() {
  return (
    <footer className='w-screen px-24 py-12 gap-24 bg-black flex justify-between text-white'>
        <div className='flex flex-col w-3/5'>
            <div className='flex justify-between'>
                <div className='text-5xl font-bold text-[#0081FE]'>
                  Logo.
                </div>
                <div className='flex flex-col gap-2'>
                <h3 className='text-lg font-semibold mb-1'>Sitemap</h3>
                {NAVBAR_ITEMS.map(item=><Link key={item.href} className='hover:text-[#3305FF] duration-200' href={item.href}>{item.title}</Link>)}
                </div>
                <div className='flex flex-col gap-2 mb-1'>
                <h3 className='text-lg font-semibold'>Socials</h3>
               {SOCIAL_ITEMS.map(item=><Link key={item.title} className='hover:text-[#3305FF] duration-200' href={item.href}>{item.title}</Link>)}
                </div>
            </div>
            <div className='flex py-6 w-full justify-between pr-10'>
                <p className='border-b border-[#0081FE]'>contect@lift.agency</p>
                <p>(123)456-7890</p>
            </div>
        </div>
        <div className='w-2/5 flex flex-col gap-6'>
        <h3 className='text-lg font-semibold mb-1'>Head Office</h3>
        <div  className=' flex gap-6'>
         <p className='text-sm'>Xilliams Corner Wine © 2017. 1112 A Market St <br/> # Ste B22, Charlottesville, CA 45565</p>
        </div>
         <div className='flex flex-col gap-2'>
        <h3 className='text-lg
         font-semibold mb-1'>News letter</h3>
         <div className=' border-b border-slate-600 flex justify-between gap-4 text-sm'>
          <input type="email" name='email' className='px-2 py-1 text-white bg-transparent outline-[#0081FE] border-none w-full' placeholder='Enter your email address' />
          <label htmlFor="email">
            <img src="./Mail icon.svg" alt="Mail_Icon" />
          </label>
         </div>
         </div>
         <p className='text-sm mt-9'>&copy; 2020 Light Media All right reserved</p>
        </div>
    </footer>
  )
}

export default Footer
