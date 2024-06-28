"use client"
import brandlogo from '@/app/assets/audioshield/audioshield.svg'
import Drawer from './Drawer';
import { IoIosMenu } from "react-icons/io";
import Image from 'next/image'
import Link from 'next/link';
import React, { useState, useRef, useEffect } from 'react'
 
import { scroller } from 'react-scroll';
const nav = [
  { name: 'Home', sectionId: 'home' },
  { name: 'About', sectionId: 'about' },
  { name: 'Plans', sectionId: 'plans' },
  { name: 'Download', sectionId: 'download' },
]


export default function Navbar() {

  const [scrollPosition, setScrollPosition] = useState(0); 
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };





  useEffect(() => {


    const handleScroll = (): any => {
      const scrollY = window.scrollY;
      const home = document.getElementById('home')?.offsetTop || 0;
      const about = document.getElementById('about')?.offsetTop || 0;
      const plans = document.getElementById('plans')?.offsetTop || 0;
      const download = document.getElementById('download')?.offsetTop || 0;


      if (scrollY >= home && scrollY < about) {
        setActiveSection('home');
      } else if (scrollY >= about && scrollY < plans) {
        setActiveSection('about');
      } else if (scrollY >= plans && scrollY < download) {
        setActiveSection('plans');
      } else if (scrollY >= download) {
        setActiveSection('download');
      }
    };





    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);

  }, []);



  const scrollToSection = (sectionId: string) => {
    scroller.scrollTo(sectionId, {
      duration: 800,
      smooth: 'easeInOutQuad',
    });
    setIsMenuOpen(false); // Close navbar after clicking a link

  };



  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [drawerContent, setDrawerContent] = useState<React.ReactNode>(null);

  const toggleDrawer = (content?: React.ReactNode) => {
    setDrawerContent(content);
    setIsDrawerOpen(!isDrawerOpen);
  };



  return (

    <div className="text-asprimary py-4 px-5 xl:w-[85%] 2xl:w-3/4 max-w-[1920px] mx-auto">

      <div className="flex items-center justify-between w-full relative ">
        <div className='lg:absolute inset-y-0 flex items-center'>
          <Link href="#home">
            <Image width={200} height={50}
              src={brandlogo}
              alt="logo"
              className="cursor-pointer "
            />
          </Link>
        </div>
        <button className='lg:hidden text-asgray-2' onClick={() => toggleDrawer()}>
          <IoIosMenu size={32} />
        </button>



        <div className="hidden lg:flex gap-8 xl:gap-10 2xl:gap-12 lg:justify-center flex-1">
          {nav.map((item: any, index: any) => (


            <button key={index} onClick={() => scrollToSection(`${item.sectionId}`)} className={`cursor-pointer hover:text-asprimary border-b-2 hover:border-asprimary transition-all duration-75 ease-in-out  ${activeSection === `${item.sectionId}` ? 'border-asprimary text-asprimary' : 'border-transparent text-black'}`}>
              <span className='relative z-10 font-medium text-lg'>{item.name}</span>
            </button>

          ))}

        </div>
      </div>


      <Drawer isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)}>
        <div className="flex flex-col gap-5 xl:gap-8 2xl:gap-10 lg:justify-center">

          {nav.map((item: any, index: any) => {
            const handleMenuTarget = () => {
              scrollToSection(`${item.sectionId}`)
            };

            const handleCloseDrower = () => {
              setIsDrawerOpen(false)
            };

            const handleMix = () => {
              handleMenuTarget();
              handleCloseDrower();
            };


            return (

              <button key={index} onClick={handleMix} className={`w-full md:w-auto flex px-0 cursor-pointer font-medium text-lg hover:text-[#BB6A37] border-b-[3px] hover:border-[#BB6A37] transition-all duration-75 ease-in-out  ${activeSection === `${item.sectionId}` ? 'border-asprimary text-asprimary' : 'border-transparent text-black'}`}>
                <span className='relative z-10'>{item.name}</span>
              </button>

            )
          })}




        </div>
      </Drawer>
    </div>

  )
}
