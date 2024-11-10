
'use client'
import Footer from '@/components/footer/footer'
import Nav from '@/components/navbar/nav'
import Card1 from '@/components/pricingCard/card1'
import PricingCard from '@/components/pricingCard/pricingCard'
import ReferralCard from '@/components/pricingCard/referralCard'
import { store } from '@/components/redux/store/store'
import Image from 'next/image'
import React, { useState } from 'react'
import { Provider } from 'react-redux'


function Page() {
  const [active,setActive]=useState(false)
  return (
<>
      <Nav/>
      <section className='w-screen relative bg-[#080808] flex flex-col before:absolute before:w-96 before:h-96 before:bg-[#3305FF] before:bg-opacity-10 before:rounded-full before:z-[1] before:blur-3xl before:-top-10 after:absolute after:w-96 after:h-96 after:bg-[#9CF05C]  after:bg-opacity-10 after:rounded-full after:z-[1] after:blur-3xl after:top-10 after:-left-20 py-24  gap-12'>
 <div className='flex flex-col gap-4 text-center w-full z-10 px-44'>
  <h1 className='text-6xl font-bold relative bg-gradient-to-r from-[#FFFFFF] to-[#5B8BE3] bg-clip-text text-transparent'>Make Every Click Count</h1>
  <div className='tracking-wider'>Starting earning up to 15% comission on every referral</div>
  <div className='w-full flex justify-center gap-12 items-center'>
        <button className={` ${!active?'bg-[#3305FF] text-white':'bg-white text-black before:border-black'} relative flex justify-center items-center px-6 py-2 rounded-lg my-4`} onClick={e=>{
          setActive(false);
        }}>Become on Affiliate</button>
  <button className={`${active?'bg-[#3305FF] text-white':'bg-white text-black'} px-3 py-2 rounded-lg`} onClick={e=>{
    setActive(true) 
    }}>Affiliate Login</button>
        </div>
 </div>
 <div className='flex flex-col w-full gap-4 text-center z-10 px-44'>
  <h5 className='text-2xl font-semibold'>How will your jurney look ?</h5>
  <p className='tracking-wider'>Join our Affiliate Program, refer your unique link to your community, and enjoy your commissions from the moment a trader joins the FundedSquad program.</p>
 </div>
 <div className='w-screen h-[40rem] p-8 bg-gradient-to-br from-[#171717] to-[#131D2B] flex relative justify-between'>
  <div><PricingCard track='Track 1' title='Starter' point1='Earn 10% commision' point2='1-30 Referrals' /></div>
  <div className={`absolute left-1/4 ml-3 top-1/4`}>
  <div className='absolute -top-20 -left-1/4 translate-x-8'><Image src='./arrow.svg' alt='arrowicon' width={60} height={0} /></div>
  <PricingCard track='Track 2' title='Pro' point1='Earn 20% commision' point2='1-60 Referrals' />
  </div>
  <div className='absolute left-2/4 bottom-1/4'>
  <div className='absolute -top-16 -left-1/4 translate-x-8'><Image src='./arrow.svg' alt='arrowicon' width={60} height={0} /></div>
  <PricingCard track='Track 3' title='Elite' point1='Earn 30% commision' point2='1-80 Referrals' />
  </div>
  <div className='absolute left-3/4 bottom-8'>
  <div className='absolute -top-20 -left-1/4 translate-x-8'><Image src='./arrow.svg' alt='arrowicon' width={60} height={0} /></div>
  <PricingCard track='Track 4' title='Legendary' point1='Earn 40% commision' point2='1-100 Referrals' />
  </div>
 </div>
 <div className='w-full flex justify-center gap-12 items-center'>
        <button className={` ${!active?'bg-[#3305FF] text-white':'bg-white text-black before:border-black'} relative flex justify-center items-center px-6 py-2 rounded-lg my-4`} onClick={e=>{
          setActive(false);
        }}>Basic Bonus</button>
  <button className={`${active?'bg-[#3305FF] text-white':'bg-white text-black'} px-3 py-2 rounded-lg`} onClick={e=>{
    setActive(true) 
    }}>Monthly Bonus</button>
        </div>
        <div className='flex justify-between items-center px-24'>
          <ReferralCard referral='100' price={10} detail='2 Step account' />
          <ReferralCard referral='200' price={30} detail='2 Step account +500$' />
          <ReferralCard referral='300' price={40} detail='2 Step account +1000$' />
          <ReferralCard referral='400' price={50} detail='2 Step account +2000$' />
        </div>
       <h5 className='text-4xl font-medium text-center my-24'>How our affiliate modle work?</h5>
       <div className='flex gap-2 justify-between px-24 items-center'>
        <Card1 no={1} title='Apply' text='Apply for the affiliate program'/>
        <Card1 no={2} title="Get Verified" text="After verification, you'll receive your affiliate account access via email"/>
        <Card1 no={3} title='Promote' text='Promote FundedPartner and share your affiliate link'/>
        <Card1 no={4} title='Track' text='Promote FundedPartner and share your affiliate link'/>
        <Card1 no={5} title='Request Payout' text='Promote FundedPartner and share your affiliate link'/>
       </div>
      </section>
      <Footer/>
  </>
    

  )
}

export default Page
