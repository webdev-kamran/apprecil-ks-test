"use client"
import { TbCheck } from 'react-icons/tb'
import Lottie from 'lottie-react';
import Dashboard_take_control_LOTTIE from '../../icons/Dashboard_take_control_LOTTIE.json'
import Dashboard_centralisation_animation from '../../icons/Dashboard_centralisation_animation.json'
const list = [
    "Up to 5 devices protected", "Up to 5 devices protected", "Up to 5 devices protected", "Up to 5 devices protected",
]
export default function Tab4() {
    return (
        <>
            <div className="relative py-10 md:py-28">
                <div className='max-w-screen-wrap mx-auto relative px-4 w-full'>
                    <div className="space-y-10">
                        {/*Apprecial intro*/}
                        <div className="space-y-5 max-w-5xl mx-auto ">
                            <h2 className="text-center text-zinc-800 text-4xl font-bold ">Remote <span className="text-dbprimary">Access</span></h2>
                            <p className="text-[#011D41]/70 text-center font-medium leading-relaxed text-lg">Through the Dashboard, you have the power to remotely access Apprecial services from anywhere in the world. Simply navigate to manage your account and more with ease.</p>
                        </div>


                        {/* Blocks */}
                        <div className="flex flex-col gap-10">
                            <div className="bg-white rounded-3xl shadow p-5 lg:p-10 flex flex-col sm:flex-row items-center gap-10 xl:gap-20">
                                <div className="w-80">
                                   <Lottie
                                                    animationData={Dashboard_take_control_LOTTIE}
                                                    loop
                                                    autoplay
                                                    rendererSettings={
                                                        {
                                                            preserveAspectRatio: "xMidYMid slice"
                                                        }
                                                    }
                                                    className='max-w-md w-full  mx-auto -mb-10'
                                                />
                                </div>
                                <div className="space-y-3 max-w-2xl text-center sm:text-left 2xl:pr-20">
                                    <h3 className="text-zinc-800 font-medium capitalize text-2xl">Take Control</h3>
                                    <p className="text-[#011D41]/70 font-medium leading-relaxed text-lg">Being in control of your device(s) has never been easier. The Dashboard eliminates stress and complications with easy access and a user-friendly interface.</p>
                                </div>
                            </div>

                            <div className="bg-white rounded-3xl shadow p-5 lg:p-10 flex flex-col sm:flex-row-reverse items-center gap-10 xl:gap-20">
                                <div className="w-80">
                                

<Lottie
                                                    animationData={Dashboard_centralisation_animation}
                                                    loop
                                                    autoplay
                                                    rendererSettings={
                                                        {
                                                            preserveAspectRatio: "xMidYMid slice"
                                                        }
                                                    }
                                                    className='max-w-md w-full  mx-auto -mb-10'
                                                />




                                </div>
                                <div className="space-y-3 max-w-2xl text-center sm:text-left 2xl:pr-20">
                                    <h3 className="text-zinc-800 font-medium capitalize text-2xl">Centralisation</h3>
                                    <p className="text-[#011D41]/70 font-medium leading-relaxed text-lg">Enjoy peace of mind through a centralised approach, which allows you to stay updated anywhere, at any time.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>


    )
}