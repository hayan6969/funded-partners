'use client'
import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import Nav from '@/components/navbar/nav';
import { RootState } from '../redux/store/store';
import { useDispatch } from 'react-redux';
import { setBalance, setPlan, setTotal, setType } from '../redux/slices/counterSlice';
import TwoStepChallange from '../EvaluationBalance layout/twoStepChallange';
import InstantFunding from '../EvaluationBalance layout/instantFunding';

function Pricing() {
    const [activeBtn1,setActiveBtn1]=useState(true)
    const [activeBtn2,setActiveBtn2]=useState(false)
    const [activeBtn3,setActiveBtn3]=useState(false)
    const [activeBtn4,setActiveBtn4]=useState(false)
    const [activeBtn5,setActiveBtn5]=useState(false)
    const [active,setActive]=useState(false)
 const [balanceBtn,setBalanceBtn]=useState(false)
    const [radioActive,setRadioActive]=useState(false)
    const [oneTime,setOneTime]=useState(1059)
    const [monthly,setMonthly]=useState(599)
    const count = useSelector((state:RootState) => state.counter);
    const dispatch =useDispatch();
  return (
<>
    <div className='w-full h-full flex flex-col gap-12 text-white z-40 relative before:absolute before:w-96 before:h-96 before:bg-gradient-to-br before:from-[#8248A3] before:to-[#9CF05C] before:opacity-10 before:rounded-full before:blur-3xl before:-right20 before:-top-52 after:absolute after:w-96 after:h-96 after:bg-[#9CF05C] after:bg-opacity-10 after:rounded-full  after:blur-3xl after:-top-72 after:-right-52 py-24'>
 <div className='flex flex-col gap-4 w-full justify-center items-center text-center'>
            <h1 className='text-4xl font-bold'>Our Evaluation</h1>
            <p className='mx-44 text-sm max-xl:mx-32 max-lg:mx-8 max-md:mx-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus non pellentesque lectus. Mauris sollicitudin nisl sed ipsum euismod, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus non pellentesque lectus. Mauris sollicitudin nisl sed ipsum euismod, </p>
        </div>
                 {/* -------------------------------------------------| mobile |-------------------------------------------------- */}
                 <div className=' flex-col gap-6 w-full justify-center items-center text-center max-lg:flex hidden'>
                 <div className='w-3/5 p-1 bg-gradient-to-r from-[#5C5DB6] to-[#3305FF] rounded-full flex justify-between'>
                 <button className={`${!active?'bg-white text-black':'text-white bg-transparent'} text-sm w-1/3 py-2 rounded-full`} onClick={ e=>{
                  dispatch(setType("instantFunding"))
                  setActive(false)
                  setBalanceBtn(false)
                }}>Instant Funding</button>
                 <button className={`${active?'bg-white text-black':'text-white bg-transparent'} text-sm w-1/3 py-2 rounded-full`} onClick={ e=>{
                   dispatch(setType("2stepChallange"))
                   setBalanceBtn(true)
                  setActive(true)}}>2 Step Challanges</button>
                 </div>
                 <div className={`${balanceBtn?"hidden":"flex"} w-1/3 max-md:w-2/3 flex-col p-4 border border-[#4B4B4B]  justify-between items-center rounded-xl gap-4  flex`}>
                 <h5 className='text-lg text-center'>Select Balance:</h5>
      <button className={`${activeBtn1?'bg-white text-black':'text-white bg-[#3305FF]'} text-sm px-5 py-2 rounded-xl w-full`} onClick={
        e=>{
          setActiveBtn1(true);
          setActiveBtn2(false);
          setActiveBtn3(false);
          setOneTime(1059)
          setMonthly(599)
          dispatch(setBalance(10000))
        }
      }>$6000</button>
      <button className={`${activeBtn2?'bg-white text-black':'text-white bg-[#3305FF]'} text-sm px-5 py-2 rounded-xl w-full`} onClick={
        e=>{
          setActiveBtn1(false);
          setActiveBtn2(true);
          setActiveBtn3(false);
          setOneTime(1559)
          setMonthly(1099)
          dispatch(setBalance(10000))
        }
      }>$10000</button>
      <button className={`${activeBtn3?'bg-white text-black':'text-white bg-[#3305FF]'} text-sm px-5 py-2 rounded-xl w-full`} onClick={
        e=>{
          setActiveBtn1(false);
          setActiveBtn2(false);
          setActiveBtn3(true);
          setOneTime(2059)
          setMonthly(1599)
          dispatch(setBalance(12000))
        }
      }>$12000</button>
   
      </div>
                 <div className={`${balanceBtn?"flex":"hidden"} w-1/3 max-md:w-2/3 flex-col p-4 border border-[#4B4B4B]  justify-between items-center rounded-xl gap-4  flex`}>
                 <h5 className='text-lg text-center'>Select Balance:</h5>
      <button className={`${activeBtn1?'bg-white text-black':'text-white bg-[#3305FF]'} text-sm px-5 py-2 rounded-xl w-full`} onClick={
        e=>{
          setActiveBtn1(true);
          setActiveBtn2(false);
          setActiveBtn3(false);
          setActiveBtn4(false);
          setActiveBtn5(false);
          setOneTime(1059)
          setMonthly(599)
          dispatch(setBalance(10000))
        }
      }>$6000</button>
      <button className={`${activeBtn2?'bg-white text-black':'text-white bg-[#3305FF]'} text-sm px-5 py-2 rounded-xl w-full`} onClick={
        e=>{
          setActiveBtn1(false);
          setActiveBtn2(true);
          setActiveBtn3(false);
          setActiveBtn4(false);
          setActiveBtn5(false);
          setOneTime(1559)
          setMonthly(1099)
          dispatch(setBalance(10000))
        }
      }>$10000</button>
      <button className={`${activeBtn3?'bg-white text-black':'text-white bg-[#3305FF]'} text-sm px-5 py-2 rounded-xl w-full`} onClick={
        e=>{
          setActiveBtn1(false);
          setActiveBtn2(false);
          setActiveBtn3(true);
          setActiveBtn4(false);
          setActiveBtn5(false);
          setOneTime(2059)
          setMonthly(1599)
          dispatch(setBalance(12000))
        }
      }>$12000</button>
         <button className={`${activeBtn4?'bg-white text-black':'text-white bg-[#3305FF]'} text-sm px-5 py-2 rounded-xl w-full`} onClick={
        e=>{
          setActiveBtn1(false);
          setActiveBtn2(false);
          setActiveBtn3(false);
          setActiveBtn4(true);
          setActiveBtn5(false);
          setOneTime(2559)
          setMonthly(2099)
          dispatch(setBalance(18000))
        }
      }>$18000</button>
      <button className={`${activeBtn5?'bg-white text-black':'text-white bg-[#3305FF]'} text-sm px-5 py-2 rounded-xl w-full`} onClick={
        e=>{
          setActiveBtn1(false);
          setActiveBtn2(false);
          setActiveBtn2(false);
          setActiveBtn4(false);
          setActiveBtn5(true);
          setOneTime(2559)
          setMonthly(2099)
          dispatch(setBalance(21000))
        }
      }>$21000</button>
      </div>
      </div>
          {/* -------------------------------------------------| Screen |-------------------------------------------------- */}
        <div className='w-full flex justify-evenly items-center max-lg:hidden'>
        <button className={` ${!active?'bg-[#3305FF] text-white':'bg-white text-black before:border-black'} relative flex justify-center items-center px-6 py-2 before:p-0.5 rounded-lg my-4 before:rounded-sm before:bg-white before:-top-3 before:absolute before:content-["Trending"] before:text-black before:text-xs before:border before:shadow-md`} onClick={e=>{
          setActive(false);
          dispatch(setType("instantFunding"))
        }}>Instant Finding</button>
  <button className={`${active?'bg-[#3305FF] text-white':'bg-white text-black'} px-3 py-2 rounded-lg`} onClick={e=>{
    setActive(true)
    dispatch(setType("2stepChallange"))
    }}>2 Step Challange</button>
        </div>
       
        <div className='w-full p-10 border border-[#4B4B4B] rounded-xl flex flex-col justify-center gap-6 overflow-x-hidden'>
             <h5 className='text-lg text-center max-lg:hidden'>Select Balance:</h5>
             <div className='hidden gap-12 items-center justify-center w-full max-lg:flex'>
        <div className='flex gap-2 items-center cursor-pointer'  onClick={e=>{
            setRadioActive(true)
            dispatch(setPlan("oneTime"));
            dispatch(setTotal(oneTime));
            }}>
          <div className='w-4 h-4 bg-white rounded-full flex justify-center items-center'>
            <div className={`${radioActive?"bg-blue-600":"bg-transparent"} w-2.5 h-2.5 rounded-full `}></div>
          </div>
          <div className='text-xl'>${oneTime} <sub className='text-xs font-light'> One Time</sub></div>
        </div>
        <div className='flex gap-2 items-center cursor-pointer'  onClick={e=>{
            setRadioActive(false)
            dispatch(setPlan("monthly"));
            dispatch(setTotal(monthly));
            }}>
          <div className='w-4 h-4 bg-white rounded-full flex justify-center items-center'>
            <div className={`${!radioActive?"bg-blue-600":"bg-transparent"} w-2.5 h-2.5 rounded-full `}></div>
          </div>
          <div className='text-xl'>${monthly} <sub className='text-xs font-light'> monthly</sub></div>
        </div>
        </div>
             <div className='max-lg:w-[900px] overflow-x-auto'>
 {active?<TwoStepChallange/>:<InstantFunding/>}
             </div>
 <div className='w-full flex justify-center'>
 <button className={`bg-white text-black px-44 py-2 rounded-lg hover:bg-[#3305FF] hover:text-white duration-200`} onClick={e=>{
   e.preventDefault();
   console.log(count)
  }}>Get Started</button>
  </div>
        </div>

 </div>
</>
  )
}

export default Pricing
