"use client"
import { TbCheck } from "react-icons/tb"
import serviceProfile from "@/app/assets/dashboard/service-profile-7.svg"
import Image from "next/image"
export default function Tab2() {
    return (
        <>
            <div className="relative md:pb-20">

                <div className="flex justify-center items-center absolute md:static ">
                    <Image
                        className="object-cover h-auto sm:w-full max-w-full md:max-w-4xl mx-auto static"
                        src={serviceProfile}
                        width={800}
                        height={800}
                        loading="eager"
                        alt=" "
                    />
                </div>
                <div className="md:absolute inset-0 flex items-end  md:bottom-10 pt-60 md:pt-0">
                    <div className="max-w-screen-wrap mx-auto relative px-4 w-full">
                        <div className="space-y-7 mx-auto max-w-screen-xl pb-10">
                            <h2 className="text-center text-[#1E232C] text-4xl font-bold ">Service Profiles</h2>
                            <p className="text-[#011D41]/70 text-center font-medium leading-relaxed text-lg">Simply having an Apprecial account doesn’t automatically grant you access to all Apprecial services. Your Apprecial account gives you instant access to our standard mobile apps. However, if you wish to use the web-based apps, you will be required to create a separate sub-profile. This is for added security and verification purposes to ensure the apps are only used by people of appropriate age. Once you’ve completed the verification and security checks, you can easily set up your profile for the specific product you intend to use.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>


    )
}