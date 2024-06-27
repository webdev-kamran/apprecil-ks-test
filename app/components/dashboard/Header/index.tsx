"use client"
import { useState, useRef, useEffect } from 'react'
 
import { HiViewGridAdd, HiViewGrid, HiMenu } from 'react-icons/hi'

import Logo from '@/app/assets/dashboard/logo-dashboard.svg'
import Image from 'next/image'
import Link from 'next/link'
 
 
 
export default function Header() {
   
   
  return (

    <div className='max-w-screen-wrap mx-auto relative px-4 w-full'>
      <div className="flex items-center gap-6 justify-between py-5">

       <Link href="/">
          <Image
            className="object-cover  "
            src={Logo}
            width={180}
            height={24}
            loading="eager"
            alt=" "
          />
        </Link>

  

        <Link
              href="https://dash.apprecial.com"
              target="_blank"
              rel="noopener noreferrer"
              className='rounded-xl shadow border-2 border-dbprimary text-dbprimary  font-semibold leading-snug flex gap-2 py-2 px-4 items-center justify-center hover:text-white ease-in-out duration-300 hover:bg-dbprimary text-lg'
            >
              <svg viewBox="0 0 17 17" fill="currentColor" className='w-4' >
                <path d="M7.39367 2.42495V5.38242C7.39367 5.97069 7.15998 6.53488 6.74401 6.95085C6.32803 7.36683 5.76385 7.60052 5.17557 7.60052H2.2181C1.62983 7.60052 1.06564 7.36683 0.649667 6.95085C0.233692 6.53488 0 5.97069 0 5.38242V2.42495C0 1.83667 0.233692 1.27249 0.649667 0.85651C1.06564 0.440535 1.62983 0.206843 2.2181 0.206843H5.17557C5.76385 0.206843 6.32803 0.440535 6.74401 0.85651C7.15998 1.27249 7.39367 1.83667 7.39367 2.42495ZM14.3683 0.206787H11.4109C10.8226 0.206787 10.2584 0.440479 9.84242 0.856454C9.42644 1.27243 9.19275 1.83661 9.19275 2.42489V5.38236C9.19275 5.97064 9.42644 6.53482 9.84242 6.95079C10.2584 7.36677 10.8226 7.60046 11.4109 7.60046H14.3683C14.9566 7.60046 15.5208 7.36677 15.9368 6.95079C16.3527 6.53482 16.5864 5.97064 16.5864 5.38236V2.42489C16.5864 1.83661 16.3527 1.27243 15.9368 0.856454C15.5208 0.440479 14.9566 0.206787 14.3683 0.206787ZM5.17582 9.39924H2.21835C1.63007 9.39924 1.06589 9.63293 0.649912 10.0489C0.233938 10.4649 0.000245246 11.0291 0.000245246 11.6173V14.5748C0.000245246 15.1631 0.233938 15.7273 0.649912 16.1432C1.06589 16.5592 1.63007 16.7929 2.21835 16.7929H5.17582C5.76409 16.7929 6.32828 16.5592 6.74425 16.1432C7.16023 15.7273 7.39392 15.1631 7.39392 14.5748V11.6173C7.39392 11.0291 7.16023 10.4649 6.74425 10.0489C6.32828 9.63293 5.76409 9.39924 5.17582 9.39924ZM14.3683 9.39937H11.4109C10.8226 9.39937 10.2584 9.63306 9.84242 10.049C9.42644 10.465 9.19275 11.0292 9.19275 11.6175V14.5749C9.19275 15.1632 9.42644 15.7274 9.84242 16.1434C10.2584 16.5594 10.8226 16.793 11.4109 16.793H14.3683C14.9566 16.793 15.5208 16.5594 15.9368 16.1434C16.3527 15.7274 16.5864 15.1632 16.5864 14.5749V11.6175C16.5864 11.0292 16.3527 10.465 15.9368 10.049C15.5208 9.63306 14.9566 9.39937 14.3683 9.39937Z" />
              </svg>
              Dashboard

            </Link>
            </div>

      </div>



 
 

   

  )
}