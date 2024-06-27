"use client"
import { TbCheck } from "react-icons/tb"
import shareIcon from "@/app/assets/dashboard/icons-share-ideas.svg"
import support from "@/app/assets/dashboard/support-bg.svg"
import Image from "next/image"
export default function Tab3() {
    return (
        <>
            <div className="relative ">


                <Image
                    className="object-cover h-auto w-full mx-auto absolute inset-0 xl:h-[80%] sm:static opacity-40 lg:opacity-100  "
                    src={support}
                    width={800}
                    height={800}
                    loading="eager"
                    alt=" "
                />
                <div className="sm:absolute inset-0 flex items-center justify-center py-10  ">
                    <div className="max-w-2xl mx-auto relative px-4 w-full sm:-mt-40">
                        <div className="space-y-5">
                            <Image
                                className="object-cover h-auto w-24 sm:w-auto mx-auto "
                                src={shareIcon}
                                width={60}
                                height={60}
                                loading="eager"
                                alt=" "
                            />
                            <h2 className="text-center text-zinc-800 text-3xl sm:text-4xl md:text-5xl font-bold ">Share Ideas & Contribute</h2>
                            <p className="text-[#011D41]/70 text-center font-medium leading-relaxed text-lg max-w-xl sm:px-14 mx-auto pt-5">If you are in need of support, you can log a ticket through the Dashboard. You are also welcome to share your ideas for new app features or suggestions for the current ones you believe can be improved. Voicing your opinion can get you great rewards and credits.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>


    )
}