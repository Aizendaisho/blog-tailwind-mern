import React from 'react'
import background from "../../assets/img/background.jpeg"

export default function Header() {
  return (
    <div> 
        <div className="headers flex flex-col items-center text-gray-100 text-3xl text-center">
            <span className='absolute'>React & Node</span>
            <span className='absolute'>Blog</span>

        </div>
        <img src={background} alt="bg" className=' object-fill w-full h-full' />
    </div>
  )
}
