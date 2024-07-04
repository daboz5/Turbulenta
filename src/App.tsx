import { Outlet } from 'react-router'
import { Toaster } from 'react-hot-toast'
import Navbar from './nav-ban-foot/Navbar'
import Footer from './nav-ban-foot/Footer'
import Banner from './nav-ban-foot/Banner'
import "./media-size.css"

export default function App() {

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