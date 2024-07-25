import { useEffect } from 'react'
import { Toaster } from 'react-hot-toast'
import { Outlet } from 'react-router'
import useDragonStore from './useDragonStore'
import Navbar from './nav-ban-foot/Navbar'
import Footer from './nav-ban-foot/Footer'
import Banner from './nav-ban-foot/Banner'

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

      <span id="mainBox" className="flexCol">

        <Banner />

        <main>
          <Outlet></Outlet>
        </main>

      </span>

      <Footer />

    </>
  )
}