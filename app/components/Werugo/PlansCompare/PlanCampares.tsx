"use client"
import { useState } from 'react'
import { TbInfoCircle } from 'react-icons/tb'
import Popup from 'reactjs-popup';
import Image from 'next/image';
const PlanCampares = ({ plan }: any) => {

    const [opentooltip, setOpenTolltip] = useState(false);

    return (
        <>
            <div className="w-[755px] min-w-[calc(100%-45px)] lg:w-[1150px] shrink-0">
                <div className="flex gap-5 border-b border-black/10 lg:border-none">
                    <div className="w-[30%] flex items-center">
                        <h3 className="text-black text-2xl xl:text-4xl font-bold capitalize leading-[45.60px]">{plan.title}</h3>
                    </div>




                    {plan.plans.map((item: any, index: any) =>
                        <div key={index} className="w-[23.333%] bg-[#F9F9F9] p-3 pt-5 rounded-t-xl">
                            <div className='flex gap-2 justify-center items-start'>
                                <Image src={item.icon} alt="plans icons" height={66} width={66} className='w-14 h-14 xl:h-auto xl:w-auto' onContextMenu={(e) => {
                                    e.preventDefault(); // prevent the default behaviour when right clicked
                                    console.log("Right Click");
                                }} draggable={false} />
                                <div className='flex flex-col gap-2  pt-1'>
                                    <h3 className="xl:text-lg font-medium uppercase leading-none text-[#011D41]">
                                        {item.title}
                                    </h3>
                                    <p className='text-2xl xl:text-3xl font-bold text-[#39AE56] leading-none'>{item.price}<small className='text-sm font-medium block xl:inline '>/{item.term}</small></p>
                                </div>
                            </div>
                        </div>
                    )}
                </div>


                {plan.features.map((data: any, index: any) =>

                    <div key={index} className="flex gap-5 border-b border-black/10 lg:border-none" onClick={() => setOpenTolltip(index)}>

                        <Popup
                            trigger={open => (
                                <div className="w-[30%] flex gap-2 items-center cursor-pointer"><p className={`xl:text-lg font-medium ${open ? 'text-[#39AE56]' : 'text-black'} `}>{data.feature}</p>
                                    <button className="button" ><TbInfoCircle className={`z-20 relative ${open ? 'text-[#39AE56]' : 'text-[#BCBCBC]'}`} size="20" /></button>
                                </div>
                            )
                            }
                            position={['top center', 'bottom right', 'bottom left']}
                            closeOnDocumentClick
                        >
                            <p>{data.tooltip}</p>
                        </Popup>


                        <div className="w-[23.333%] bg-[#f9f9f9] p-3 flex justify-center items-center">{data.basicplan}</div>
                        <div className="w-[23.333%] bg-[#f9f9f9] p-3 flex justify-center items-center">{data.premiumplan}</div>
                        <div className="w-[23.333%] bg-[#f9f9f9] p-3 flex justify-center items-center">{data.familyplan}</div>
                    </div>



                )}
            </div>
        </>
    )
}

export default PlanCampares
