import "@fontsource/inter";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Mobile/Home";
import MobileTabNavbar from "./Components/MobileTabNavbar";

function App() {


  return (
    <div>
      <MobileTabNavbar/>

      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  )
}

export default App
