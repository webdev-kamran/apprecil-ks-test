"use client"
import React, { ReactNode, useState } from 'react';
import { IoIosClose } from "react-icons/io";
import Image from 'next/image'
import { Link } from "react-scroll";
// import brandlogo from '@/app/assets/audioshield/audioshield.svg'
import brandlogo from '@/app/assets/images/logo/brand_logo.svg'
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
                    <Link to="home">
                        <Image width={100} height={30}
                            src={brandlogo}
                            alt="logo"
                            className="cursor-pointer "
                        />
                    </Link>
                    <button onClick={onClose} className='mr-3'>
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
