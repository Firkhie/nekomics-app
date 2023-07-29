import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faInstagram, faWhatsapp, faLinkedin } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
  return (
    <>
    <footer className="flex-shrink-0 mt-16 w-full h-[205px] z-20 bg-[#1E1F1F] text-white font-bold">
      {/* DESKTOP */}
      <div className="hidden flex-row px-8 lg:px-32 items-center justify-center py-12 md:flex">
        <div className="flex items-center justify-start flex-1 gap-5 md:text-base text-sm">
          <a href="#">About</a>
          <a href="#" className="text-center">Privacy Policy</a>
          <a href="#" className="text-center">Terms of Service</a>
        </div>
        <div className="flex-1 flex items-center justify-center">
          <img src="src/assets/logo.png" className="h-6 md:h-7 cursor-pointer" />
        </div>
        <div className="flex flex-1 items-center justify-end gap-5">
          <p className="text-center md:text-base text-sm">Contact Us</p>
          <FontAwesomeIcon icon={faEnvelope} className='md:text-2xl text-xl cursor-pointer'/>
          <FontAwesomeIcon icon={faWhatsapp} className='md:text-2xl text-xl cursor-pointer'/>
          <FontAwesomeIcon icon={faLinkedin} className='md:text-2xl text-xl cursor-pointer'/>
          <FontAwesomeIcon icon={faInstagram} className='md:text-2xl text-xl cursor-pointer'/>
        </div>
      </div>
      {/* MOBILE */}
      <div className="flex flex-col px-6 md:px-8 py-6 md:hidden md:text-base text-sm">
        <div className="flex-1 flex items-center">
          <img src="src/assets/logo.png" className="h-6 md:h-7 mb-4 cursor-pointer"/>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <a href="#">About</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
          <div className="flex flex-1 items-center gap-3 sm:gap-5">
            <FontAwesomeIcon icon={faEnvelope} className='md:text-2xl text-xl cursor-pointer'/>
            <FontAwesomeIcon icon={faWhatsapp} className='md:text-2xl text-xl cursor-pointer'/>
            <FontAwesomeIcon icon={faLinkedin} className='md:text-2xl text-xl cursor-pointer'/>
            <FontAwesomeIcon icon={faInstagram} className='md:text-2xl text-xl cursor-pointer'/>
          </div>
        </div>
      </div>
      <hr className="border-white/10 mx-6 md:mx-8 lg:mx-32" />
      <p className="py-5 text-center text-zinc-500 font-normal md:text-base sm:text-sm text-xs">
        © 2023 Nekomics. All rights reserved.
      </p>
    </footer>
    </>
  )
}

export default Footer