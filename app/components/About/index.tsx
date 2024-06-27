"use client"
import about_linearbg from '@/app/assets/images/backgrounds/Home/About/about_linearbg.png'
import about_linearbg_dark from '@/app/assets/images/backgrounds/Home/About/about_linearbg_dark.png'
import about_bg from '@/app/assets/images/backgrounds/Home/About/about_bg.svg'
import about_bg_dark from '@/app/assets/images/backgrounds/Home/About/about_bg_dark.svg'
import about_card1 from '@/app/assets/images/icons/Home/About/about_card1.svg'
import about_card2 from '@/app/assets/images/icons/Home/About/about_card2.svg'
import about_card3 from '@/app/assets/images/icons/Home/About/about_card3.svg'
import Card from './Card'
import {useColorModeValue} from '@chakra-ui/react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/autoplay'
import Image from 'next/image'

export default function About() {
  const isDark = useColorModeValue(false, true)

  return (
    <div className="mt-16 pt-16 xl:pt-28 pb-40 relative z-10" id="about">
      <Image width={100} height={100}
        src={isDark ? about_linearbg_dark : about_linearbg}
        alt="about_bg"
        className="absolute top-0 left-0 w-full sm:h-full -z-10 pointer-events-none"
      />
      <div className="flex flex-col items-center md:flex-row md:justify-between md:items-start md:w-11/12 md:mx-auto lg:w-[80%] 2xl:w-2/3 mb-20 max-w-[1920px]">
      <Image width={100} height={100}
          src={isDark ? about_bg_dark : about_bg}
          alt="about_bg"
          className={`${
            isDark
              ? 'w-10/12 sm:w-[50%] md:w-[45%] md:max-w-[390px] ml-4 2xl:ml-[50px] mt-2'
              : 'w-9/12 sm:w-[45%] md:w-[40%] md:max-w-[350px] ml-10 2xl:ml-20 mt-8'
          } mx-auto mb-20 md:mb-0 md:mx-0 pointer-events-none`}
          onContextMenu={(e) => {
            e.preventDefault(); // prevent the default behaviour when right clicked
            console.log("Right Click");
          }}
        />

        <div className="flex flex-col items-center md:items-start md:w-1/2 md:max-w-lg xl:max-w-[600px] w-10/12 mx-auto md:mx-0">
          <h1 className="text-2xl lg:text-4xl xl:text-[42px] font-bold mb-2 xl:mb-4">
            What is Apprecial?
          </h1>
          <hr className="bg-[#BB6A37] pb-[3px] lg:pb-1 xl:pb-[5px] w-24 lg:w-28 xl:w-32 mx-auto md:mx-0 border-0 rounded-full mb-4 xl:mb-6" />
          <p
            className={`text-center ${
              isDark ? 'text-white/70' : 'text-black/60'
            } text-tertiary md:text-left mb-4 xl:mb-6 xl:text-lg 2xl:text-[18px]`}
          >
            Apprecial is a Software-As-A-Service (SAAS) internet company
            dedicated to developing innovative applications that make your
            everyday life easier and more enjoyable.
          </p>
          <p
            className={`text-center ${
              isDark ? 'text-white/70' : 'text-black/60'
            } text-tertiary md:text-left xl:text-lg 2xl:text-[18px]`}
          >
            At Apprecial, we are pushing the boundaries of innovation with our
            cutting-edge applications designed to enhance your productivity. By
            fusing inspiration and dedication, we&apos;re revolutionising the
            way you interact with the internet, taking your experience to new
            heights. With facility, faculty, and fecundity, our goal is to not
            only modernise your digital persona and presence, but also to
            inspire a positive change in your personal and professional
            competencies.
          </p>
        </div>
      </div>
      <div className="absolute w-full 3xl:w-[1920px] 3xl:mx-auto 3xl:relative 3xl:-mb-72">
        <div className="flex flex-col md:flex-row md:mx-auto gap-5 xl:gap-14 mx-auto w-10/12 md:w-11/12 lg:w-[85%] justify-center 3xl:justify-between 3xl:w-full">
          <Card
            isDark={isDark}
            shadow={isDark ? 'card__shadow__dark' : 'card__shadow'}
            rounded="rounded-3xl"
            title="Mission"
            description="To provide eclectic, energetic, efficacious digital products that empower people to improve their productivity, achieve their goals, and bolster both personal and business lives."
            image={about_card1}
            background={isDark ? 'bg-[#1E2025]' : 'bg-white'}
          />
          <Card
            isDark={isDark}
            shadow={isDark ? 'card__shadow__dark' : 'card__shadow'}
            rounded="rounded-3xl"
            title="Vision"
            description="To improve productivity and enhance connectivity worldwide by leveraging the power of the internet."
            image={about_card2}
            background={isDark ? 'bg-[#1E2025]' : 'bg-white'}
          />
          <Swiper
            modules={[Pagination, Autoplay]}
            className={`2xl:max-w-[400px] w-full !m-0 rounded-3xl  ${
              isDark ? 'card__shadow__dark' : 'card__shadow'
            }`}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            speed={1000}
            pagination={{
              clickable: true,
            }}
            loop={true}
          >
            <SwiperSlide>
              <Card
                isDark={isDark}
                title="Our Values"
                description="At Apprecial, we believe our users are our greatest asset. By providing exceptional service and embracing customer feedback, we prioritise what matters and hold the key to creating solutions that revolutionise online experiences."
                image={about_card3}
                background={isDark ? 'bg-[#1E2025]' : 'bg-white'}
              />
            </SwiperSlide>
            <SwiperSlide>
              <Card
                isDark={isDark}
                title="Our Values"
                description="Innovation is the driving force in everything we do. By cultivating a creative mindset, we thrive on improving what the Internet of today provides to bring our users better and more exciting products and services."
                image={about_card3}
                background={isDark ? 'bg-[#1E2025]' : 'bg-white'}
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  )
}
