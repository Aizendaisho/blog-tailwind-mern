import React from 'react'
import background from "../../assets/img/background.jpeg"

export default function Header() {
  return (
    <div> 
        <div className="headers flex flex-col items-center text-gray-200 text-3xl text-center">
            <span className='absolute z-10'>React & Node</span>
            <span className='absolute top-28 z-10 text-7xl font-mono '>Blog</span>
    
        </div>
        <img src={background} alt="bg" className=' object-fill w-full h-full' />
    </div>
  )
}
