"use client"
import werugo_screen from '@/app/assets/images/backgrounds/Home/OurProducts/werugo_screen.svg'
import werugo_screen_mobile from '@/app/assets/images/backgrounds/Home/OurProducts/werugo_screen_mobile_new.png'
import werugo_icon from '@/app/assets/images/icons/Home/OurProducts/werugo_icon.png'
import learnmore_button from '@/app/assets/images/icons/Home/OurProducts/learnmore_button.png'
import { useColorModeValue } from '@chakra-ui/react'
import Image from 'next/image'
import Link from 'next/link'
export default function Werugo() {
  const isDark = useColorModeValue(false, true)

  return (

    <>
      <div
        className={`flex text-white items-start pb-5 pt-16 2xl:pt-24 ${isDark ? 'bg-[#000]' : 'black_linear_gradient'
          }`}
        id="werugo"
      >
        <div className="flex flex-col items-center lg:flex-row lg:items-start gap-10 lg:gap-20 w-10/12 lg:w-[85%] 2xl:w-3/4 mx-auto 3xl:max-w-[1920px] z-20" onContextMenu={(e) => {
          e.preventDefault(); // prevent the default behaviour when right clicked
          console.log("Right Click");
        }}>
          <Image width={100} height={100}
            src={werugo_screen}
            alt="werugo_screen"
            className="hidden sm:block h-auto sm:w-[550px] lg:w-1/2 xl:w-[42%] -mt-80 2xl:-mt-[450px] lg:-ml-32 pointer-events-none"
            onContextMenu={(e) => {
              e.preventDefault(); // prevent the default behaviour when right clicked
              console.log("Right Click");
            }} draggable={false}
          />
          <Image width={100} height={100}
            src={werugo_screen_mobile}
            alt="werugo_screen_mobile"
            className="block sm:hidden h-auto w-full -mt-56 pointer-events-none"
            onContextMenu={(e) => {
              e.preventDefault(); // prevent the default behaviour when right clicked
              console.log("Right Click");
            }} draggable={false}
          />
          <div className="w-full 2xl:ml-10">
            <div className="flex flex-col">
              <div className="flex items-end gap-3">
                <Image width={100} height={100}
                  src={werugo_icon}
                  alt="werugo_icon"
                  className="w-8 xl:w-14 pointer-events-none"
                  onContextMenu={(e) => {
                    e.preventDefault(); // prevent the default behaviour when right clicked
                    console.log("Right Click");
                  }} draggable={false}
                />
                <h1 className="text-2xl lg:text-4xl xl:text-[42px] font-bold xl:mb-2">
                  Werugo
                </h1>
              </div>
              <div className="mt-6 2xl:mt-8 flex flex-col gap-6">
                <p
                  className={`xl:text-lg 2xl:text-[18px] max-w-xl 2xl:max-w-md ${isDark ? 'text-white/70' : 'text-white/80'
                    }`}
                >
                  A ground-breaking device tracker application for iOS and Android
                  devices, Werugo offers advanced features such as voice-activated
                  device location, real-time tracking, and remote control
                  capabilities, making it reliable for ensuring security. It&apos;s
                  like having a personal assistant for your devices, minus the
                  coffee runs.
                </p>
                <div className="flex justify-start">

                  <Link href='https://apprecial.com/werugo' target='_blank' className="rounded-xl bg-[#BB6A37] shadow border-2 border-[#BB6A37] text-white leading-snug flex gap-2 py-3 px-4 items-center justify-center hover:text-white ease-in-out duration-300 hover:bg-[#c2794b] text-lg">Learn More</Link>

                </div>
                <div className="flex flex-wrap gap-4">

                <Image src={'/google-play.svg'} alt="" width={179} height={52} onContextMenu={(e) => {
                  e.preventDefault();  
                  console.log("Right Click");
                }} draggable="false" />
                <Image src={'/app-store.svg'} alt="" width={179} height={52} onContextMenu={(e) => {
                  e.preventDefault();  
                  console.log("Right Click");
                }} draggable="false" />


                  <Link
                    href="https://dash.apprecial.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >

                    
                <Image src={'/manage-dashboard-transparent.svg'} alt="" width={179} height={52} onContextMenu={(e) => {
                  e.preventDefault();  
                  console.log("Right Click");
                }} draggable="false" />
 
 

                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
