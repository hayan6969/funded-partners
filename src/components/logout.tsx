'use client'
import authService from '@/appwrite/auth';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import React from 'react'


const LogoutButton = () => {
    const router = useRouter();
  return (
    <Button onClick={()=>{
        authService.logout();
        router.push('/sign-in')

      }}>Logout</Button>
  )
}

export default LogoutButton