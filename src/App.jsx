import "@fontsource/inter";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./Pages/Mobile/Home";
import MobileTabNavbar from "./Components/MobileTabNavbar";
import Gallery from "./Pages/Mobile/Gallery";
import Workshop from "./Pages/Mobile/Workshop";
import StemLAB from "./Pages/Mobile/StemLAB";
import ContactUs from "./Pages/Mobile/ContactUs";
import { useEffect } from "react";
import { AnimatePresence } from "framer-motion";


function App() {

  const currentLocation = useLocation()


  useEffect(() => {

    const timer = setTimeout(() => {

      window.scrollTo(0,0)
    }, 400)
    
    return () => clearTimeout(timer);

  }, [currentLocation])



  return (
    <div>
      <MobileTabNavbar />

      <AnimatePresence mode="wait">
        <Routes location={currentLocation} key={currentLocation.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/workshop" element={<Workshop />} />
          <Route path="/stemlab" element={<StemLAB />} />
          <Route path="/contactUs" element={<ContactUs />} />
        </Routes>
      </AnimatePresence>
    </div>
  )
}

export default App
