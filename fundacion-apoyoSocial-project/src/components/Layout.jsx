// src/components/Layout.jsx
import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <>
       <nav className="fixed top-0 left-0 w-full z-50 shadow-md">
        <Navbar />
      </nav>

      <div className="pt-20 min-h-screen"> {/* Espacio para contenido debajo del navbar */}
        <Outlet />
      </div>

      <Footer />
    </>
  )
}

export default Layout
