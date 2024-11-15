import React from 'react'
import { assets } from '../assets/assets'

const Header = () => {
  return (
    <div className='flex flex-col md:flex-row flex-wrap bg-primary rounded-lg px-6 md:px-10 lg:px-20 '>

        {/* ---- Left Side ---- */}
        <div className='md:w-1/2 flex flex-col items-start justify-center gap-4 py-10 m-auto md:py-[10vw] md:mb-[-30px]'>
            <p className='text-3xl md:text-4xl lg:text-5xl text-white font-semibold leading-tight md:leading-tight lg:leading-tight'>
                Selcet your favourite food <br />with our wedsites
            </p>
            <div className='flex flex-col md:flex-row items-center gap-3 text-white text-sm font-light ' >
                <p>Simply browse through our list, <br className='hidden sm-block'/>And choose a food according to your taste</p>
            </div>
            <button className='bg-orange-500 p-3 rounded-full hover:bg-yellow-600 cursor-pointer'>Create Account</button>
        </div>
      
        {/* ---- Right Side ---- */}
        <div className='md:w-1/2 relative'>
            <img className='w-full md:absolute bottom-0 h-auto rounded-lg ' src={assets.header_img} alt="" />
        </div>
    </div>
  )
}
export default Header
