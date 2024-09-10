import React from 'react'
import Image from 'next/image';
import { ModeToggle } from '../atoms/mode-toggle'
import Logo from "@/app/asssets/badminton.png" ;
const Header = () => {
  return (
    <div className='w-full backdrop-blur bg-white py-4 dark:bg-black'>
        <div className='lg:max-w-4xl mx-auto px-5 flex justify-between items-center'>
          <div className='flex items-center gap-x-1'>
            <h1 className='font-bold lg:text-3xl text-2xl dark:text-white text-black'>scoreboards</h1>
            <Image src={Logo} alt="Logo" width={50} height={50} />
          </div>
            <ModeToggle/>
        </div>
    </div>
  )
}

export default Header