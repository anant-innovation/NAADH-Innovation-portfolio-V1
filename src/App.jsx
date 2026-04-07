import "@fontsource/inter";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Mobile/Home";
import MobileTabNavbar from "./Components/MobileTabNavbar";
import Gallery from "./Pages/Mobile/Gallery";
import Workshop from "./Pages/Mobile/Workshop";
import StemLAB from "./Pages/Mobile/StemLAB";
import ContactUs from "./Pages/Mobile/ContactUs";

function App() {


  return (
    <div>
      <MobileTabNavbar/>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/workshop" element={<Workshop />} />
        <Route path="/stemlab" element={<StemLAB />} />
        <Route path="/contactUs" element={<ContactUs />} />
      </Routes>
    </div>
  )
}

export default App
