'use client'
import { NAVBAR_ITEMS } from '@/constant'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react'
import { useSelector } from 'react-redux';
import {CircleUserRound} from 'lucide-react'

function Nav() {

    const pathname=usePathname();
    const isLoggedIn = useSelector((state: { auth: { status: boolean } }) => state.auth.status);
  
  return (
    <header className='fixed w-screen flex items-center justify-center z-50'>
    <nav className='w-11/12 mt-2 h-12 rounded-2xl py-8 text-white bg-[#FFFFFF1F]  flex justify-between items-center px-12' style={{'backdropFilter':"blur(20px)"}}>
        <div className='text-2xl font-semibold'>Funded Partners</div>
       <div className='flex gap-6 text-sm list-none items-center'>
        {
        NAVBAR_ITEMS.map(({title,href})=>
        <Link 
        className={`${(pathname==href)?'text-[#3305FF]':" text-white"} hover:text-[#3305FF] duration-200`}
        href={href} 
        key={href}
        >
        {title}
        </Link>
        )}
{
  isLoggedIn ? (
    <Link href={'/dashboard'}>
    <div className='flex items-center gap-2'>
      <CircleUserRound size={20} />
      <span>Profile</span>
    </div>
    </Link>
  ) : (
    <Link href={'/sign-in'} className='px-3 py-2 bg-[#3305FF] rounded-lg'>Login</Link>

  )
}
       </div>
    </nav>
        </header>
  )
}

export default Nav
