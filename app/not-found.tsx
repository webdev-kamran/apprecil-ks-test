"use client"
import React from 'react'
import notfound from '@/app/assets/images/backgrounds/NotFound/notfound.svg'
import goback from '@/app/assets/images/backgrounds/NotFound/goback.svg'
import errorText from '@/app/assets/images/backgrounds/NotFound/errorText.svg'
import brandLogo from '@/app/assets/images/logo/brand_logo.svg'
import { useColorModeValue } from '@chakra-ui/react'
import Image from 'next/image'
const NotFound = () => {
  const isDark = useColorModeValue(false, true)

  return (
    <div className="mt-52 mb-64 flex justify-center items-center gap-28 px-10">
      <div className="flex flex-col items-start">
        <div>
          <Image  width={100} height={100}
            src={brandLogo}
            alt="logo"
            className="w-28 md:w-[120px] h-auto pointer-events-none"
            onContextMenu={(e) => {
              e.preventDefault(); // prevent the default behaviour when right clicked
              console.log("Right Click");
            }} draggable={false}
          />
          <h1
            className={`text-[150px] lg:text-[240px] ${
              isDark ? 'text-[#fff]/50' : 'text-[#011D41]/50'
            } leading-[130%]`}
          >
            404
          </h1>
          <p className="text-xl xl:text-2xl">The requested URL is an uncharted zone.</p>
          <div
            className="flex gap-2 mt-2 items-center cursor-pointer"
            onClick={() => window.history.back()}
          >
            <span className="text-[#BB6A37] text-lg font-medium">Go Back</span>
            <Image width={100} height={100} src={goback} alt="logo" className="w-4" draggable={false} />
          </div>
        </div>
      </div>
      <div className="relative pointer-events-none hidden sm:block">
        <Image width={100} height={100} src={notfound} alt="logo" className="max-w-[200px] lg:max-w-[350px] w-full h-auto" />
        <Image width={100} height={100}
          src={errorText} draggable={false}
          alt="logo" 
          className="max-w-[200px] lg:max-w-[350px] absolute right-6 bottom-11 w-full h-auto"
        />
      </div>
    </div>
  )
}

export default NotFound
