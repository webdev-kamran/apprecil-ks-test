"use client"
import React from 'react'
// import learnMore from '.@/app/assets/werugo/images/icons/learnmore_button.png'
import { TbSparkles } from 'react-icons/tb'
import cardbg from '@/app/assets/werugo/images/plans/graphic-plans.svg'
import cardbgs from '@/app/assets/werugo/images/plans/graphic-plans-selected.svg'
import Image from 'next/image'
const Card = ({ card }:any) => {
  return (
    <>
     <div className={`flex flex-col relative border-2  bg-white rounded-3xl ${card.select ? 'border-[#39AE56] shadow-3' : 'border-white shadow-1' }`} >
        <div className={`flex justify-center items-center bg-no-repeat bg-top bg-cover p-5 rounded-t-3xl border-b border-gray-100 min-h-[200px] 2xl:min-h-[250px]  ${card.select ? '': 'bg-gray-100'}`} style={{ backgroundImage:card.select ? `url(${cardbgs})` : `url(${cardbg})`  }}>
          <div className='flex gap-4 items-start relative top-3'>
            <Image src={card.icon} alt="plans icons" height={74} width={74} onContextMenu={(e) => {
          e.preventDefault(); // prevent the default behaviour when right clicked
          console.log("Right Click");
        }} draggable={false} />
            <div className='flex flex-col gap-2'>
              <h3 className="text-lg font-semibold uppercase leading-none text-[#011D41]">
                {card.title}
              </h3>
              <div className='flex flex-col gap-1'>
                <p className='text-4xl xl:text-5xl font-bold text-[#39AE56] leading-none xl:leading-none'>{card.price}</p>
                <p className='text-sm font-medium text-[#011D41]/50 -ml-2'>/{card.term}</p>
              </div>
            </div>
          </div>
        </div>
        <div className='flex justify-center items-center min-h-[200px] 2xl:min-h-[250px]'>
          <ul className='space-y-3'>
            {card.features.map((item:any, index:any) =>
              <li key={index} className='flex items-start gap-2 text-lg text-[#011D41]/50 font-medium' ><span className='relative top-1.5'>{item.availability}</span><span>{item.feature}</span></li>
            )}
          </ul>
        </div>

        {/* spcial offer */}
        {card.popularPlan &&
          <div className='absolute -top-5 bg-[#39AE56] rounded-full inline-flex py-2 px-3 gap-2 text-white text-sm left-1/2 -translate-x-1/2'><TbSparkles size="20" />{card.badge}</div>

        }

      </div>

    </>
  )
}

export default Card