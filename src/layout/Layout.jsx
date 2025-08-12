import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const Layout = ({children}) => {
  return (
    <div className="h-screen flex flex-col">
      <Navbar/>
        <main> {children} </main>
      <Footer/>
    </div>
)
}

export default Layout;
