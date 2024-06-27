"use client"
import dashboard from '@/app/assets/images/icons/Home/dashboard.png'
import learnmore_button from '@/app/assets/images/icons/Home/OurProducts/learnmore_button.png'
import manage_dashboard from '@/app/assets/images/icons/Home/OurProducts/manage_dashboard.png'
import manage_dashboard_dark from '@/app/assets/images/icons/Home/OurProducts/manage_dashboard_dark.png'
import dashboard_screen from '@/app/assets/images/backgrounds/Home/OurProducts/dashboard_screen-4.svg'
import dashboard_screen_mobile from '@/app/assets/images/backgrounds/Home/OurProducts/dashboard_screen_mobile_new_v5.svg'
import { useColorModeValue } from '@chakra-ui/react'
import Link from 'next/link'
import Image from 'next/image'
export default function Dashboard() {
  const isDark = useColorModeValue(false, true)

  return (
    <div
      className={`flex flex-col-reverse 3xl:max-w-[1920px] 3xl:mx-auto md:flex-row py-16 pb-64 md:pb-80 lg:pb-48 md:items-start relative overflow-hidden xl:pt-40 2xl:pb-[350px] 2xl:pt-32 z-10   
      ${isDark ? 'bg-[#272727]' : 'bg-[#FBFBFB]'}`} id="dashboard">
      <div className="md:justify-between gap-20 w-10/12 md:w-11/12 lg:w-[85%] 2xl:w-3/4 mx-auto">
        <div className="flex flex-col md:w-1/2">
          <h1 className="text-2xl lg:text-4xl xl:text-[42px] font-bold mb-2 xl:mb-4">
            Our Products
          </h1>
          <hr className="bg-[#BB6A37] pb-[3px] lg:pb-1 xl:pb-[5px] w-24 lg:w-28 xl:w-44 lg:mx-0 border-0 rounded-full mb-4 xl:mb-6" />
          <div className="mt-[450px] md:mt-5 xl:mt-16 flex flex-col gap-6  ">
            <div className="flex items-start gap-3">
            <Image width={100} height={100}
                src={dashboard}
                alt="dashboard"
                className="w-7 md:w-8 xl:w-9 mt-0.5 pointer-events-none"
                onContextMenu={(e) => {
                  e.preventDefault(); // prevent the default behaviour when right clicked
                  console.log("Right Click");
                }} draggable={false}
              />
              <h1 className="text-2xl lg:text-4xl xl:text-[42px] font-bold">
                Dashboard
              </h1>
            </div>
            <p
              className={`
              xl:text-lg 2xl:text-[18px] text-tertiary max-w-xl 2xl:max-w-md ${isDark ? 'text-white/70' : 'text-black/80'
                }`}
            >
              Unlock the full potential of Apprecial&apos;s mobile-based services
              with our intuitive and feature-rich dashboard. It allows you to
              stay in control by providing remote access so you can easily
              manage your subscriptions, track account activity, or connect with
              our support team, all from one convenient location.
            </p>
            <div className="flex justify-start">

              <Link href='https://apprecial.com/dashboard' target='_blank' className="rounded-xl bg-[#BB6A37] shadow border-2 border-[#BB6A37] text-white leading-snug flex gap-2 py-3 px-4 items-center justify-center hover:text-white ease-in-out duration-300 hover:bg-[#c2794b] text-lg">Learn More</Link>



            </div>
            <a
              href="https://dash.apprecial.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image width={100} height={100}
                src={isDark ? manage_dashboard_dark : manage_dashboard}
                alt="manage_dashboard"
                className="w-40 xl:w-44 cursor-pointer z-50 "
                onContextMenu={(e) => {
                  e.preventDefault(); // prevent the default behaviour when right clicked
                  console.log("Right Click");
                }} draggable={false}
              />
            </a>
          </div>
        </div>
      </div>
      <Image width={100} height={100}
        src={dashboard_screen}
        alt="dashboard_screen"
        className="h-auto w-auto lg:w-1/2 hidden lg:block 3xl:relative absolute right-0 top-10 2xl:top-0 2xl:-mt-3 pointer-events-none"
        onContextMenu={(e) => {
          e.preventDefault(); // prevent the default behaviour when right clicked
          console.log("Right Click");
        }} draggable={false}
      />
   <Image width={100} height={100}
        src={dashboard_screen_mobile}
        alt="dashboard_screen_mobile"
        className="h-auto w-auto lg:hidden mx-auto absolute right-0 top-40 sm:top-32 md:top-0 pointer-events-none z-30"
        onContextMenu={(e) => {
          e.preventDefault(); // prevent the default behaviour when right clicked
          console.log("Right Click");
        }} draggable={false}
      />
    </div>
  )
}
