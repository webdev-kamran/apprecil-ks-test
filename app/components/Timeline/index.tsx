"use client"
import { useColorModeValue } from '@chakra-ui/react'
import Card from './Card'
import { Button, Dialog, DialogPanel, DialogTitle, Transition, TransitionChild } from '@headlessui/react'
import { useState } from 'react'
import AudioShieldIcon from '@/app/assets/images/icons/Home/AudioShield.svg'
import dashboard from '@/app/assets/images/icons/Home/dashboard.png'
import werugo_icon from '@/app/assets/images/icons/Home/OurProducts/werugo_icon.png'
import Image from 'next/image'
import Link from 'next/link'
const modelPopup = [

  {
    icon:AudioShieldIcon,
    name:'AudioShield',
    link:'http://apprecial.com/audioshield'
  },
  {
    icon:werugo_icon,
    name:'Werugo',
    link:'http://apprecial.com/werugo'
  },
  {
    icon:dashboard,
    name:'Dashboard',
    link:'http://apprecial.com/dashboard'
  },

]
export default function Timeline() {
  const isDark = useColorModeValue(false, true)
  let [isOpen, setIsOpen] = useState(false)

  function open() {
    setIsOpen(true)
  }

  function close() {
    setIsOpen(false)
  }
  return (
    <>

      <div id="timeline"
        className="md:w-11/12 lg:w-[80%] xl:w-full primary text-primary 2xl:w-3/4 mx-auto flex flex-col items-center pt-10 md:pt-20 lg:pt-28 lg:pb-0 space-y-10 md:space-y-20 "

      >

        <div className="flex justify-center">

          <button onClick={open} className="rounded-xl bg-[#BB6A37] shadow border-2 border-[#BB6A37] text-white leading-snug flex gap-2 py-3 px-4 items-center justify-center hover:text-white ease-in-out duration-300 hover:bg-[#c2794b] text-lg">View All Products</button>



        </div>

        <div className='space-y-2'>
          <h1 className="text-2xl lg:text-4xl xl:text-[42px] font-bold mb-2 xl:mb-5  ">
            Timeline
          </h1>
          <hr className="bg-[#BB6A37] pb-[3px] lg:pb-1 xl:pb-[5px] w-24 lg:w-28 mx-auto border-0 rounded-full " />
        </div>
      </div>

      <div
        className="md:w-11/12 lg:w-[80%] xl:w-full primary text-primary 2xl:w-3/4 mx-auto flex flex-col items-center pt-10 "

      >
        {/* Mobile Timeline Version */}
        <div className="flex flex-col justify-center items-center w-10/12 mx-auto xl:hidden">
          <div
            className={`border-2 ${isDark
              ? 'border-[#3E3E3E] text-white/50 bg-black'
              : 'border-[#F8F8F8] text-black/50'
              } text-base font-medium rounded-full py-5 px-[14px]`}
          >
            2015
          </div>
          <div className="w-3 h-16 bg-[#bb6a371a]"></div>
          <Card
            borderColor={isDark ? 'border-[#1E2025]' : 'border-[#ffffff]'}
            isDark={isDark}
            title="The Journey Begins"
            description="The moment we realised the world needed a company that would create useful digital products to solve everyday problems, Apprecial was born."
            tileColor="bg-[#bb6a371a]"
            shadow={isDark ? 'card__shadow__dark' : 'card__shadow'}
          />
          <div className="w-3 h-16 bg-[#bb6a371a]"></div>
          <div
            className={`border-2 ${isDark
              ? 'border-[#3E3E3E] text-white/50 bg-black'
              : 'border-[#F8F8F8] text-black/50'
              } text-base font-medium rounded-full py-5 px-[14px]`}
          >
            2016
          </div>
          <div className="w-3 h-16 bg-[#bb6a371a]"></div>
          <Card
            borderColor={isDark ? 'border-[#1E2025]' : 'border-[#ffffff]'}
            isDark={isDark}
            title="Gaming"
            description="With most mobile games being repetitive and filled with ads, it was time for a change. Apprecial's subsidiary company, PlayPlix, was established with the aim of creating fun and innovative mobile games."
            tileColor="bg-[#e95e641a]"
            shadow={isDark ? 'card__shadow__dark' : 'card__shadow'}
          />
          <div className="w-3 h-16 bg-[#bb6a371a]"></div>
          <div
            className={`border-2 ${isDark
              ? 'border-[#3E3E3E] text-white/50 bg-black'
              : 'border-[#F8F8F8] text-black/50'
              } text-base font-medium rounded-full py-5 px-2.5`}
          >
            2017+
          </div>
          <div className="w-3 h-16 bg-[#bb6a371a]"></div>
          <Card
            borderColor={isDark ? 'border-[#1E2025]' : 'border-[#ffffff]'}
            isDark={isDark}
            title="The Planning Process"
            description="To ensure everything runs smoothly, the planning process has been evolving for a couple of years. Within that time, all of the documentation and future plans have been drafted, and we are now proud to announce the commencement of our products."
            tileColor="bg-[#6289cd1a]"
            shadow={isDark ? 'card__shadow__dark' : 'card__shadow'}
          />
          <div className="w-3 h-16 bg-[#bb6a3716]"></div>
          <div
            className={`border-2 ${isDark
              ? 'border-[#3E3E3E] text-white/50 bg-black'
              : 'border-[#F8F8F8] text-black/50'
              } text-base font-medium rounded-full py-5 px-[14px]`}
          >
            2024
          </div>
          <div className="w-3 h-16 bg-[#bb6a3713]"></div>
          <Card
            borderColor={isDark ? 'border-[#1E2025]' : 'border-[#ffffff]'}
            isDark={isDark}
            title="Our First Mobile App"
            description="AudioShield, our first mobile app for Android, is now available. Enjoy enhanced audio control to prevent unexpected loud sounds from blasting out in any environment."
            tileColor="bg-[#6dc56a1a]"
            shadow={isDark ? 'card__shadow__dark' : 'card__shadow'}
          />
          <div className="w-3 h-16 bg-[#bb6a3710]"></div>
        </div>

        {/* Desktop Timeline Version */}
        <div className="hidden xl:flex flex-col justify-center items-center w-full mx-auto mb-28 mt-10">
          <div className="flex flex-row-reverse items-start relative">
            <div
              className={`border-2 ${isDark
                ? 'border-[#3E3E3E] text-white/50 bg-black'
                : 'border-[#F8F8F8] text-black/50'
                } text-2xl font-medium rounded-full py-[34px] px-6 absolute left-[45.5%]`}
            >
              2015
            </div>
            <div
              className={`w-[76px] h-1 ${isDark ? 'bg-white/30' : 'bg-[#E7E7E7]'
                } absolute left-[39%] top-12`}
            ></div>
            <div className="mr-[700px]">
              <Card
                borderColor={isDark ? 'border-[#1E2025]' : 'border-[#ffffff]'}
                isDark={isDark}
                title="The Journey Begins"
                description="The moment we realised the world needed a company that would create useful digital products to solve everyday problems, Apprecial was born."
                tileColor="bg-[#bb6a371a]"
                shadow={isDark ? 'card__shadow__dark' : 'card__shadow'}
              />
            </div>
            <div
              className={`w-3 h-[94px] ${isDark ? 'bg-[#bb6a3766]' : 'bg-[#bb6a371a]'
                } absolute left-[49.8%] top-[103px]`}
            ></div>
          </div>
          <div className="flex flex-row items-start relative -mt-9">
            <div
              className={`border-2 ${isDark
                ? 'border-[#3E3E3E] text-white/50 bg-black'
                : 'border-[#F8F8F8] text-black/50'
                } text-2xl font-medium rounded-full py-6 px-[14px] absolute left-[46.5%]`}
            >
              2016
            </div>
            <div
              className={`w-[88px] h-1 ${isDark ? 'bg-white/30' : 'bg-[#E7E7E7]'
                } absolute right-[38.5%] top-10`}
            ></div>
            <div className="ml-[700px]">
              <Card
                borderColor={isDark ? 'border-[#1E2025]' : 'border-[#ffffff]'}
                isDark={isDark}
                title="Gaming"
                description="With most mobile games being repetitive and filled with ads, it was time for a change. Apprecial's subsidiary company, PlayPlix, was established with the aim of creating fun and innovative mobile games."
                tileColor="bg-[#e95e641a]"
                shadow={isDark ? 'card__shadow__dark' : 'card__shadow'}
              />
              <div
                className={`w-3 h-[205px] ${isDark ? 'bg-[#bb6a3766]' : 'bg-[#bb6a371a]'
                  } absolute left-[49.9%] top-[83px]`}
              ></div>
            </div>
          </div>
          <div className="flex flex-row-reverse items-start relative">
            <div
              className={`border-2 ${isDark
                ? 'border-[#3E3E3E] text-white/50 bg-black'
                : 'border-[#F8F8F8] text-black/50'
                } text-2xl font-medium rounded-full py-7 px-2.5 absolute left-[46.2%]`}
            >
              2017+
            </div>
            <div
              className={`w-[85px] h-1 ${isDark ? 'bg-white/30' : 'bg-[#E7E7E7]'
                } absolute left-[39%] top-10`}
            ></div>
            <div className="mr-[700px]">
              <Card
                borderColor={isDark ? 'border-[#1E2025]' : 'border-[#ffffff]'}
                isDark={isDark}
                title="The Planning Process"
                description="To ensure everything runs smoothly, the planning process has been evolving for a couple of years. Within that time, all of the documentation and future plans have been drafted, and we are now proud to announce the commencement of our products."
                tileColor="bg-[#6289cd1a]"
                shadow={isDark ? 'card__shadow__dark' : 'card__shadow'}
              />
            </div>
            <div
              className={`w-3 h-[190px] ${isDark ? 'bg-[#bb6a3766]' : 'bg-[#bb6a371a]'
                } absolute left-[49.9%] top-[91px]`}
            ></div>
          </div>
          <div className="flex flex-row items-start relative -mt-9">
            <div
              className={`border-2 ${isDark
                ? 'border-[#3E3E3E] text-white/50 bg-black'
                : 'border-[#F8F8F8] text-black/50'
                } text-2xl font-medium rounded-full py-6 px-[14px] absolute left-[46.5%]`}
            >
              2024
            </div>
            <div
              className={`w-[78px] h-1 ${isDark ? 'bg-white/30' : 'bg-[#E7E7E7]'
                } absolute right-[39%] top-10`}
            ></div>
            <div className="ml-[700px]">
              <Card
                borderColor={isDark ? 'border-[#1E2025]' : 'border-[#ffffff]'}
                isDark={isDark}
                title="Our First Mobile App"
                description="AudioShield, our first mobile app for Android, is now available. Enjoy enhanced audio control to prevent unexpected loud sounds from blasting out in any environment."
                tileColor="bg-[#6dc56a1a]"
                shadow={isDark ? 'card__shadow__dark' : 'card__shadow'}
              />
              <div
                className={`w-3 h-20 ${isDark ? 'bg-[#bb6a3766]' : 'bg-[#bb6a371a]'
                  } absolute left-[49.9%] top-[83px]`}
              ></div>
            </div>
          </div>
        </div>
      </div>
      <Transition appear show={isOpen}>
        <Dialog as="div" className="relative z-[999] focus:outline-none" onClose={close}>
          <div className="fixed inset-0 bg-black/50 w-screen overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4">
              <TransitionChild
                enter="ease-out duration-300"
                enterFrom="opacity-0 transform-[scale(95%)]"
                enterTo="opacity-100 transform-[scale(100%)]"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 transform-[scale(100%)]"
                leaveTo="opacity-0 transform-[scale(95%)]"
              >
                <DialogPanel className={`w-full max-w-lg rounded-xl pt-4 px-3 pb-6 ${isDark ? 'bg-[#272727]' : 'bg-white'}`}>
                  <div className='flex justify-between relative'>
                    <DialogTitle as="h3" className={`text-lg flex-1 text-center font-medium ${isDark ? 'text-white/70' : 'text-black/90'}`}>
                      Our Products
                    </DialogTitle>
                    <Button
                      className="inline-flex items-center absolute right-0 -top-1.5"
                      onClick={close}
                    >
                      <svg viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg" className={`w-8 h-8 ${isDark ? 'opacity-30' : 'opacity-1'
                        }`}>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M15.6319 31.9955C15.8128 31.9999 16.0298 32 16.5 32C16.9702 32 17.1872 31.9999 17.3681 31.9955C25.3639 31.7992 31.7992 25.3639 31.9955 17.3681C31.9999 17.1872 32 16.9702 32 16.5C32 16.0298 31.9999 15.8128 31.9955 15.6319C31.7992 7.63613 25.3639 1.2008 17.3681 1.00452C17.1872 1.00008 16.9702 1 16.5 1C16.0298 1 15.8128 1.00008 15.6319 1.00452C7.63613 1.2008 1.2008 7.63613 1.00452 15.6319C1.00008 15.8128 1 16.0298 1 16.5C1 16.9702 1.00008 17.1872 1.00452 17.3681C1.2008 25.3639 7.63613 31.7992 15.6319 31.9955ZM0.0048189 15.6073C0 15.8036 0 16.0358 0 16.5C0 16.9642 0 17.1964 0.0048189 17.3927C0.214189 25.9215 7.07854 32.7858 15.6073 32.9952C15.8036 33 16.0358 33 16.5 33C16.9642 33 17.1964 33 17.3927 32.9952C25.9215 32.7858 32.7858 25.9215 32.9952 17.3927C33 17.1964 33 16.9642 33 16.5C33 16.0358 33 15.8036 32.9952 15.6073C32.7858 7.07854 25.9215 0.214189 17.3927 0.0048189C17.1964 0 16.9642 0 16.5 0C16.0358 0 15.8036 0 15.6073 0.0048189C7.07854 0.214189 0.214189 7.07854 0.0048189 15.6073Z" fill="#EEEEEE" />
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M21.2929 22.7071C21.6834 23.0976 22.3166 23.0976 22.7071 22.7071C23.0976 22.3166 23.0976 21.6834 22.7071 21.2929L17.9142 16.5L22.7071 11.7071C23.0976 11.3166 23.0976 10.6834 22.7071 10.2929C22.3166 9.90237 21.6834 9.90237 21.2929 10.2929L16.5 15.0858L11.7071 10.2929C11.3166 9.90237 10.6834 9.90237 10.2929 10.2929C9.90237 10.6834 9.90237 11.3166 10.2929 11.7071L15.0858 16.5L10.2929 21.2929C9.90237 21.6834 9.90237 22.3166 10.2929 22.7071C10.6834 23.0976 11.3166 23.0976 11.7071 22.7071L16.5 17.9142L21.2929 22.7071Z" fill="#919191" />
                      </svg>

                    </Button>
                  </div>
                  <p className={`mt-1 text-center font-medium ${isDark ? 'text-white/50' : 'text-[#011d41]/50'
                    }`}>
                    Explore the functionalities offered by Apprecial&apos;s products.
                  </p>
                  <div className="mt-4 flex flex-wrap justify-center gap-10">
                    {modelPopup.map((item:any, index:any)=>(
                      <Link href={item.link} key={index} target='_blank' className='group'>
                    <div className='space-y-1' >
                      <div className={`w-16 h-16 mx-auto rounded-full flex justify-center items-center ease-in-out duration-150 ${isDark ? 'bg-white/5 hover:bg-white/10' : 'bg-[#011d41]/5 hover:bg-[#011d41]/10'}`}>
                      <Image width={100} height={100}
                          src={item.icon}
                          alt="dashboard"
                          className={`mt-0.5 pointer-events-none ${item.name === 'Dashboard' ? 'w-7' : 'w-7 md:w-8'}`}
                          onContextMenu={(e) => {
                            e.preventDefault(); // prevent the default behaviour when right clicked
                            console.log("Right Click");
                          }}
                        />
                      </div>
                      <p className={`text-center font-medium group-hover:text-[#BB6A37] ease-in-out duration-150 ${isDark ? 'text-white/70' : 'text-black/90'}`}>{item.name}</p>
                    </div></Link>
                  ))}
                  </div>
                </DialogPanel>
              </TransitionChild>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}
