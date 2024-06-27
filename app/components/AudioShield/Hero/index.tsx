"use client"
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import PlayBtn from '@/app/assets/audioshield/play-store.svg'
import HeroGraphic from '@/app/assets/audioshield/hero-graphic.svg'
import audioshield from '@/app/assets/audioshield/audioshield-2.json'
import Lottie from 'lottie-react';
function Hero() {
    return (
        <section id="home" className="pt-16 md:pt-24 relative min-h-screen flex flex-col justify-center ">
            <h2 className="sr-only">Hero</h2>
            <div className='py-4 px-5 xl:w-[85%] 2xl:w-3/4 max-w-[1920px] mx-auto'>
                <div className='flex flex-col-reverse lg:grid lg:grid-cols-12 md:py-10 xl:py-3 items-center'>
                    <div className="flex flex-col gap-4 text-center md:text-left col-span-6">
                        <h3 className="text-3xl lg:text-4xl 2xl:text-6xl leading-snug lg:leading-snug xl:leading-snug font-bold text-center lg:text-left ">
                            Silence the Surprise, <br />Control Your Sound!
                        </h3>
                        <p
                            className={`text-black/60 xl:text-lg 2xl:text-xl lg:w-[90%] xl:w-[80%] text-center lg:text-left`}
                        >
                            Prevent sudden loudness and customize your listening experience effortlessly.
                        </p>
                        <div className='flex justify-center lg:justify-start pt-5'>
                            <Link href={''} >
                                <Image src={PlayBtn} alt='' width={200} height={50} onContextMenu={(e:any) => {
            e.preventDefault(); // prevent the default behaviour when right clicked
            console.log("Right Click");
          }} draggable={false} />
                            </Link>
                        </div>
                    </div>
                    <div className='flex justify-center items-center col-span-6' onContextMenu={(e) => {
            e.preventDefault(); // prevent the default behaviour when right clicked
            console.log("Right Click");
          }}>
                     

<Lottie
          animationData={audioshield}
          loop
          autoplay
          rendererSettings={
            {
              preserveAspectRatio: "xMidYMid slice"
            }
          }
          className='w-full h-auto sm:w-[75%] md:w-[50%] xl:w-[90%] mx-auto md:-mr-8 xl:-mr-16 pointer-events-none'
          onContextMenu={(e) => {
            e.preventDefault(); // prevent the default behaviour when right clicked
            console.log("Right Click");
          }} draggable={false}
        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero