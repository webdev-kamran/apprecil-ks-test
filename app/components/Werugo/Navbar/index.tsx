"use client"
import { useState, useEffect } from 'react'
import dashboard from '@/app/assets/werugo/images/icons/dashboard.svg'
import Lottie from 'lottie-react';
import logo from '@/app/assets/werugo/lotties/logo_animation.json'
import Link from 'next/link';
import Image from 'next/image';
// import { Link } from "react-scroll";
import { scroller } from 'react-scroll';
import Drawer from './Drawer';
import { IoIosMenu } from "react-icons/io";
const nav = [
  { name: 'Home', sectionId: 'home' },
  { name: 'About', sectionId: 'about' },
  { name: 'Features', sectionId: 'features' },
  { name: 'Plans', sectionId: 'plans' },
  { name: 'Download', sectionId: 'download' },
]
const Navbar = () => {

 
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

 




  useEffect(() => {


    const handleScroll = (): any => {
      const scrollY = window.scrollY;
      const home = document.getElementById('home')?.offsetTop || 0;
      const about = document.getElementById('about')?.offsetTop || 0;
      const features = document.getElementById('features')?.offsetTop || 0;
      const plans = document.getElementById('plans')?.offsetTop || 0;
      const download = document.getElementById('download')?.offsetTop || 0;


      if (scrollY >= home && scrollY < about) {
        setActiveSection('home');
      } else if (scrollY >= about && scrollY < features) {
        setActiveSection('about');
      } else if (scrollY >= features && scrollY < plans) {
        setActiveSection('features');
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
    <>
     
        <div className="text-primary flex items-center justify-between py-4 w-11/12 lg:w-[85%] 2xl:w-3/4 max-w-[1920px] mx-auto">
        <button className='md:hidden text-gray-600 mr-5' onClick={() => toggleDrawer()}>
          <IoIosMenu size={32} />
        </button>
          <div className="flex items-center justify-start w-full gap-2 cursor-default">
            <Lottie
              animationData={logo}
              loop
              autoplay
              rendererSettings={
                {
                  preserveAspectRatio: "xMidYMid slice"
                }
              }
              className='w-7 h-7 sm:w-9 sm:h-9'
            />
            <h1 className='font-bold text-2xl sm:text-[30px] leading-[150%]'>Werugo</h1>
          </div>


          <nav className="hidden md:flex ">
            <ul className='flex-1 flex gap-5 lg:gap-12'>

              {nav.map((item: any, index: any) => (

                <li key={index}>
                  <button onClick={() => scrollToSection(`${item.sectionId}`)} className={`cursor-pointer text-lg hover:text-[#39AE56] border-b-[3px] hover:border-[#39AE56] duration-75 ease-in-out font-medium pb-1 block  ${activeSection === `${item.sectionId}` ? 'border-[#39AE56] text-[#39AE56]' : 'border-transparent text-black'}`}>
                    <span className='relative z-10'>{item.name}</span>
                  </button>
                </li>
              ))}



            </ul>
          </nav>

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

              <button key={index} onClick={handleMix} className={`cursor-pointer text-lg hover:text-[#39AE56] border-b-[3px] hover:border-[#39AE56] duration-75 ease-in-out font-medium pb-1 block text-left  ${activeSection === `${item.sectionId}` ? 'border-[#39AE56] text-[#39AE56]' : 'border-transparent text-black'}`}>
                <span className='relative z-10'>{item.name}</span>
              </button>

            )
          })}




        </div>
      </Drawer>


          <div className="flex items-center gap-6 md:w-full justify-end">
            <Link
              href="https://dash.apprecial.com"
              target="_blank"
              rel="noopener noreferrer"
              className='rounded-xl bg-white shadow border-2 border-[#39AE56] text-[#39AE56]  font-semibold leading-snug flex gap-2 py-2 px-4 items-center justify-center hover:text-white ease-in-out duration-300 hover:bg-[#39AE56] text-lg'
            >
              <svg viewBox="0 0 17 17" fill="currentColor" className='w-4' >
                <path d="M7.39367 2.42495V5.38242C7.39367 5.97069 7.15998 6.53488 6.74401 6.95085C6.32803 7.36683 5.76385 7.60052 5.17557 7.60052H2.2181C1.62983 7.60052 1.06564 7.36683 0.649667 6.95085C0.233692 6.53488 0 5.97069 0 5.38242V2.42495C0 1.83667 0.233692 1.27249 0.649667 0.85651C1.06564 0.440535 1.62983 0.206843 2.2181 0.206843H5.17557C5.76385 0.206843 6.32803 0.440535 6.74401 0.85651C7.15998 1.27249 7.39367 1.83667 7.39367 2.42495ZM14.3683 0.206787H11.4109C10.8226 0.206787 10.2584 0.440479 9.84242 0.856454C9.42644 1.27243 9.19275 1.83661 9.19275 2.42489V5.38236C9.19275 5.97064 9.42644 6.53482 9.84242 6.95079C10.2584 7.36677 10.8226 7.60046 11.4109 7.60046H14.3683C14.9566 7.60046 15.5208 7.36677 15.9368 6.95079C16.3527 6.53482 16.5864 5.97064 16.5864 5.38236V2.42489C16.5864 1.83661 16.3527 1.27243 15.9368 0.856454C15.5208 0.440479 14.9566 0.206787 14.3683 0.206787ZM5.17582 9.39924H2.21835C1.63007 9.39924 1.06589 9.63293 0.649912 10.0489C0.233938 10.4649 0.000245246 11.0291 0.000245246 11.6173V14.5748C0.000245246 15.1631 0.233938 15.7273 0.649912 16.1432C1.06589 16.5592 1.63007 16.7929 2.21835 16.7929H5.17582C5.76409 16.7929 6.32828 16.5592 6.74425 16.1432C7.16023 15.7273 7.39392 15.1631 7.39392 14.5748V11.6173C7.39392 11.0291 7.16023 10.4649 6.74425 10.0489C6.32828 9.63293 5.76409 9.39924 5.17582 9.39924ZM14.3683 9.39937H11.4109C10.8226 9.39937 10.2584 9.63306 9.84242 10.049C9.42644 10.465 9.19275 11.0292 9.19275 11.6175V14.5749C9.19275 15.1632 9.42644 15.7274 9.84242 16.1434C10.2584 16.5594 10.8226 16.793 11.4109 16.793H14.3683C14.9566 16.793 15.5208 16.5594 15.9368 16.1434C16.3527 15.7274 16.5864 15.1632 16.5864 14.5749V11.6175C16.5864 11.0292 16.3527 10.465 15.9368 10.049C15.5208 9.63306 14.9566 9.39937 14.3683 9.39937Z" />
              </svg>

              Dashboard

            </Link>
          </div>
        </div>


    












    </>
  )
}

export default Navbar