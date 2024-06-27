"use client"
import React from 'react'
import { useState, useEffect } from 'react';
import CountdownTimer from './CountdownTimer';
import Form from './Form';
import Footer from '../Footer'
import Lottie from 'lottie-react';
import logo from '@/app/assets/werugo/lotties/logo_animation.json'
import bg from '@/app/assets/werugo/images/coming-soon-1.png'
import Image from 'next/image';
const Comingsoon = () => {
  // Set your target date here, e.g., 24 hours from now
  const targetDate = new Date(Date.now() + 26 * 24 * 60 * 60 * 1000);

  return (
    <>
      <section className='flex flex-col min-h-screen justify-center items-center w-full overflow-hidden'>
        <div className='flex-1 flex flex-col justify-center items-center p-5 '>
          <div className="flex items-center justify-center gap-2 cursor-default">
            <Lottie
              animationData={logo}
              loop
              autoplay
              rendererSettings={
                {
                  preserveAspectRatio: "xMidYMid slice"
                }
              }
              className='w-9 h-9'
            />
            <h1 className='font-bold text-[30px] leading-[150%]'>Werugo</h1>
          </div>
          <div className="flex flex-col items-center text-center gap-2 z-40 relative pt-5">
            <h1 className="font-semibold tracking-widest uppercase text-grey">
              Coming soon
            </h1>
            <p className="text-black text-center text-lg max-w-lg mx-auto">
              The most advanced, versatile device tracker application for Android and iOS devices.
            </p>
          </div>
          <CountdownTimer targetDate={targetDate} />
          <Form   />
          {/* <div className='pt-5 space-y-1 w-full max-w-xl'>
            <label className='text-left text-black font-medium'>
            Get notified when launched
            </label>
            <div className='flex gap-2'>
              <input type='email' className='bg-black/5 outline-none focus:ring-1 focus:ring-[#39AE56] rounded-xl py-3 px-5 placeholder-black/50 flex-1' placeholder='Email address' />
            <button className="rounded-xl font-semibold text-white leading-snug flex gap-2 py-3 px-6 items-center justify-center  ease-in-out duration-300  bg-[#39AE56] text-lg shrink-0">Subscribe</button>
            </div>
          </div> */}
        </div>
        <div className='relative w-full before:absolute before:h-full before:inset-x-0 before:bottom-0 before:bg-wgradient-1 before:-skew-y-3 before:top-1/2'>
        <div className='"mx-auto px-5 -mb-10 relative z-10 flex justify-center'>
          <Image
            src={bg} width={1000} height={1000}
            alt="bg" className='object-cover w-auto h-auto' onContextMenu={(e) => {
              e.preventDefault(); // prevent the default behaviour when right clicked
              console.log("Right Click");
            }} draggable={false}
          />
        </div>
</div>
        <div className='w-full relative z-10'>
          <Footer />
          </div>
      </section>
    </>
  );
};

export default Comingsoon