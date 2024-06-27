"use client"
import bg from '@/app/assets/images/backgrounds/Home/CompanyStructure/light.svg'
import bg_dark from '@/app/assets/images/backgrounds/Home/CompanyStructure/dark.svg'
import bg_dark_mobile from '@/app/assets/images/backgrounds/Home/CompanyStructure/company_structure_bg_dark_mobile.svg'
import bg_mobile from '@/app/assets/images/backgrounds/Home/CompanyStructure/company_structure_bg_mobile.svg'
import { useColorModeValue } from '@chakra-ui/react'
import Image from 'next/image'
export default function CompanyStructure() {
  const isDark = useColorModeValue(false, true)

  const scrollToWerugoSection = () => {
    const nextSection = document.querySelector('#werugo')
    nextSection?.scrollIntoView({
      behavior: 'smooth',
    })
  }

  const scrollToDashboardSection = () => {
    const nextSection = document.querySelector('#dashboard')
    nextSection?.scrollIntoView({
      behavior: 'smooth',
    })
  }

  return (
    <div className="h-[280vh] 3xl:max-h-[175vh] md:h-[140vh] lg:h-[150vh] xl:h-[165vh] 2xl:h-[180vh] relative" id="CompanyStructure">
      <div className="h-screen md:h-[100vh] linear__bg"></div>
      <div className="absolute w-full top-[800px] md:top-[350px] lg:top-[300px] 2xl:top-[270px]">
        <div className="text-primary md:w-11/12 lg:w-[80%] 2xl:w-3/4 mx-auto flex flex-col items-center">
          <h1 className="text-2xl lg:text-4xl xl:text-[42px] font-bold mb-2 xl:mb-5">
            Company Structure 
          </h1> 
          <hr className="bg-[#BB6A37] pb-[3px] lg:pb-1 xl:pb-[5px] w-24 lg:w-28 xl:w-36 mx-auto md:mx-0 border-0 rounded-full mb-4 xl:mb-6" />
        </div>

        {/* Tablet -> Desktop version */}
        <div className="hidden md:block">

        {/* ${
              isDark && '2xl:-mt-4'
            } */}
          <Image width={100} height={100}
            src={isDark ? bg_dark : bg}
            alt="Company Structure"
            className={`2xl:w-[65%] md:w-11/12 lg:w-10/12 mx-auto w-auto h-full max-w-[1920px] pointer-events-none `}
            onContextMenu={(e) => {
              e.preventDefault(); // prevent the default behaviour when right clicked
              console.log("Right Click");
            }}
          />
          <span
            className="absolute top-[70%] left-[78%] xl:top-[69%] 2xl:left-[71%] 2xl:text-lg cursor-pointer opacity-0 hover:opacity-40"  onClick={() => {
              window.open('https://www.playplix.com', '_blank')
            }}
          >
            <span className='invisible'>Open Website</span>
          </span>
          <span
            className="absolute top-[95%] left-[7%] lg:left-[12%] 2xl:left-[22%] xl:top-[94%]  2xl:text-base cursor-pointer opacity-0  "
            onClick={scrollToWerugoSection}
          >
            <span className='invisible'>Learn more below</span>
          </span>
          <span
            className="absolute top-[95%] left-[28%] lg:left-[32%] 2xl:left-[37.5%] xl:top-[94%] 2xl:text-base cursor-pointer opacity-0  "
            onClick={scrollToDashboardSection}
          >
            <span className='invisible'>Learn more below</span>
          </span>
        </div>

        {/* Mobile version */}
        <div className="relative md:hidden">
        <Image width={100} height={100}
            src={isDark ? bg_dark_mobile : bg_mobile}
            alt="Company Structure"
            className="2xl:w-3/4 lg:w-10/12 mx-auto w-auto h-[1500px] -mt-10 pointer-events-none"
            onContextMenu={(e) => {
              e.preventDefault(); // prevent the default behaviour when right clicked
              console.log("Right Click");
            }} draggable={false}
          />
          <span
            className="absolute top-[84%] left-[34%] cursor-pointer opacity-0  hover:opacity-40 hover:bg-black/20"
            onClick={() => {
              window.open('https://www.playplix.com', '_blank')
            }}
          >
            Open Website
          </span>
          <span
            className="absolute top-[36%] left-[30%] cursor-pointer opacity-0  hover:opacity-40 hover:bg-black/20"
            onClick={scrollToWerugoSection}
          >
            Learn more below
          </span>
          <span
            className="absolute top-[60%] left-[30%] cursor-pointer opacity-0 hover:opacity-40 hover:bg-black/20"
            onClick={scrollToDashboardSection}
          >
            Learn more below
          </span>
        </div>
      </div>
    </div>
  )
}
