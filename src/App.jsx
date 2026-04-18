import "@fontsource/inter";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./Pages/FinalRender/Home";
import Gallery from "./Pages/FinalRender/Gallery";
import Workshop from "./Pages/FinalRender/Workshop";
import StemLAB from "./Pages/FinalRender/StemLab";
import ContactUs from "./Pages/FinalRender/ContactUs";
import MobileTabNavbar from "./Components/MobileTabNavbar";
import { useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import DesktopNavbar from "./Components/DesktopNavbar";


function App() {

  const currentLocation = useLocation()


  useEffect(() => {

    const timer = setTimeout(() => {

      window.scrollTo(0, 0)
    }, 450)

    return () => clearTimeout(timer);

  }, [currentLocation])



  return (
    <div className="">
      <MobileTabNavbar />
      <DesktopNavbar />

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
