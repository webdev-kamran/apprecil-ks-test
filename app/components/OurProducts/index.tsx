"use client"
import Dashboard from './Dashboard'
import Werugo from './Werugo'
import { useColorModeValue } from '@chakra-ui/react'
export default function OurProducts() {
  const isDark = useColorModeValue(false, true)
  return (
    <>
    <div className={`flex flex-col  ${isDark ? 'bg-[#272727]' : 'bg-[#FBFBFB]'}`} id="products">
      <Dashboard />      
    </div>
    <Werugo />
    </>
  )
}
