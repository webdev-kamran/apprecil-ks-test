"use client"
import React from 'react'
import download_phone from '@/app/assets/werugo/images/backgrounds/download_phone.png'
import play_store_button from '@/app/assets/werugo/images/icons/googleplay_button.svg'
import apple_store_button from '@/app/assets/werugo/images/icons/appstore_button.png'
import manage_dashboard from '@/app/assets/werugo/images/icons/managedashboard_button.svg'
import Image from 'next/image'
const Download = () => {
  return (
    <div className="flex lg:h-auto w-10/12 md:w-11/12 lg:w-[85%] 2xl:w-3/4 mx-auto items-end justify-between mt-10 relative md:min-h-[500px]" id='download'>
      {/* md:absolute md:bottom-0 max-w-[300px] mx-auto md:left-1/2 lg:left-0 md:-translate-x-1/2 lg:translate-x-0 */}
      <div className="flex-col-reverse md:flex-row flex gap-14 items-center w-full">
      <div className='flex items-end justify-center md:justify-start'>
        <Image width={1000} height={1000}
          src={download_phone}
          alt="About Phone"
          className='max-w-[300px] w-auto h-auto'
          onContextMenu={(e) => {
            e.preventDefault(); // prevent the default behaviour when right clicked
            console.log("Right Click");
          }} draggable={false}

        />
      </div>
      <div className="flex flex-col items-center justify-center gap-10 lg:gap-14 flex-1   ">
        <div className="lex-1 gap-10 lg:gap-14 flex flex-col">
          <h1 className="text-2xl lg:text-4xl xl:text-[42px] font-bold leading-[150%] text-center">
            Download Werugo Now!
          </h1>
          <div className="flex flex-col lg:flex-row items-center gap-4 mt-1">
            <Image width={100} height={100}
              src={play_store_button}
              alt="play_store_button"
              className="w-40 xl:w-44 cursor-pointer h-auto" draggable={false} onContextMenu={(e) => {
                e.preventDefault(); // prevent the default behaviour when right clicked
                console.log("Right Click");
              }}
            />
            <Image width={100} height={100}
              src={apple_store_button}
              alt="apple_store_button"
              className="w-40 xl:w-44 cursor-pointer h-auto" draggable={false} onContextMenu={(e) => {
                e.preventDefault(); // prevent the default behaviour when right clicked
                console.log("Right Click");
              }}
            />
            <a
              href="https://dash.apprecial.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image width={100} height={100}
                src={manage_dashboard}
                alt="manage_dashboard"
                className="w-40 xl:w-44 cursor-pointer h-auto" draggable={false} onContextMenu={(e) => {
                  e.preventDefault(); // prevent the default behaviour when right clicked
                  console.log("Right Click");
                }}
              />
            </a>
          </div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Download