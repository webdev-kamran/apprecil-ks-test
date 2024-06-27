"use client"
import React, { useState, useEffect } from 'react';
import Footer from '@/app/components/Werugo/Footer'
import Navbar from '@/app/components/Werugo/Navbar'
 
import HeroBanner from '@/app/components/Werugo/HeroBanner'
import About from '@/app/components/Werugo/About'
import Features from '@/app/components/Werugo/Features'
import Plans from '@/app/components/Werugo/Plans'
import Download from '@/app/components/Werugo/Download'
function Werugo() {
    const [isTop, setIsTop] = useState(true);
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
     <nav className={`fixed top-0 inset-x-0 z-50  ${isTop ? '' : 'shadow-1 bg-white'}`} >
     <Navbar /></nav>    
         <HeroBanner />
              <About />
              <Features />
              <Plans />
              <Download />
              <Footer />
    </>
  )
}

export default Werugo