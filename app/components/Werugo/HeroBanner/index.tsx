"use client"
import bg from '@/app/assets/werugo/images/backgrounds/hero_banner2.png'
import play_store_button from '@/app/assets/werugo/images/icons/googleplay_button.svg'
import apple_store_button from '@/app/assets/werugo/images/icons/appstore_button.png'
import manage_dashboard from '@/app/assets/werugo/images/icons/managedashboard_button.svg'
import map_1 from '@/app/assets/werugo/images/backgrounds/hero-bg.png'
import map_2 from '@/app/assets/werugo/images/backgrounds/map_2.svg'
import Image from 'next/image'
import Link from 'next/link'
export default function HeroBanner() {
  return (
    <div className="flex flex-col items-center gap-10 relative" id="home">
      <div className='w-full -z-10 absolute inset-0 flex justify-center items-center'>
        <Image width={100} height={100}
          src={map_1}
          alt="map_1" className='w-auto lg:max-w-[350px] h-full object-cover  min-w-full' onContextMenu={(e) => {
            e.preventDefault(); // prevent the default behaviour when right clicked
            console.log("Right Click");
          }}
        
        />
        {/* <img
          src={map_2}
          alt="map_2"
          className="object-cover 3xl:w-1/2 absolute right-0"
        /> */}
        {/* <div className='h-80 w-full top-0 absolute z-10 bg-linear1'></div> */}
      </div>
      {/* <div className='h-80 w-full -bottom-40 absolute z-10 bg-linear2'></div> */}

      <div className="flex flex-col items-center text-center gap-2 z-40 relative pt-32">
        <h1 className="text-3xl lg:text-4xl xl:text-[50px] font-bold leading-10 lg:leading-[50px] 2xl:leading-[150%]">
          Find Your Devices. <br />
          Anytime, Anywhere
        </h1>
        <p className="text-black/70 md:text-lg max-w-sm sm:max-w-[567px] text-center 2xl:leading-[150%] font-[400]">
          The most advanced, versatile device tracker application for Android and iOS devices.
        </p>
      </div>
      <div className='"mx-auot px-10'>
      <Image width={1000} height={1000}
        src={bg}
        alt="bg" className='max-w-[350px] w-auto h-auto object-cover sm:max-w-[600px]' onContextMenu={(e) => {
          e.preventDefault(); // prevent the default behaviour when right clicked
          console.log("Right Click");
        }} draggable={false}
      />
        </div> 
      <div className="flex flex-col sm:flex-row items-center gap-4 mt-1 z-40 px-5 pb-10">
      <Image width={100} height={100}
          src={play_store_button}
          alt="play_store_button"
          className="w-40 xl:w-44 h-auto cursor-pointer" onContextMenu={(e) => {
            e.preventDefault(); // prevent the default behaviour when right clicked
            console.log("Right Click");
          }} draggable={false}
        />
        <Image width={100} height={100}
          src={apple_store_button}
          alt="apple_store_button"
          className="w-40 xl:w-44 h-auto cursor-pointer" onContextMenu={(e) => {
            e.preventDefault(); // prevent the default behaviour when right clicked
            console.log("Right Click");
          }} draggable={false}
        />
        <Link
          href="https://dash.apprecial.com"
          target="_blank"
          rel="noopener noreferrer"
        >
         <Image width={100} height={100}
            src={manage_dashboard}
            alt="manage_dashboard"
            className="w-40 xl:w-44 h-auto cursor-pointer" onContextMenu={(e) => {
              e.preventDefault(); // prevent the default behaviour when right clicked
              console.log("Right Click");
            }} draggable={false}
          />
        </Link>
      </div>
    </div>
  )
}
