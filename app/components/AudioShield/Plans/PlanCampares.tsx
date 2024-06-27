"use client"
import { useState } from 'react'
import { TbInfoCircle } from 'react-icons/tb'
import Popup from 'reactjs-popup';
import Image from 'next/image';
const PlanCampares = ({ plan } :any) => {

    const [opentooltip, setOpenTolltip] = useState(false);

    return (
        <>
            <section id="plans" className="pt-16 md:pt-24 xl:pt-10 px-5 relative min-h-screen flex flex-col justify-center ">
                <h2 className="sr-only">Plans</h2>
                <div className="max-w-6xl mx-auto w-full shrink-0">
                    <div className='bg-white shadow-1 rounded-lg p-4 overflow-auto'>
                        <div className="min-w-[900px]">
                        <div className="flex gap-5 border-b border-black/10 lg:border-none">
                            <div className="w-[40%] gap-2 flex flex-col items-start">
                                <h3 className="text-black text-2xl xl:text-4xl font-bold capitalize leading-[45.60px]">{plan.title}</h3>
                                <p className='text-asgray-2/70'>{plan.subtitle}</p>
                            </div>
                            {plan.plans.map((item:any, index:any) =>
                                <div key={index} className="w-[30%] bg-[#F9F9F9] p-3 pt-5 rounded-t-xl">
                                    <div className='flex gap-2 justify-center items-start'>
                                        <Image src={item.icon} alt="plans icons" height={66} width={66} className='w-14 h-14 ' onContextMenu={(e:any) => {
            e.preventDefault(); // prevent the default behaviour when right clicked
            console.log("Right Click");
          }} draggable={false} />
                                        <div className='flex flex-col gap-2  pt-1'>
                                            <h3 className="xl:text-lg font-medium uppercase xl:leading-none leading-none text-asgray-2">
                                                {item.title}
                                            </h3>
                                            <p className='text-2xl xl:text-3xl font-bold text-asgray leading-none xl:leading-none'>{item.price}<small className='text-sm font-medium block xl:inline '>/{item.term}</small></p>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>


                        {plan.features.map((data:any, index:any) =>
                            <div key={index} className="flex gap-5 border-b border-black/10 lg:border-none" onClick={() => setOpenTolltip(index)}>
                                <Popup
                                    trigger={open => (
                                        <div className="w-[40%] flex gap-2 items-center cursor-pointer"><p className={`xl:text-lg font-medium ${open ? 'text-asprimary' : 'text-black'} `}>{data.feature}</p>
                                            <button className="button" ><TbInfoCircle className={`z-20 relative ${open ? 'text-asprimary' : 'text-[#BCBCBC]'}`} size="20" /></button>
                                        </div>
                                    )
                                    }
                                    position={['top center', 'bottom right', 'bottom left']}
                                    closeOnDocumentClick
                                >
                                    <p>{data.tooltip}</p>
                                </Popup>
                                <div className="w-[30%] bg-[#f9f9f9] p-3 flex justify-center items-center">{data.freePlan}</div>
                                <div className="w-[30%] bg-[#f9f9f9] p-3 flex justify-center items-center">{data.proPlan}</div>
                            </div>



                        )}

                        <div className="flex gap-5">
                            <div className="w-[40%] gap-2 flex flex-col items-start pt-3">
                                 
                                <p className='text-asgray-2/70'>{plan.note}</p>
                            </div>
                            {plan.plansDiscount.map((item:any, index:any) =>
                                <div key={index} className="w-[30%] bg-[#F9F9F9] p-3 py-5 rounded-b-xl">
                                    <div className='flex gap-2 justify-center items-start'>
                                        
                                      
                                             <div className='flex flex-col gap-2'>
                                            <p className='text-2xl xl:text-3xl font-bold text-asgray leading-none xl:leading-none'>{item.price}<small className='text-sm font-medium  '>{item.term}</small> <small className='text-sm line-through opacity-80 font-medium block xl:inline '>{item.actualPrice}</small></p> 
                                            {item.saving && 
                                            <div className='flex justify-center'><div className='bg-asprimary-2 rounded-full py-1.5 px-4 text-white text-sm'>Saving {item.savingValue}</div></div>
                                        }
                                             </div>
                                    </div>
                                </div>
                            )}
                        </div>
</div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default PlanCampares
