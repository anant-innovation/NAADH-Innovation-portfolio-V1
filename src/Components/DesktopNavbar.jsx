import { Link,useLocation } from "react-router-dom";



const DesktopNavbar = () => {


    // get current location
    const currentLocation = useLocation()



    return(
        <div className=" switchDesktopNavbar w-[100%] bg-background border-b border-white10 h-[72px] sticky top-0 z-50 px-[55px]">


            {/* container */}
            <div className=" w-full flex justify-between items-center 
            
            lg:text-sm
            lg-1:text-lg
            2xl:text-xl">


                {/* NAADH INNOVATION NAME */}
                <Link to={"/"} className=" custom-cursor hover:text-white80"
                >NAADH Innovation</Link>



                {/* routes container */}
                <div className=" flex justify-between  
                
                lg:text-sm lg:w-[22rem]
                lg-1:text-base lg-1:w-[24rem]
                2xl:text-lg 2xl:w-[28rem]"> 

                    <Link
                    className={`custom-cursor ${currentLocation.pathname === "/" && "text-orange"}`}
                    to={"/"}>Home</Link>

                    <Link
                    className={`custom-cursor ${currentLocation.pathname === "/workshop" && "text-orange"}`}
                    to={"/workshop"}>Workshops</Link>

                    <Link
                    className={`custom-cursor ${currentLocation.pathname === "/stemlab" && "text-orange"}`}
                    to={"/stemlab"}>STEMLab</Link>

                    <Link
                    className={`custom-cursor ${currentLocation.pathname === "/gallery" && "text-orange"}`}
                    to={"/gallery"}>Gallery</Link>

                    <Link
                    className={`custom-cursor ${currentLocation.pathname === "/contactus" && "text-orange"}`}
                    to={"/contactus"}>Contact</Link>
                </div>



                {/* proudly made in India */}
                <h1 className="">Proudly build in India</h1>
            </div>
            
        </div>
    );
}


export default DesktopNavbar