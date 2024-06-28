"use client"
import { useState, useEffect } from 'react';
import Navbar from "@/app/components/AudioShield/Navbar";
import Footer from "@/app/components/AudioShield/Footer";
import Hero from "@/app/components/AudioShield/Hero";
import About from "@/app/components/AudioShield/About";
import Plans from "@/app/components/AudioShield/Plans";
import Download from "@/app/components/AudioShield/Download";
function AudioShield() {
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
      <h1 className="sr-only">AutoShield</h1>
      <nav className={`fixed top-0 inset-x-0 z-50  ${isTop ? '' : 'shadow-1 bg-white'}`} >
        <Navbar /></nav>
      <main >
        <Hero />
        <About />
        <Plans />
        <Download />
      </main>
      <Footer />
    </>
  )
}

export default AudioShield