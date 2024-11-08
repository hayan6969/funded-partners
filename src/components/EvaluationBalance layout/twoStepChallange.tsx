import React, { useState } from 'react'

function TwoStepChallange() {
    const [activeBtn1,setActiveBtn1]=useState(true)
    const [activeBtn2,setActiveBtn2]=useState(false)
    const [activeBtn3,setActiveBtn3]=useState(false)
    const [activeBtn4,setActiveBtn4]=useState(false)
    const [activeBtn5,setActiveBtn5]=useState(false)
    const [active,setActive]=useState(false)
  return (
    <div className='w-full h-full flex flex-col items-center gap-8'>
      <div className='flex justify-between items-center p-1 balance-button-gradient rounded-full gap-4'>
      <button className={`${activeBtn1?'bg-white text-black':'text-white bg-transparent'} text-sm px-5 py-1 rounded-full`} onClick={
        e=>{
          setActiveBtn1(true);
          setActiveBtn2(false);
          setActiveBtn3(false);
          setActiveBtn4(false);
          setActiveBtn5(false);
          }
          }>$6000</button>
      <button className={`${activeBtn2?'bg-white text-black':'text-white bg-transparent'} text-sm px-5 py-1 rounded-full`}  onClick={e=>{
        setActiveBtn1(false);
        setActiveBtn2(true);
        setActiveBtn3(false);
        setActiveBtn4(false);
        setActiveBtn5(false);
        }}>$10000</button>
      <button className={`${activeBtn3?'bg-white text-black':'text-white bg-transparent'} text-sm px-5 py-1 rounded-full`}  onClick={
        e=>{
          setActiveBtn1(false);
          setActiveBtn2(false);
          setActiveBtn3(true);
          setActiveBtn4(false);
          setActiveBtn5(false);
          }}>$18000</button>
      <button className={`${activeBtn4?'bg-white text-black':'text-white bg-transparent'} text-sm px-5 py-1 rounded-full`}  onClick={
        e=>{
          setActiveBtn1(false);
          setActiveBtn2(false);
          setActiveBtn3(false);
          setActiveBtn4(true);
          setActiveBtn5(false);
          }}>$12000</button>
      <button className={`${activeBtn5?'bg-white text-black':'text-white bg-transparent'} text-sm px-5 py-1 rounded-full`}  onClick={
        e=>{
          setActiveBtn1(false);
          setActiveBtn2(false);
          setActiveBtn3(false);
          setActiveBtn4(false);
          setActiveBtn5(true);
          }}>$21000</button>

      </div>
      <div className=' bg-[#252525] flex justify-between items-center px-6 py-4 rounded-xl gap-4'>
      <button className={`${!active?'bg-[#3305FF] text-white':'bg-white text-black'} px-3 py-2 rounded-lg text-lg`} onClick={e=>{setActive(false)}}>$1,059&nbsp;<sub className='text-xs'>One time</sub></button>
      <button className={`${active?'bg-[#3305FF] text-white':'bg-white text-black'} px-4 py-2 rounded-lg text-lg`} onClick={e=>{setActive(true)}}>$599&nbsp;<sub className='text-xs'>Monthly</sub></button>
</div>
      <div className='flex gap-4 justify-center'> 
        <div className='flex flex-col gap-4 py-20'>
             <div>Trading Period</div>
             <div>Minium Trading Days</div>
             <div>Win Rate</div>
             <div>Profit Withdrawal Threshold</div>
             <div>Profit Target</div>
             <div>Profit Split</div>
             <div>Leverage</div>
             <div>Payout Cycle</div>
             <div>Refundable Fee</div>
        </div>
        <div className='flex gap-2 text-center'>
          <div className='flex flex-col gap-1.5 '>
            <div>Step 1</div>
            <div className='text-lg text-[#D489FF]'>Challange</div>
            <div className='flex flex-col gap-4 py-4 bg-gradient-to-br from-[#333333] to-[#3F526B] rounded-lg px-8'>
             <div>Ultimate</div>
             <div>0</div>
             <div>4%</div>
             <div>8%</div>
             <div>6%</div>
             <div>-</div>
             <div>1:30</div>
             <div>-</div>
             <div>$97</div>
            </div>
          </div>
          <div className='flex flex-col gap-1.5 '>
            <div>Step 2</div>
            <div className='text-lg text-[#D489FF]'>Verification</div>
            <div className='flex flex-col gap-4 py-4 bg-gradient-to-br from-[#233747] to-[#18253D] rounded-lg px-8'>
             <div>Ultimate</div>
             <div>0</div>
             <div>4%</div>
             <div>8%</div>
             <div>6%</div>
             <div>-</div>
             <div>1:30</div>
             <div>-</div>
             <div>-</div>
            </div>
          </div>
          <div className='flex flex-col gap-1.5 '>
            <div>Step 3</div>
            <div className='text-lg text-[#D489FF]'>Funded Trader</div>
            <div className='flex flex-col gap-4 py-4 bg-gradient-to-br from-[#221738] to-[#192630] rounded-lg px-8'>
             <div>Ultimate</div>
             <div>3</div>
             <div>4%</div>
             <div>8%</div>
             <div>None</div>
             <div>85%-90%</div>
             <div>1:30</div>
             <div>Bi-Weekley</div>
             <div>-</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TwoStepChallange
