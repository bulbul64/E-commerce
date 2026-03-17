
import React from 'react'
import Navbar from '../components/common/Navbar'
import Footer from '../components/common/Footer'
import { Outlet } from 'react-router-dom'

export default function MainLayout() {
  return (
    <div className="bg-gray-100 h-screen">
      <div className="bg-gray-50 shadow-sm sticky top-0 z-50 ">
        <Navbar />
      </div>
      <div className="container mx-auto">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
