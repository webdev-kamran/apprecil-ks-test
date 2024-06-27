"use client"
import bottomElips from '@/app/assets/dashboard/bottom-elips.svg'
import dashboardMobile from '@/app/assets/dashboard/dashboard_screen_mobile_new_v2.svg'
import dashboardScreen from '@/app/assets/dashboard/dashboard_screen-2.svg'
import Image from 'next/image'
export default function Tab0() {
    return (
        <>
        <div className="relative py-10 xl:py-0">
            <Image
                    className="object-cover absolute -bottom-20 left-1/2 -translate-x-1/2 opacity-10 "
                    src={bottomElips}
                    width={1000}
                    height={1000}
                    loading="eager"
                    alt=" "
                />
        
            <div className="relative flex justify-end ">
                

                <Image   onContextMenu={(e) => {
            e.preventDefault(); // prevent the default behaviour when right clicked
            console.log("Right Click");
          }}
                    className="object-cover relative lg:hidden w-5/6 sm:w-3/5 md:w-1/2 h-auto"
                    src={dashboardMobile}
                    width={1000}
                    height={600}
                    loading="eager"
                    alt=" "
                />
 
                <Image  onContextMenu={(e) => {
            e.preventDefault(); // prevent the default behaviour when right clicked
            console.log("Right Click");
          }}
                    className="object-cover relative hidden h-auto w-1/2 xl:w-2/3 2xl:w-1/2 lg:block "
                    src={dashboardScreen}
                    width={1200}
                    height={800}
                    loading="eager"
                    alt=" "
                />




            </div>
            <div className="md:absolute py-10 sm:py-20 md:pt-0 inset-0 z-10 flex justify-center items-center">
                <div className='max-w-screen-wrap mx-auto relative px-4 w-full'>
                    <div className="md:w-1/2 md:max-w-md space-y-7">
                        <h2 className="text-zinc-800 text-4xl font-bold ">About The <span className="text-dbprimary">Dashboard</span></h2>
                        <p className="text-[#011D41]/70 font-medium leading-relaxed text-lg">Unlock the full potential of Apprecial’s mobile-based services with our intuitive and feature-rich dashboard. It allows you to stay in control by providing remote access so you can easily manage your subscriptions, track account activity, or connect with our support team, all from one convenient location.</p>
                    </div>
                </div>
            </div>
            </div>
        </>


    )
}