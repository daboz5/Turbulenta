import { Outlet } from 'react-router'
import { Toaster } from 'react-hot-toast'
import useDragonStore from './useDragonStore'
import Navbar from './nav-ban-foot/Navbar'
import Footer from './nav-ban-foot/Footer'
import Banner from './nav-ban-foot/Banner'
import { useEffect } from 'react'
import "./media-size.css"

export default function App() {

  const { setPageWidth } = useDragonStore();

  useEffect(() => {
    setPageWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [])

  const handleResize = () => {
    setPageWidth(window.innerWidth);
  }

  return (
    <>

      <Toaster
        position="bottom-center"
        reverseOrder={false}
      />

      <Navbar />
      <Banner />

      <main id="mainBox">
        <Outlet></Outlet>
      </main>

      <Footer />

    </>
  )
}