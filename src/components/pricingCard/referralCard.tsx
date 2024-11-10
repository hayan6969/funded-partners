import Image from 'next/image'
import React from 'react'
interface className {
referral:string;
price:number;
detail:string
}
const ReferralCard: React.FC<className> = ({
referral="000",
price=0,
detail="2 step account"

 })=>{
  return (
    <div className='flex flex-col items-center py-4 gap-4 border border-white rounded-xl text-white w-52 bg-[#C8CDFF] bg-opacity-10 text-center'style={{"backdropFilter":"blur(10px)"}}>
      <Image src='./material-symbols_rewarded-ads-outline.svg' alt='' width={50} height={0} />
      <div className='w-full py-1 bg-[#3B7FE4]'>{referral} Referrals</div>
      <span className='text-lg'>${price}K</span>
      <p>{detail}</p>
    </div>
  )
}

export default ReferralCard
