 "use client"
// import explore from '/images/explore.png'
// import explore_dark from '/images/explore_dark.png'
// import bg_video_dark from '@/app/assets/videos/Home/HeroBanner/Apprecialweb_animation_Dark.gif'
// import bg_video_light from '@/app/assets/videos/Home/HeroBanner/Apprecialweb_animation_Light.gif'
import bg_video_dark from '@/app/assets/videos/Home/HeroBanner/Apprecialweb_animation_Dark.json'
import bg_video_light from '@/app/assets/videos/Home/HeroBanner/Apprecialweb_animation_Light.json'
import Lottie from 'lottie-react';
import Image from 'next/image'
import {useColorModeValue} from '@chakra-ui/react'



export default function HeroBanner() {
  const isDark = useColorModeValue(false, true)

  const scrollToNextSection = () => {
    const nextSection = document.querySelector('#about')
    nextSection?.scrollIntoView({
      behavior: 'smooth',
    })
  }






  return (
    <div className="text-primary pt-10 md:pt-16" id="home">
      <div className="pt-10 md:pt-16 flex flex-col-reverse md:flex-row md:justify-between md:items-center w-11/12 lg:w-[85%] 2xl:w-3/4 mx-auto max-w-[1920px]">
        <div className="flex flex-col gap-4 mt-8 text-center md:text-left md:w-full md:mt-0">
          <h1 className="text-3xl lg:text-4xl xl:text-[50px] 2xl:text-[57px] font-bold leading-10 lg:leading-[50px] xl:leading-[70px] 2xl:leading-[85px]">
            Improving Productivity, <br />
            Enhancing Connectivity
          </h1>
          <p
            className={`text-tertiary xl:text-lg 2xl:text-xl lg:w-[90%] xl:w-[80%]   ${isDark ? 'text-white/70' : 'text-black/60'
              }`}
          >
            Apprecial creates innovative digital products that make your
            day-to-day life more manageable.
          </p>
        </div>



        <Lottie
          animationData={isDark ? bg_video_dark : bg_video_light}
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
          }}
        />



      </div>
      <div
        className="flex flex-col w-fit mx-auto items-center gap-1 md:gap-2 cursor-pointer mt-14 xl:mt-0"
        onClick={scrollToNextSection}
      >
        <Image width={100} height={100}
          src={isDark ? '/explore_dark.png' : '/explore.png'}
          alt="explore"
          className="w-8 md:w-10 lg:w-12 h-auto mx-auto"
          onContextMenu={(e) => {
            e.preventDefault(); // prevent the default behaviour when right clicked
            console.log("Right Click");
          }} draggable={false}
        />
        <span className="uppercase text-xs md:text-base font-medium">explore</span>
      </div>
    </div>
  )
}
