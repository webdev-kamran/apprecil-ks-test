"use client"
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import PlayBtn from '@/app/assets/audioshield/play-store.svg'
import DownloadThumb from '@/app/assets/audioshield/download-app-4x.png'
function Download() {
    return (
        <section id="download" className="pt-20 md:pt-24 xl:pt-0 relative flex flex-col justify-end md:min-h-[calc(100vh-52px)]  ">
            <div className='space-y-3'>
                <h2 className="text-4xl font-bold text-center">Download AudioShield Today!</h2>
                <div className='flex justify-center pt-10'>
                    <Link href={''} >
                        <Image src={PlayBtn} alt='' width={200} height={50} onContextMenu={(e) => {
            e.preventDefault(); // prevent the default behaviour when right clicked
            console.log("Right Click");
          }} draggable={false}/>
                    </Link>
                </div>
                <div className='flex justify-center -mt-10'>
                    <Image src={DownloadThumb} alt='' width={700} height={700} className='w-full max-w-4xl h-auto' onContextMenu={(e) => {
                        e.preventDefault(); // prevent the default behaviour when right clicked
                        console.log("Right Click");
                    }} draggable={false} />
                </div>

            </div>

        </section>
    )
}

export default Download