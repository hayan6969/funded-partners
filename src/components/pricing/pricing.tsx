'use client'
import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import Nav from '@/components/navbar/nav';
import { RootState } from '../redux/store/store';
import { useDispatch } from 'react-redux';
import { setType } from '../redux/slices/counterSlice';
import TwoStepChallange from '../EvaluationBalance layout/twoStepChallange';
import InstantFunding from '../EvaluationBalance layout/instantFunding';

function Pricing() {
    const [active,setActive]=useState(false)
    const count = useSelector((state:RootState) => state.counter);
    const dispatch =useDispatch();
  return (

    <div className='w-full h-full flex flex-col gap-12 text-white z-40 relative before:absolute before:w-96 before:h-96 before:bg-gradient-to-br before:from-[#8248A3] before:to-[#9CF05C] before:opacity-10 before:rounded-full before:blur-3xl before:-right20 before:-top-52 after:absolute after:w-96 after:h-96 after:bg-[#9CF05C]  after:bg-opacity-10 after:rounded-full  after:blur-3xl after:-top-72 after:-right-52 py-24'>
 <div className='flex flex-col gap-4 w-full justify-center items-center text-center'>
            <h1 className='text-4xl font-bold'>Our Evaluation</h1>
            <p className='mx-44 text-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus non pellentesque lectus. Mauris sollicitudin nisl sed ipsum euismod, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus non pellentesque lectus. Mauris sollicitudin nisl sed ipsum euismod, </p>
        </div>
        <div className='w-full flex justify-evenly items-center'>
        <button className={` ${!active?'bg-[#3305FF] text-white':'bg-white text-black before:border-black'} relative flex justify-center items-center px-6 py-2 before:p-0.5 rounded-lg my-4 before:rounded-sm before:bg-white before:-top-3 before:absolute before:content-["Trending"] before:text-black before:text-xs before:border before:shadow-md`} onClick={e=>{
          setActive(false);
          dispatch(setType("instantFunding"))
        }}>Instant Finding</button>
  <button className={`${active?'bg-[#3305FF] text-white':'bg-white text-black'} px-3 py-2 rounded-lg`} onClick={e=>{
    setActive(true)
    dispatch(setType("2stepChallange"))
    }}>2 Step Challange</button>
        </div>
        <div className='w-full p-10 border border-[#4B4B4B] rounded-xl flex flex-col justify-center gap-6'>
             <h5 className='text-lg text-center'>Select Balance:</h5>
             
 {active?<TwoStepChallange/>:<InstantFunding/>}
 <div className='w-full flex justify-center'>
 <button className={`bg-white text-black px-44 py-2 rounded-lg hover:bg-[#3305FF] hover:text-white duration-200`} onClick={e=>{
   e.preventDefault();
   console.log(count)
  }}>Get Started</button>
  </div>

        </div>
 </div>
  )
}

export default Pricing
