import React from 'react'
import 'animate.css'
import Shader from '../shader/shader'
import Image from 'next/image'
import Pricing from '../pricing/pricing'
function Partner() {
  return (
    <section className='w-screen relative bg-[#080808]  px-24 py-24 flex flex-col gap-12 before:absolute before:w-full before:h-full before:bg-[#151414] before:opacity-80 before:left-0 before:top-0'>
      {/* -------------------------------------------------| Why Funded Partners |-------------------------------------------------- */}
      <span className='absolute -top-80 -left-20 opacity-45 '><Shader  className='bg-[#8248A3]' /></span>
      <span className='absolute -top-0 left-1/5 opacity-45 '><Shader  className='bg-[#8248A3]' /></span>
      <span className='absolute bottom-0 left-1/3 -z-10 '><Shader  className='bg-[#8248A3]' /></span>
        <div className='w-full h-full flex flex-col gap-12 text-white z-40 relative before:absolute before:w-96 before:h-96 before:bg-[#3305FF] before:bg-opacity-10 before:rounded-full  before:blur-3xl before:-left-20 before:-top-52 after:absolute after:w-96 after:h-96 after:bg-[#9CF05C]  after:bg-opacity-10 after:rounded-full  after:blur-3xl after:-top-72 after:-right-52' >
        <div className='flex flex-col gap-4 w-full justify-center items-center text-center'>
            <h1 className='text-4xl font-bold'>Why Funded Partners ?</h1>
            <p className='mx-44 text-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus non pellentesque lectus. Mauris sollicitudin nisl sed ipsum euismod, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus non pellentesque lectus. Mauris sollicitudin nisl sed ipsum euismod, </p>
        </div>
      <div className='w-full h-full flex gap-4 z-10'>
        <div className='w-full h-full flex flex-col gap-4'>
            <div className='w-full h-full bg-gradient-to-b from-[#E9E9E9] to-[#629EB8] rounded-xl flex flex-col p-6 text-black justify-between gap-4'>
              <Image  src="./Coins.svg" alt='coin icon' width={108} height={110} />
              <h5 className='text-3xl '>Scaling Plan</h5>
              <p className='text-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus non <b> pellentesque lectus</b>. Mauris sollicitudin nisl sed ipsum euismod,<b>Lorem ipsum</b> dolor sit amet, consectetur adipiscing elit. Vivamus</p>
            </div>
            <div className='w-full h-full bg-white rounded-xl bg-gradient-to-b from-[#9CF05C] to-[#3B6D4E] flex flex-col p-6 text-black justify-between gap-4'>
              <Image  src="./Money Bag.svg" alt='Money Bag icon' width={124} height={124} />
              <h5 className='text-3xl '>Payout System</h5>
              <p className='text-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus non <b> pellentesque lectus</b>. Mauris sollicitudin nisl sed ipsum euismod,<b>Lorem ipsum</b> dolor sit amet, consectetur adipiscing elit. Vivamus</p>
            </div>
        </div>
            <div className='w-full bg-white rounded-xl bg-gradient-to-b from-[#2A2B28] to-[#1D1828] flex flex-col p-6 gap-6 justify-between text-white'>
                <h5 className='text-3xl'>Instant Funding</h5>
                <p className='text-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus non <b> pellentesque lectus</b>. Mauris sollicitudin nisl sed ipsum euismod,<b>Lorem ipsum</b> dolor sit amet, consectetur adipiscing elit. Vivamus
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus non <b> pellentesque lectus</b>. Mauris sollicitudin nisl sed ipsum euismod,<b>Lorem ipsum</b> dolor sit amet, consectetur adipiscing elit. Vivamus</p>
              <Image  src="./wollet.svg" alt='wollet icon' width={460} height={360} />
            </div>
            <div className='w-full bg-white rounded-xl bg-gradient-to-b from-[#535BF5] to-[#8248A3] flex flex-col p-6 gap-6 text-white justify-between'>
              <div className='w-full flex justify-center'>
              <Image  src="./5143422 1.svg" alt='graph icon' width={283} height={283} />
              </div>
                <h5 className='text-3xl'>Lowest Profit Target</h5>
                <p className='text-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus non <b> pellentesque lectus</b>. Mauris sollicitudin nisl sed ipsum euismod,<b>Lorem ipsum</b> dolor sit amet, consectetur adipiscing elit. Vivamus
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus non <b> pellentesque lectus</b>. Mauris sollicitudin nisl sed ipsum euismod,<b>Lorem ipsum</b> dolor sit amet, consectetur adipiscing elit. Vivamus</p>
            </div>
      </div>
      </div>
      {/* -------------------------------------------------| Our Evaluations |-------------------------------------------------- */}
<Pricing/>
      {/* -------------------------------------------------| Guaranteed Reward |-------------------------------------------------- */}
      <div className='w-full py-10 px-10 bg-[#FFFFFF1F] text-white rounded-xl flex justify-between items-center relative before:absolute before:w-96 before:h-96 before:bg-[#3305FF] before:bg-opacity-10 before:rounded-full before:blur-3xl before:-left-20 before:-top-60 after:absolute after:w-96 after:h-96 after:bg-[#9CF05C]  after:bg-opacity-10 after:rounded-full  after:blur-3xl after:bottom-0 after:-right-20' style={{"backdropFilter":"blur(10px)"}}>
        <div className='flex flex-col gap-3 w-1/2 h-full z-10 justify-center'>
            <div className='flex flex-col gap-3'>
        <h5 className='text-5xl text-[#0468F9] font-bold'>Guaranted Rewards</h5>
        <div className='text-lg tracking-wider'>No Miss Only Hits - Your Payout are Guaranteed</div>
            </div>
            <div className='text-light'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus non pellentesque lectus. Mauris sollicitudin nisl sed ipsum euismod, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus non pellentesque lectus. Mauris sollicitudin nisl sed ipsum euismod, Lorem ipsum dolor sit amet, consectetur adipiscing elit. </div>
            <div>
        <button className='px-6 py-2 bg-[#3305FF] rounded-lg my-6'>Get Started</button>
            </div>
        </div>
 
        <div className='w-1/3 flex  z-10 p-0 pl-20 pb-10 item-start'>
            <img src="./medal.gif" alt="" className='bounce-icon' />
        </div>
      </div>
      {/* -------------------------------------------------| Join Our Discord Community |-------------------------------------------------- */}
      <div className='w-full py-12 px-10 bg-[#FFFFFF1F] text-white rounded-xl flex justify-between items-center relative ' style={{"backdropFilter":"blur(10px)"}}>
        <div className='w-1/3'>
            <Image src="./Discord.svg" alt="Discord svg" width={614} height={614} />
        </div>
        <div className='flex flex-col gap-6 w-1/2 h-full z-10'>
            <div className='flex flex-col gap-3'>
        <h5 className='text-5xl text-[#0468F9] font-bold'>Join Our Discord Community</h5>
            </div>
            <div className='text-light'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus non pellentesque lectus. Mauris sollicitudin nisl sed ipsum euismod, Lorem ipsum dolor sit amet, con </div>
            <div>
        <button className='px-6 py-2 bg-[#3305FF] rounded-lg my-4'>Join Now</button>
            </div>
        </div>
      </div>
    </section>
  )}
export default Partner
