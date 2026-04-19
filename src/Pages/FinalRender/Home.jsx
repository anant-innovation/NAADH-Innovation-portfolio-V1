import { useState } from "react"
import D_Home from "../Desktop/D_Home"
import M_Home from "../Mobile/M_Home"




const Home = () => {


    const[screenSize, setScreenSize] = useState(window.innerWidth);

    console.log(screenSize);


    return (
        <>
        {
            screenSize >= 1024 ? <D_Home/> : <M_Home />
        }
            
            
        </>
    )
}

export default Home