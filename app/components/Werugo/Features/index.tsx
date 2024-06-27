"use client"
import { Fragment, useState } from 'react'
// import Slider from 'react-slick'
// import arrowRight from '../../assets/images/icons/arrow_right.svg'
import illustration_1 from '@/app/assets/werugo/lotties/illustration_1.json'
import illustration_2 from '@/app/assets/werugo/lotties/illustration_2.json'
import illustration_3 from '@/app/assets/werugo/lotties/illustration_3.json'


import { Dialog, Transition } from '@headlessui/react'
import PlansCompare from '../PlansCompare'
import { TbCheck, TbX } from 'react-icons/tb' 
// import 'slick-carousel/slick/slick.css'
// import 'slick-carousel/slick/slick-theme.css'
import Card from './Card'

const Features = () => {
  const [sliderRef, setSliderRef] = useState(null)

  let [isOpen, setIsOpen] = useState(false)

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

  const featuredCards = [
    {
      src: illustration_1,
      title: 'Find lost devices with voice control',
      description: "Werugo's unique Voice Control Feature allows you to locate your device instantly and with ease. Record your voice, including keywords of your choice, and use them to navigate to your device or find a missing one.",
      model:openModal
    },
    {
      src: illustration_3,
      title: 'Control Your Devices',
      description: 'You cannot control everything, but you can control your device! With an active Internet connection, users can remotely take over their device with a simple click on the Dashboard. Werugo places privacy protection where it should be; in your hands.',
      model:openModal
    },
    {
      src: illustration_2,
      title: 'Track devices in real time',
      description: "Werugo's real-time tracking ability gives you the opportunity to instantaneously be aware of the location of your device at any given time. Through the Apprecial Dashboard on your computer or mobile phone browser, you will have the option to locate and track the registered device in real time.",
      model:openModal
    },

  ]

  // const sliderSettings = {
  //     autoplay: false,
  //     autoplaySpeed: 10000,
  //     pauseOnHover: false,
  //     arrows: false,
  //     centerMode: true,
  //     slidesToShow: 2.095,
  //     slidesToScroll: 1,
  //     nfinite:true,     
  //   responsive: [
  //     {
  //       breakpoint: 1535,
  //       settings: {
  //         slidesToShow: 2.05,
  //       }
  //     },
  //     {
  //       breakpoint: 991,
  //       settings: {
  //         slidesToShow: 1.05,
  //       }
  //     },
  //     {
  //       breakpoint: 640,
  //       settings: {
  //         slidesToShow: 1,
  //         centerMode: false,
  //       }
  //     },
  //   ]
  // }

  return (
    <>
      <div className='md:py-10 sm:w-10/12 md:w-11/12 lg:w-[85%] 2xl:w-3/4 mx-auto px-5 sm:px-0' id='features'>
        <div className='flex justify-center py-14 xl:pt-28xl:pb-20'>
          <h2 className="text-3xl lg:text-4xl xl:text-[42px] font-bold text-center md:text-left relative before:-bottom-5 before:w-32 before:bg-[#39AE56] before:absolute before:h-1 before:left-1/2 before:-translate-x-1/2">
            Features
          </h2>
        </div>
        <div className='relative flex flex-col md:grid md:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-12'  >
          {featuredCards.map((card, index) => (
            <Card key={index} card={card}  />
          ))}
        </div>
      </div>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-50" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/50" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto ">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-screen-xl overflow-auto rounded-2xl bg-white p-6 flex gap-3 text-left align-middle shadow-xl transition-all">

                  
                    <PlansCompare   />
                 

                  
                  <button
                    type="button"
                    className="w-[33px] h-[33px] shrink-0 flex justify-center items-center bg-white border border-zinc-300 rounded-full"
                    onClick={closeModal}
                  >
                    <TbX size="20" color='#999' />
                  </button>

                </Dialog.Panel>
              </Transition.Child>
            </div>


          </div>
        </Dialog>
      </Transition>
    </>
  )
}

export default Features