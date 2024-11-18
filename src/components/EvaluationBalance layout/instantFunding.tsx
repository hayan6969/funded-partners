"use client"
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setBalance, setPlan, setTotal } from '../redux/slices/counterSlice'
function InstantFunding() {
  const [activeBtn1,setActiveBtn1]=useState(true)
  const [activeBtn2,setActiveBtn2]=useState(false)
  const [activeBtn3,setActiveBtn3]=useState(false)
  const [active,setActive]=useState(false)
  const [oneTime,setOneTime]=useState(1059)
  const [monthly,setMonthly]=useState(599)
  const dispatch = useDispatch();
  return (
    <>
    <div className='w-full h-full flex flex-col gap-4 max-lg:overflow-x-auto'>

<div className='flex justify-between items-center p-1 balance-button-gradient rounded-full gap-4 max-lg:hidden'>
      <button className={`${activeBtn1?'bg-white text-black':'text-white bg-transparent'} text-sm px-5 py-1 rounded-full`} onClick={
        e=>{
          setActiveBtn1(true);
          setActiveBtn2(false);
          setActiveBtn3(false);
          setOneTime(1059)
          setMonthly(599)
          dispatch(setBalance(6000))
        }
      }>$6000</button>
      <button className={`${activeBtn2?'bg-white text-black':'text-white bg-transparent'} text-sm px-5 py-1 rounded-full`}  onClick={e=>{
        setActiveBtn1(false);
        setActiveBtn2(true);
        setActiveBtn3(false);
        setOneTime(2059)
        setMonthly(1099)
        dispatch(setBalance(10000))
      }}>$10000</button>
      <button className={`${activeBtn3?'bg-white text-black':'text-white bg-transparent'} text-sm px-5 py-1 rounded-full`}  onClick={
        e=>{
          setActiveBtn1(false);
          setActiveBtn2(false);
          setActiveBtn3(true);
          setOneTime(3059)
          setMonthly(1599)
          dispatch(setBalance(12000))
          }}>$12000</button>

      </div>
      <div className=' bg-[#252525] flex justify-between items-center px-6 py-4 rounded-xl gap-4 max-lg:hidden'>
      <button className={`${!active?'bg-[#3305FF] text-white':'bg-white text-black'} px-3 py-2 rounded-lg text-lg`} onClick={e=>{
        setActive(false);
        dispatch(setPlan("oneTime"));
        dispatch(setTotal(oneTime));
      }}>${oneTime}&nbsp;<sub className='text-xs'>One time</sub></button>
      <button className={`${active?'bg-[#3305FF] text-white':'bg-white text-black'} px-4 py-2 rounded-lg text-lg`} onClick={e=>{
        setActive(true);
        dispatch(setPlan("monthly"));
        dispatch(setTotal(monthly));
        }}>${monthly}&nbsp;<sub className='text-xs'>Monthly</sub></button>
</div>
<div className=' flex gap-4 w-full max-lg:w-[520px] h-full'>
<div className=' flex flex-col gap-4 py-12 px-4'>
  <div>Trading Period</div>
  <div>Minimum Trading Days</div>
  <div>Win Rate</div>
  <div>Profit Withdrawal Threshold</div>
  <div>Profit Split</div>
  <div>Leverage</div>
  <div>Payout Cycle</div>
  <div>Scaling Plan</div>
</div>
<div className='flex flex-col gap-1.5'>
  <h6 className='text-lg text-center text-[#D489FF]'>Instant Funding</h6>
  <div className='max-lg:w-[250px] flex flex-col gap-4 py-3 px-12 max-lg:px-8 max-md:px-8 bg-gradient-to-br from-[#333333] to-[#3F526B] w-full h-full rounded-lg text-center'>
    <div>Unlimited</div>
    <div>5</div>
    <div>65%</div>
    <div>5% every payout</div>
    <div>60% - 100%</div>
    <div>1:10</div>
    <div>Payout on Demand</div>
    <div>Double at every 10%</div>
  </div>
</div>
</div>
    </div>

    </>
  )
}

export default InstantFunding
