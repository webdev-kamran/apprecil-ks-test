"use client"
import React from 'react'
import AudioShieldIcon from '@/app/assets/images/icons/Home/AudioShield.svg'
// import AudioShieldGraphic from '@/app/assets/images/AudioShield-graphic.png'
import play_store_button from '@/app/assets/images/icons/Home/OurProducts/play_store_button_2.svg'
import { useColorModeValue } from '@chakra-ui/react'
import Image from 'next/image'
import Link from 'next/link'
function AudioShield() {
    const isDark = useColorModeValue(false, true)
    return (
        <>
            <div className={` ${
                isDark ? 'audioShield-dark' : 'audioShield'
            }`}>
                <div className="md:justify-between gap-20 w-10/12 md:w-11/12 lg:w-[85%] 2xl:w-3/4 mx-auto mx-auto flex flex-col items-center" >

                    <div className='md:grid md:grid-cols-2 flex flex-col-reverse gap-x-10 w-full items-center py-10'>
                        <div className='space-y-4 md:space-y-10'>

                            <div className="flex items-end gap-3">
                            <Image width={100} height={100}
                                    src={AudioShieldIcon}
                                    alt="werugo_icon"
                                    className="w-8 xl:w-10 h-auto pointer-events-none"
                                    onContextMenu={(e) => {
                                        e.preventDefault(); // prevent the default behaviour when right clicked
                                        console.log("Right Click");
                                    }} draggable={false}
                                />
                                <h1 className="text-2xl lg:text-4xl xl:text-[42px] font-bold">
                                    AudioShield
                                </h1>
                            </div>
                            <p
                                className={`xl:text-lg 2xl:text-[18px] max-w-xl 2xl:max-w-md ${isDark ? 'text-white/70' : 'text-black/80'
                                    }`}
                            >
                                AudioShield is a cutting-edge app that automatically adjusts your device&apos;s volume to prevent sudden loud noises, safeguarding your ears and sparing you from embarrassing public blares. With AudioShield pro, you can customize the volume settings for each app individually. Download today!
                            </p>
                            <div className="flex justify-start">

                                <Link href='https://apprecial.com/audioshield' target='_blank' className="rounded-xl bg-[#BB6A37] shadow border-2 border-[#BB6A37] text-white  leading-snug flex gap-2 py-3 px-4 items-center justify-center hover:text-white ease-in-out duration-300 hover:bg-[#c2794b] text-lg">Learn More</Link>

                            </div>
                            <div className="flex justify-start">
                            <Image width={100} height={100}
                                    src={play_store_button}
                                    alt="play_store_button"
                                    className="w-40 xl:w-44 cursor-pointer h-auto"
                                    onContextMenu={(e) => {
                                        e.preventDefault(); // prevent the default behaviour when right clicked
                                        console.log("Right Click");
                                    }} draggable={false}
                                />
                            </div>
                        </div>
                        <div className='flex justify-end'>
                        <Image width={500} height={500}
                                src={'/AudioShield-graphic.png'}
                                alt="manage_dashboard"
                                className="cursor-pointer w-auto h-auto"
                                onContextMenu={(e) => {
                                    e.preventDefault(); // prevent the default behaviour when right clicked
                                    console.log("Right Click");
                                }} draggable={false}
                            />
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default AudioShield