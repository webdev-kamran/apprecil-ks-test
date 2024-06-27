"use client"
import React from 'react'
// import learnMore from '../../assets/images/icons/learnmore_button.png'
import Lottie from 'lottie-react';
import { TbArrowRight } from 'react-icons/tb'

const Card = ({ card } :any) => {
  return (
    <>
      {/* <div className='card w-96 h-[600px] lg:h-[775px] lg:w-[650px] text-center sm:text-left'></div> */}

      {/* <div className='text-center flex-1 sm:text-left ring-1 ring-black/5 p-3 xl:p-8'> */}

      <div className='flex flex-col items-center sm:items-start gap-5 shadow-1 bg-white rounded-3xl p-8 '>
        <Lottie
          animationData={card.src}
          loop
          autoplay
          rendererSettings={
            {
              preserveAspectRatio: "xMidYMid slice"
            }
          }
          className='max-w-full w-72 h-72 mx-auto'
        />
        <div className='space-y-3 md:min-h-[14rem] 2xl:min-h-[16rem] xl:min-h-[20rem] sm:min-h-[10rem] xs:min-h-[12rem] min-h-[14rem] flex-1 pb-5'>
          <h1 className="text-2xl lg:text-4xl xl:font-5xl xl:leading-snug font-medium capitalize ">
            {card.title}
          </h1>
          <p className="xl:text-lg text-black leading-[150%] font-normal max-w-[560px] ">
            {card.description}
          </p>
          {/* <div className='flex justify-start pt-5'>
          <button type='button' className='block bg-green-500 hover:bg-green-600 ease-in-out duration-300 px-3.5 py-2.5 text-center text-sm font-semibold text-white rounded-xl shadow'>Learn More</button>
        </div> */}
        </div>
        {/* <img src={learnMore} alt="Learn More" className='w-32 cursor-pointer sm:ml-16' /> */}
        <button type='button'  onClick={card.model}  className='text-[#39AE56] font-bold gap-3 inline-flex hover:underline'><span>Learn More</span> <TbArrowRight size="20" />
        </button>
      </div>

    </>
  )
}

export default Card