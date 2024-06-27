"use client"
import React, { useRef, useEffect, useState } from "react";
import Footer from "@/app/components/Footer"
import Header from "@/app/components/dashboard/Header"
import Hero from "@/app/components/dashboard/Hero"
import Tab0 from "@/app/components/dashboard/Tabs/Tab0"
import Tab1 from "@/app/components/dashboard/Tabs/Tab1"
import Tab2 from "@/app/components/dashboard/Tabs/Tab2"
import Tab3 from "@/app/components/dashboard/Tabs/Tab3"
import Tab4 from "@/app/components/dashboard/Tabs/Tab4"
import topLeft from "@/app/assets/dashboard/top-left-elips.svg"
import { TbChevronUp, TbChevronDown } from "react-icons/tb"
import Image from "next/image";
 
const tab = [
    "Overview", "Apprecial Accounts", "Service Profiles", "Support & Feedback", "Remote Access"
  ]
function Dashboard() {
    const [currentTab, setCurrentTab] = useState(0);
    const [tabDropdown, setTabDropdown] = useState(false);
  return (
    <>

    <div className="min-h-screen flex flex-col ">
      <Image
        className="object-cover absolute top-0 left-0 w-1/3 xl:w-auto"
        src={topLeft}
        width={600}
        height={600}
        loading="eager"
        alt=" "
      />


      <Header />
      <main className="flex-1 space-y-5">
        <div className="max-w-screen-wrap px-4 mx-auto relative flex-1 w-full pb-20" >
          <Hero />
  </div>
        <div className="bg-neutral-50 relative"> 
        <div className="absolute -top-16 inset-x-0 mt-3 px-4 z-40" id="tabs">
            <button onClick={() => setTabDropdown(!tabDropdown)} className="flex md:hidden w-full rounded-md bg-dbprimary px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-dbprimary-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-dbprimary justify-between items-center"><span>Tabs List</span>{tabDropdown ? <TbChevronUp size="20" /> : <TbChevronDown size="20" />}</button>
            <div className={`flex-col gap-3 py-3 bg-neutral-100 rounded-lg mt-2 lg:gap-11 md:py-0 md:bg-transparent md:rounded-none md:mt-0 md:flex-row justify-center  md:flex ${tabDropdown ? "flex" : "hidden"}`} onClick={() => setTabDropdown(false)} >
              {/* Tabs */}
              {tab.map((item: any, index: any) => {
                return (
                  <>
                    <button key={index} onClick={() => setCurrentTab(index)} className={`border-b-2 hover:border-dbprimary text-center hover:text-dbprimary lg:text-lg  capitalize pb-2 ${currentTab === index ? "border-transparent md:border-dbprimary text-dbprimary font-bold" : "text-zinc-800 border-transparent font-medium  "}`}>{item}</button>
                  </>
                );
              })}
            </div>
          </div>



          <div className="relative overflow-hidden">

            {currentTab === 0 ? (
              <Tab0 />
            ) :
              currentTab === 1 ? (
                <Tab1 />
              )
                :
                currentTab === 2 ? (
                  <Tab2 />
                )
                  :
                  currentTab === 3 ? (
                    <Tab3 />
                  )
                    :
                    currentTab === 4 ? (
                      <Tab4 />
                    )
                      :
                      null}
          </div>
        </div>

      </main>

      <Footer />
    </div>

  </>
  )
}

export default Dashboard