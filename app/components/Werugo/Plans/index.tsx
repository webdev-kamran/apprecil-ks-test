"use client"
import { Fragment, useState } from 'react'
import Basic from '@/app/assets/werugo/images/plans/icon-basic.svg'
import Premium from '@/app/assets/werugo/images/plans/icon-premium.svg'
import Family from '@/app/assets/werugo/images/plans/icon-family.svg'

import { Dialog, Transition } from '@headlessui/react'

import { TbCheck, TbX } from 'react-icons/tb'

import Card from './Card'
import PlansCompare from '../PlansCompare'


const Plans = () => {

  let [isOpen, setIsOpen] = useState(false)

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

  const plansCards = [
    {
      select: false,
      icon: Basic,
      title: 'Basic',
      price: '£2.49',
      term: "Month",
      popularPlan: false,
      badge: 'Popular',
      features: [
        {
          availability: <TbCheck size={26} color='#39AE56' />,
          feature: 'Only 1 device protected'
        },
        {
          availability: <TbCheck size={26} color='#39AE56' />,
          feature: '1 Apprecial account'
        },
      ]
    },

    {
      select: true,
      icon: Premium,
      title: 'Premium',
      price: '£4.99',
      term: "Month",
      popularPlan: false,
      badge: 'Popular',
      features: [
        {
          availability: <TbCheck size={22} color='#39AE56' />,
          feature: 'Up to 5 devices protected'
        },
        {
          availability: <TbCheck size={22} color='#39AE56' />,
          feature: '1 Apprecial account'
        },
      ]
    },

    {
      select: false,
      icon: Family,
      title: 'Family',
      price: '£9.99',
      term: "Month",
      popularPlan: true,
      badge: 'Popular',
      features: [
        {
          availability: <TbCheck size={22} color='#39AE56' />,
          feature: 'Up to 10 devices protected'
        },
        {
          availability: <TbCheck size={22} color='#39AE56' />,
          feature: '2 Apprecial accounts'
        },
      ]
    },


  ]



  return (
    <>
      <div className='md:py-10 sm:w-10/12 md:w-11/12 lg:w-[85%] 2xl:w-3/4 mx-auto px-5 sm:px-0' id='plans'>
        <div className='flex justify-center pt-20 pb-20'>
          <h2 className="text-3xl lg:text-4xl xl:text-[42px] font-bold text-center md:text-left relative before:-bottom-5 before:w-32 before:bg-[#39AE56] before:absolute before:h-1 before:left-1/2 before:-translate-x-1/2">
            Membership Plans
          </h2>
        </div>
        <div className='relative flex flex-col md:grid md:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-12'  >

          {plansCards.map((card, index) => (
            <Card key={index} card={card} />
          ))}

        </div>

        <div className='flex justify-center pt-16'>
          <button onClick={openModal} className='rounded-xl font-semibold text-white leading-snug flex gap-2 py-3 px-6 items-center justify-center  ease-in-out duration-300  bg-[#39AE56] text-lg'>Compare All Plans</button>
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


                  <PlansCompare />



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

export default Plans