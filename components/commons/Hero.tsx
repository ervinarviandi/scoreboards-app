import React from 'react'
import { HeroHighlight } from "@/components/ui/hero-highlight";
import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa6";
import { LuTimerReset } from "react-icons/lu";
import SparklesText from '../magicui/sparkles-text';


const Hero = () => {

    
  const [count, setCount] = useState(0)
  const [counts, setCounts] = useState(0)
  const [set, setSet ] = useState(0)


function handleDecrement () {
  setCount(count - 1)
  // checkCount()
}

function handleIncrement () {
  setCount(count + 1)
  // checkCount();
}


function handleDecrements () {
  setCounts(counts - 1)
  // checkCount()
}

function handleIncrements () {
  setCounts(counts + 1)
  // checkCount();
}

// setCount babak
function handlescore () {
  setSet(set + 1)
  // checkCount()
}

function handleInscore () {
  setSet(set - 1)
  // checkCount();
}


function reset () {
    setCount(0)
    setCounts(0)
    setSet(0)
  }





  return (
    <HeroHighlight className="w-full   ">
         <button className="p-4 rounded-full bg-rose-500 backdrop-blur z-50  text-lg flex items-center gap-x-2  bottom-16 fixed right-5" onClick={reset}><LuTimerReset size={20} className="dark:text-white text-black "/></button>
      <div className="lg:max-w-3xl mx-auto px-5">

      {/* <div className='flex justify-center item-center gap-x-2'>
      </div> */}
        <SparklesText text="Scoreboards" className='text-center dark:text-white text-black lg:text-6xl text-4xl' />
        <div className="text-center max-w-xs mx-auto lg:text-5xl font-bold text-2xl lg:mt-16 mt-10  dark:text-gray-200 text-black">
          
          <div className="p-2 lg:text-2xl text-xl bg-teal-500 rounded-xl font-old-standard">
          Set : {set}
          </div>

        
          </div>
        <div className="flex itens-center justify-center gap-x-2  max-w-2xl mx-auto mt-5">
        <button className=" dark:bg-[#8745fa] bg-[#8745fa] p-3 rounded-lg" onClick={handlescore}><FaPlus size={20} className="dark:text-white text-black "/></button>
        <button className=" dark:bg-[#8745fa] bg-[#8745fa] p-3 rounded-lg" onClick={handleInscore}><FaMinus size={20} className="dark:text-white text-black "/></button>
        </div>


        <div className='max-w-sm mx-auto flex items-center justify-evenly gap-2 mt-10'>
        <input type="text" className='font-bold text-2xl px-3 py-2 w-28 rounded-lg dark:bg-gray-300 bg-gray-200  text-black font-flavors text-center' />
        <span className='font-bold dark:text-white text-black'>VS</span>
        <input type="text" className='font-bold text-2xl px-3 py-2 w-28 rounded-lg dark:bg-gray-300 bg-gray-200  text-black font-flavors text-center' />
        </div>
        <div className="flex items-center justify-center gap-x-16 mt-5 ">
          
        <div >
          
        <div className="lg:text-8xl text-7xl lg:h-36 lg:w-36 h-24 w-24 bg-gray-200 text-black  text-center rounded-lg  font-flavors place-content-center font-bold justify-center">{count}</div>
        <div className="mt-7 flex items-center justify-center gap-x-2">
          <button onClick={handleIncrement} className="bg-amber-500 p-3 rounded-xl"><FaPlus size={20} className=" rounded-lg dark:text-gray-200 text-black" /></button>
          <button onClick={handleDecrement} className="bg-amber-500 p-3 rounded-xl"  >< FaMinus size={20} className=" rounded-lg dark:text-gray-200 text-black"/></button>
        </div>
        </div>
        
        <div>
         <div className="lg:text-8xl text-7xl lg:h-36 lg:w-36 h-24 w-24 bg-gray-200 text-black place-content-center text-center rounded-lg font-bold font-flavors">{counts}</div>
        <div className="mt-7 flex items-center justify-center gap-x-2 ">
          <button onClick={handleIncrements} className="bg-amber-500 p-3 rounded-xl"><FaPlus size={20} className="  dark:text-white  text-black  " /></button>
          <button onClick={handleDecrements} className="bg-amber-500 p-3 rounded-xl" >< FaMinus size={20} className=" rounded-lg dark:text-white  text-black"/></button>
        </div>
        </div>
        </div>
      </div>
    </HeroHighlight>
  )
}

export default Hero