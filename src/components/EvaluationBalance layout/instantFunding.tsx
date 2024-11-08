"use client"
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { incrementByAmount, setAmount } from '../redux/slices/counterSlice'

function InstantFunding() {
  const [activeBtn1,setActiveBtn1]=useState(true)
  const [activeBtn2,setActiveBtn2]=useState(false)
  const [activeBtn3,setActiveBtn3]=useState(false)
  const [active,setActive]=useState(false)
  const dispatch = useDispatch();
  return (
    <div className='w-full h-full flex flex-col items-center gap-4'>

<div className='flex justify-between items-center p-1 balance-button-gradient rounded-full gap-4'>
      <button className={`${activeBtn1?'bg-white text-black':'text-white bg-transparent'} text-sm px-5 py-1 rounded-full`} onClick={
        e=>{
          setActiveBtn1(true);
          setActiveBtn2(false);
          setActiveBtn3(false);
          dispatch(setAmount(6000))
        }
      }>$6000</button>
      <button className={`${activeBtn2?'bg-white text-black':'text-white bg-transparent'} text-sm px-5 py-1 rounded-full`}  onClick={e=>{
        setActiveBtn1(false);
        setActiveBtn2(true);
        setActiveBtn3(false);
        dispatch(setAmount(10000))
      }}>$10000</button>
      <button className={`${activeBtn3?'bg-white text-black':'text-white bg-transparent'} text-sm px-5 py-1 rounded-full`}  onClick={
        e=>{
          setActiveBtn1(false);
          setActiveBtn2(false);
          setActiveBtn3(true);
          dispatch(setAmount(12000))
          }}>$12000</button>

      </div>
      <div className=' bg-[#252525] flex justify-between items-center px-6 py-4 rounded-xl gap-4'>
      <button className={`${!active?'bg-[#3305FF] text-white':'bg-white text-black'} px-3 py-2 rounded-lg text-lg`} onClick={e=>{setActive(false)}}>$1,059&nbsp;<sub className='text-xs'>One time</sub></button>
      <button className={`${active?'bg-[#3305FF] text-white':'bg-white text-black'} px-4 py-2 rounded-lg text-lg`} onClick={e=>{setActive(true)}}>$599&nbsp;<sub className='text-xs'>Monthly</sub></button>
</div>
<div className='flex gap-4 w-full h-full justify-center'>
<div className='flex flex-col gap-4 py-12 px-4'>
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
  <div className='flex flex-col gap-4 py-3 px-12 bg-gradient-to-br from-[#333333] to-[#3F526B] w-full h-full rounded-lg text-center'>
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
  )
}

export default InstantFunding
