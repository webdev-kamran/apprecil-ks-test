"use client"
import React, { useState } from 'react'
import footer_logo from '@/app/assets/audioshield/footer_logo.svg'
import Image from 'next/image';
import { Button, Dialog, DialogPanel, DialogTitle, Transition, TransitionChild } from '@headlessui/react'
import { FaXTwitter, FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa6";
import Terms from '@/app/components/Footer/Terms';
import Privacy from '@/app/components/Footer/Privacy';
export default function Footer() {
  // const { isOpen, onOpen, onOpenChange } = useDisclosure();
  // const modal1 = useDisclosure()
  // const modal2 = useDisclosure()

  let [isOpen, setIsOpen] = useState(false)
  let [isTerm, setIsTerm] = useState(false)
  function open() {
    setIsOpen(true)
  }

  function close() {
    setIsOpen(false)
  }

  function termOpen() {
    setIsTerm(true)
  }

  function termClose() {
    setIsTerm(false)
  }




  return (
    <>
      <div className="text-white/80 bg-gradient-to-tr from-black to-black/80 bottom-0 inset-x-0 z-50" >
        <div className="px-5 xl:w-[85%] 2xl:w-3/4 max-w-[1920px] mx-auto py-3 flex flex-col gap-5 items-center lg:gap-0 lg:flex-row lg:justify-between">
          <div className="flex gap-1.5 items-center">
            <Image
              src={footer_logo}
              alt="footer_logo"
              className="w-4 pointer-events-none"
            />
            <span className="text-xs lg:text-sm text-white/80">
              Copyright &copy; Apprecial LTD. {new Date().getFullYear()}. All Rights
              Reserved.
            </span>
          </div>
          <div className="flex items-center gap-8 lg:gap-5">
            <a
              href="https://twitter.com/apprecial_"
              target="_blank"
              rel="noopener noreferrer" className='text-asprimary'
            >
              <FaXTwitter />
            </a>
            <a
              href="https://facebook.com/apprecial"
              target="_blank"
              rel="noopener noreferrer" className='text-asprimary'
            >
              <FaFacebookF />
            </a>
            <a
              href="https://instagram.com/apprecial"
              target="_blank"
              rel="noopener noreferrer" className='text-asprimary'
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.linkedin.com/company/apprecial"
              target="_blank"
              rel="noopener noreferrer" className='text-asprimary'
            >
              <FaLinkedinIn />
            </a>
          </div>
          <div className="flex items-center flex-wrap gap-x-3 xl:gap-x-10 gap-y-5 justify-center">

            <button onClick={open} className="text-xs lg:text-sm font-medium text-white hover:text-asprimary ease-in-out duration-300 bg-none px-0 bg-transparent">
              Privacy Policy
            </button>
            <button onClick={termOpen} className="text-xs lg:text-sm font-medium text-white hover:text-asprimary ease-in-out duration-300 bg-none px-0 bg-transparent">
              Terms
            </button>


            <a href='/' className='rounded border border-[#BB6A37] text-[#BB6A37] hover:bg-[#BB6A37] hover:text-white ease-in-out duration-300 py-1 px-3 text-sm flex-1 text-center whitespace-nowrap'>Back to Apprecial</a>



          </div>

        </div>
      </div>


      <Transition appear show={isOpen}>
        <Dialog as="div" className="relative z-[999] focus:outline-none" onClose={close}>
          <div className="fixed inset-0 bg-black/50 w-screen flex justify-center items-center ">

            <TransitionChild
              enter="ease-out duration-300"
              enterFrom="opacity-0 transform-[scale(95%)]"
              enterTo="opacity-100 transform-[scale(100%)]"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 transform-[scale(100%)]"
              leaveTo="opacity-0 transform-[scale(95%)]"
            >
              <DialogPanel className={`w-full max-w-2xl mx-auto rounded-xl p-3 max-h-[calc(100vh-70px)] bg-white`}>
                <div className='p-5 overflow-auto max-h-[calc(100vh-100px)] on-hover-scroll'>
                  <div className='flex justify-between relative'>
                    <DialogTitle as="h3" className={`text-2xl flex-1 text-left font-medium text-black/90`}>
                      Privacy Policy
                    </DialogTitle>
                    <Button
                      className='absolute top-3 right-3 px-0 min-w-0 rounded-full w-8 h-8 border border-gray-300 flex justify-center items-center text-gray-500'
                      onClick={close}
                    >
                      <svg viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg" className={`w-8 h-8 opacity-1 `}>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M15.6319 31.9955C15.8128 31.9999 16.0298 32 16.5 32C16.9702 32 17.1872 31.9999 17.3681 31.9955C25.3639 31.7992 31.7992 25.3639 31.9955 17.3681C31.9999 17.1872 32 16.9702 32 16.5C32 16.0298 31.9999 15.8128 31.9955 15.6319C31.7992 7.63613 25.3639 1.2008 17.3681 1.00452C17.1872 1.00008 16.9702 1 16.5 1C16.0298 1 15.8128 1.00008 15.6319 1.00452C7.63613 1.2008 1.2008 7.63613 1.00452 15.6319C1.00008 15.8128 1 16.0298 1 16.5C1 16.9702 1.00008 17.1872 1.00452 17.3681C1.2008 25.3639 7.63613 31.7992 15.6319 31.9955ZM0.0048189 15.6073C0 15.8036 0 16.0358 0 16.5C0 16.9642 0 17.1964 0.0048189 17.3927C0.214189 25.9215 7.07854 32.7858 15.6073 32.9952C15.8036 33 16.0358 33 16.5 33C16.9642 33 17.1964 33 17.3927 32.9952C25.9215 32.7858 32.7858 25.9215 32.9952 17.3927C33 17.1964 33 16.9642 33 16.5C33 16.0358 33 15.8036 32.9952 15.6073C32.7858 7.07854 25.9215 0.214189 17.3927 0.0048189C17.1964 0 16.9642 0 16.5 0C16.0358 0 15.8036 0 15.6073 0.0048189C7.07854 0.214189 0.214189 7.07854 0.0048189 15.6073Z" fill="#EEEEEE" />
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M21.2929 22.7071C21.6834 23.0976 22.3166 23.0976 22.7071 22.7071C23.0976 22.3166 23.0976 21.6834 22.7071 21.2929L17.9142 16.5L22.7071 11.7071C23.0976 11.3166 23.0976 10.6834 22.7071 10.2929C22.3166 9.90237 21.6834 9.90237 21.2929 10.2929L16.5 15.0858L11.7071 10.2929C11.3166 9.90237 10.6834 9.90237 10.2929 10.2929C9.90237 10.6834 9.90237 11.3166 10.2929 11.7071L15.0858 16.5L10.2929 21.2929C9.90237 21.6834 9.90237 22.3166 10.2929 22.7071C10.6834 23.0976 11.3166 23.0976 11.7071 22.7071L16.5 17.9142L21.2929 22.7071Z" fill="#919191" />
                      </svg>

                    </Button>
                  </div>
                  <p className={`mt-1 text-left text-sm font-normal text-[#011d41]/70 `}>
                    Last Updated: July 4th, 2024
                  </p>
                  <div className="mt-4 flex flex-wrap justify-center gap-10">
                    <div className='justify-center gap-10 flex-wrap'>

                      <Privacy />

                    </div>
                  </div></div>
              </DialogPanel>
            </TransitionChild>

          </div>
        </Dialog>
      </Transition>

      <Transition appear show={isTerm}>
        <Dialog as="div" className="relative z-[999] focus:outline-none" onClose={termClose}>
          <div className="fixed inset-0 bg-black/50 w-screen flex justify-center items-center ">

            <TransitionChild
              enter="ease-out duration-300"
              enterFrom="opacity-0 transform-[scale(95%)]"
              enterTo="opacity-100 transform-[scale(100%)]"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 transform-[scale(100%)]"
              leaveTo="opacity-0 transform-[scale(95%)]"
            >
              <DialogPanel className={`w-full max-w-2xl mx-auto rounded-xl p-3 max-h-[calc(100vh-70px)] bg-white `}>
                <div className='p-5 overflow-auto max-h-[calc(100vh-100px)] on-hover-scroll'>
                  <div className='flex justify-between relative'>
                    <DialogTitle as="h3" className={`text-2xl flex-1 text-left font-medium text-black/90 `}>
                      Terms & Conditions
                    </DialogTitle>
                    <Button
                      className='absolute top-3 right-3 px-0 min-w-0 rounded-full w-8 h-8 border border-gray-300 flex justify-center items-center text-gray-500'
                      onClick={termClose}
                    >
                      <svg viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg" className={`w-8 h-8 opacity-1 `}>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M15.6319 31.9955C15.8128 31.9999 16.0298 32 16.5 32C16.9702 32 17.1872 31.9999 17.3681 31.9955C25.3639 31.7992 31.7992 25.3639 31.9955 17.3681C31.9999 17.1872 32 16.9702 32 16.5C32 16.0298 31.9999 15.8128 31.9955 15.6319C31.7992 7.63613 25.3639 1.2008 17.3681 1.00452C17.1872 1.00008 16.9702 1 16.5 1C16.0298 1 15.8128 1.00008 15.6319 1.00452C7.63613 1.2008 1.2008 7.63613 1.00452 15.6319C1.00008 15.8128 1 16.0298 1 16.5C1 16.9702 1.00008 17.1872 1.00452 17.3681C1.2008 25.3639 7.63613 31.7992 15.6319 31.9955ZM0.0048189 15.6073C0 15.8036 0 16.0358 0 16.5C0 16.9642 0 17.1964 0.0048189 17.3927C0.214189 25.9215 7.07854 32.7858 15.6073 32.9952C15.8036 33 16.0358 33 16.5 33C16.9642 33 17.1964 33 17.3927 32.9952C25.9215 32.7858 32.7858 25.9215 32.9952 17.3927C33 17.1964 33 16.9642 33 16.5C33 16.0358 33 15.8036 32.9952 15.6073C32.7858 7.07854 25.9215 0.214189 17.3927 0.0048189C17.1964 0 16.9642 0 16.5 0C16.0358 0 15.8036 0 15.6073 0.0048189C7.07854 0.214189 0.214189 7.07854 0.0048189 15.6073Z" fill="#EEEEEE" />
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M21.2929 22.7071C21.6834 23.0976 22.3166 23.0976 22.7071 22.7071C23.0976 22.3166 23.0976 21.6834 22.7071 21.2929L17.9142 16.5L22.7071 11.7071C23.0976 11.3166 23.0976 10.6834 22.7071 10.2929C22.3166 9.90237 21.6834 9.90237 21.2929 10.2929L16.5 15.0858L11.7071 10.2929C11.3166 9.90237 10.6834 9.90237 10.2929 10.2929C9.90237 10.6834 9.90237 11.3166 10.2929 11.7071L15.0858 16.5L10.2929 21.2929C9.90237 21.6834 9.90237 22.3166 10.2929 22.7071C10.6834 23.0976 11.3166 23.0976 11.7071 22.7071L16.5 17.9142L21.2929 22.7071Z" fill="#919191" />
                      </svg>

                    </Button>
                  </div>
                  <p className={`mt-1 text-left text-sm font-normal text-[#011d41]/70`}>
                    Effective: July 4th, 2024
                  </p>
                  <div className="mt-4 flex flex-wrap justify-center gap-10">
                    <div className='justify-center gap-10 flex-wrap'>

                      <Terms />

                    </div>
                  </div></div>
              </DialogPanel>
            </TransitionChild>

          </div>
        </Dialog>
      </Transition>


    </>
  )
}
