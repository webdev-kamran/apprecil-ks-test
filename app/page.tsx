"use client"
import React, { useState, useEffect } from 'react';
import Image from "next/image";
import About from '@/app/components/About'
import CompanyStructure from '@/app/components/CompanyStructure'
import HeroBanner from '@/app/components/HeroBanner'
import OurProducts from '@/app/components/OurProducts'
import AudioShield from '@/app/components/AudioShield'
import Timeline from '@/app/components/Timeline'
import Footer from '@/app/components/Footer'
import Header from '@/app/components/Header'
import { 
  useColorModeValue,
 

} from '@chakra-ui/react'
export default function Home() {
  const [isTop, setIsTop] = useState(true);
  const isDark = useColorModeValue(false, true)
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTop(true);
      } else {
        setIsTop(false);
      }
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Remove event listener on cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
   <>
   <nav className={`fixed top-0 inset-x-0 z-50  ${isTop ? '' : `shadow-1 ${isDark ? 'bg-[#1E2025]' : 'bg-white'}`}`} >
  <Header /></nav>
  <HeroBanner />
  <About />
  <CompanyStructure />
  <OurProducts />
  <AudioShield />
  <Timeline />
  <Footer />
   </>
  );
}
