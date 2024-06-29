import { Outlet } from 'react-router'
import { Toaster } from 'react-hot-toast'
import Navbar from './nav-foot/Navbar'
import Footer from './nav-foot/Footer'
import './App.css'
import "./media-size.css"

export default function App() {

  return (
    <>

      <Toaster
        position="bottom-center"
        reverseOrder={false}
      />

      <Navbar />

      <main id="mainBox">
        <Outlet></Outlet>
      </main>

      <Footer />

    </>
  )
}