"use client"
import about_phone from '@/app/assets/werugo/images/backgrounds/about_phone.png' 
import Image from 'next/image';
const About = () => {
  return (
    <div id="about" className='h-[95vh] sm:h-auto  overflow-hidden about-werugo'>
      <div className="flex w-full md:w-11/12 xl:w-3/4 mx-auto z-20">
        <div className="w-full px-10 flex flex-col md:flex-row justify-between pt-24 lg:pt-32 ">
          <div className="flex flex-col gap-5 md:gap-10 pb-10 md:pb-0">
            <h2 className="text-3xl lg:text-4xl xl:text-[42px] font-bold text-center md:text-left">
              About Werugo
            </h2>
            <p className="lg:text-lg text-white/80 leading-[150%] font-normal  md:max-w-sm lg:max-w-[589px] text-center md:text-left">
              A ground-breaking device tracker application for iOS and Android
              devices, Werugo offers advanced features such as voice-activated
              device location, real-time tracking, and remote control
              capabilities, making it reliable for ensuring security. It&apos;s
              like having a personal assistant for your devices, minus the
              coffee runs.
            </p>
          </div>
          <div className='flex justify-center md:justify-start items-start xl:-mb-20'>
          <Image width={1000} height={1000}
            src={about_phone}
            alt="About Phone" className='max-w-[350px] h-auto w-auto' onContextMenu={(e) => {
              e.preventDefault(); // prevent the default behaviour when right clicked
              console.log("Right Click");
            }}
            draggable={false} 
          />
        </div></div>
      </div>
    </div>
  )
}

export default About