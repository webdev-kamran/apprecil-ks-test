"use client"
import React, { ReactNode, useState } from 'react';
import { IoIosClose } from "react-icons/io";
import Image from 'next/image'
import Link from 'next/link';
import Lottie from 'lottie-react';
import logo from '@/app/assets/werugo/lotties/logo_animation.json'
interface DrawerProps {
    isOpen: boolean;
    onClose: () => void;
    children: ReactNode;
}


const Drawer: React.FC<DrawerProps> = ({ isOpen, onClose, children }) => {
    return (
        <div
            className={`fixed inset-0 z-50 transform lg:hidden ${isOpen ? 'translate-x-0' : '-translate-x-full'
                } transition-transform duration-300 ease-in-out`}
        >
            <div className="fixed inset-0 bg-black bg-opacity-50" onClick={onClose}></div>
            <div className="relative bg-white w-80 h-full shadow-xl mr-auto">
                <div className="flex items-center justify-between w-full p-4">
                    <Link href="#home">
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
              className='w-9 h-9'
            />
            <h1 className='font-bold text-[30px] leading-[150%]'>Werugo</h1>
          </div>
                    </Link>
                    <button onClick={onClose} className='-mr-3'>
                        <IoIosClose size={32} />
                    </button>
                </div>
                <div className="p-4 pt-0">
                    {children}
                </div>
            </div>
        </div>
    );
};

export default Drawer;
