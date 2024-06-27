"use client"
import React, { useEffect } from 'react';
import HeroGraphic from '@/app/assets/dashboard/hero-graphic-2.svg'
import Image from 'next/image';
export default function Hero() {

    const handleClickScroll = () => {
        const element = document.getElementById('tabs');
        if (element) {
          // 👇 Will scroll smoothly to the top of the next section
          element.scrollIntoView({ behavior: 'smooth' });
        }
      };


      


    return (
        <>
            <div className="flex justify-center md:justify-between gap-5 items-center flex-wrap md:flex-nowrap  ">
                <div className="space-y-7 md:max-w-xl pt-20 md:pt-0">
                    <h1 className="text-3xl md:text-4xl xl:text-5xl text-zinc-800 xl:leading-snug font-bold text-center mx-auto md:ml-0 md:text-left capitalize max-w-[16rem] md:max-w-lg lg:pr-20">Take real control
                        of your devices</h1>
                    <p className="text-[#011D41]/70 font-medium text-lg text-center md:text-left">Dashboard is like the control center for your account, providing a streamlined view to monitor your account, effortlessly manage your subscriptions, and conveniently access our mobile services.</p>
                   <div className="flex justify-center md:justify-start">
                    <button className="px-4 py-2.5 bg-dbprimary hover:bg-dbprimary-1 rounded-xl shadow ustify-center items-center gap-2.5 inline-flex text-white ease-in-out duration-300"  onClick={handleClickScroll} >Read More</button>
                
                    </div>
                </div>
                <div className="flex justify-center md:justify-end w-full md:w-auto 2xl:-mr-40">
                    <Image
                        className="object-cover h-auto w-auto"
                        src={HeroGraphic}
                        onContextMenu={(e) => {
                            e.preventDefault(); // prevent the default behaviour when right clicked
                            console.log("Right Click");
                          }}
                        width={650}
                        height={650}
                        loading="eager"
                        alt=" "
                    /></div>


            </div>
        </>

    )
}