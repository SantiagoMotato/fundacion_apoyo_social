// src/components/Footer.jsx
import React from 'react'
import { FaLocationDot } from "react-icons/fa6"

function Footer() {
  return (
    <footer className='w-full h-full pt-5 bg-white border-t border-gray-200'>
      <div className='flex flex-col justify-center items-center w-full h-full text-sm sm:text-base gap-3 px-4'>
        <div className='w-24 h-24'>
          <img src="/images/apoyoSocial.jpg" alt="Logo Fundación Apoyo Social" className='w-full h-full object-contain' />
        </div>
        <p className='text-gray-500 text-center py-5'>
          © Copyright 2025 | Todos los derechos reservados
        </p>
      </div>
    </footer>
  )
}

export default Footer
