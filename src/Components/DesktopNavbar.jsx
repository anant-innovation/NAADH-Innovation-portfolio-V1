import { Link,useLocation } from "react-router-dom";



const DesktopNavbar = () => {


    // get current location
    const currentLocation = useLocation()



    return(
        <div className=" switchDesktopNavbar w-[100%] bg-background border-b border-white10 h-[72px] sticky top-0 z-50 px-[55px]">


            {/* container */}
            <div className=" w-full flex justify-between items-center text-xl">


                {/* NAADH INNOVATION NAME */}
                <h1>NAADH Innovation</h1>



                {/* routes container */}
                <div className=" flex justify-between w-[28rem] text-lg"> 
                    <Link
                    className={currentLocation.pathname === "/" && "text-orange"}
                    to={"/"}>Home</Link>
                    <Link
                    className={currentLocation.pathname === "/workshop" && "text-orange"}
                    to={"/workshop"}>Workshops</Link>
                    <Link
                    className={currentLocation.pathname === "/stemlab" && "text-orange"}
                    to={"/stemlab"}>STEMLab</Link>
                    <Link
                    className={currentLocation.pathname === "/gallery" && "text-orange"}
                    to={"/gallery"}>Gallery</Link>
                    <Link
                    className={currentLocation.pathname === "/contactus" && "text-orange"}
                    to={"/contactus"}>Contact</Link>
                </div>



                {/* proudly made in India */}
                <h1 className="">Proudly build in India</h1>
            </div>
            
        </div>
    );
}


export default DesktopNavbar