"use client"
import React from 'react'
import Image from 'next/image'
import AboutCurve from '@/app/assets/audioshield/about-autoshield-curve.png'
import PhoneThumb from '@/app/assets/audioshield/Google-Pixel-7-Pro-Mockup.png'
function fixed() {
    return (
        <section id="about" className="pt-28 md:pt-40 overflow-hidden relative min-h-screen flex flex-col justify-center before:z-20 before:absolute before:inset-x-0 before:bottom-0 before:h-60 before:flex before:items-end before:bg-asgradient-2 before:bg-cover">
            <h2 className="sr-only">about</h2>

            <div className='absolute inset-x-0 md:inset-y-0 h-full top-40 md:h-auto flex items-end overflow-hidden bg-asgradient-1 md:bg-none'>
                <Image src={AboutCurve} width={1920} height={600} alt='About curve' className='h-auto w-full relative hidden md:block top-1/5 xl:top-1/4' />
            </div>
            <div className='relative z-20 -mt-20 w-full'>
                <div className='px-5 xl:w-[85%] 2xl:w-3/4 max-w-[1920px] mx-auto'>
                    <div className='flex flex-col md:grid md:grid-cols-12 py-10 xl:py-3 items-center'>
                        <div className="flex flex-col gap-4 text-center md:text-left col-span-6">
                            <Image src={PhoneThumb} alt='' width={500} height={500} className='w-full' onContextMenu={(e) => {
                                e.preventDefault(); // prevent the default behaviour when right clicked
                                console.log("Right Click");
                            }} draggable={false} />
                        </div>
                        <div className='col-span-6 flex justify-end'>
                            <div className='max-w-xl space-y-5'>
                                <h3 className='text-4xl font-bold text-center md:text-left'>About AudioShield</h3>
                                <p className='text-center md:text-left text-lg'>
                                    AudioShield offers a powerful solution for managing your device&apos;s audio settings to prevent sudden loud noises, ensuring a seamless and comfortable listening experience. This app is free to download and comes equipped with essential features like automatic volume adjustment.
                                </p>
                                <p className='text-center md:text-left text-lg'>For those seeking enhanced control, upgrading to the <b>Pro</b> version unlocks additional functionalities. Customize your volume levels, exclude specific apps, and more to tailor your audio experience exactly how you need it.
                                </p></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default fixed