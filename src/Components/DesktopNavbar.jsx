import { Link } from "react-router-dom";



const DesktopNavbar = () => {



    return(
        <div className=" switchDesktopNavbar w-[100%] bg-background border-b border-white10 h-[72px] sticky top-0 z-50 px-[55px]">


            {/* container */}
            <div className=" w-full flex justify-between items-center text-xl">


                {/* NAADH INNOVATION NAME */}
                <h1>NAADH Innovation</h1>



                {/* routes container */}
                <div className=" flex justify-between w-[28rem] text-lg"> 
                    <Link to={"/"}>Home</Link>
                    <Link to={"/workshop"}>Workshops</Link>
                    <Link to={"/stemlab"}>STEMLab</Link>
                    <Link to={"/gallery"}>Gallery</Link>
                    <Link to={"/contactus"}>Contact</Link>
                </div>



                {/* proudly made in India */}
                <h1 className="">Proudly build in India</h1>
            </div>
            
        </div>
    );
}


export default DesktopNavbar