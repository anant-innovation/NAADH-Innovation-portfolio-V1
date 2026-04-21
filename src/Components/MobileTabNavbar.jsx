import gsap from "gsap";
import { useRef,useState } from "react";
import { Link, useLocation } from "react-router-dom";




const MobileTabNavbar = () => {

    const[mobileDrawerState, setMobileDrawerState] = useState(true);
    const mobileDrawer = useRef();
    const mobileDrawerGhost = useRef();
    const hamburger1 = useRef();
    const hamburger2 = useRef();


    // the function controlling the state of the drawer
    const mobileDrawerStateUpdate = () => {


        setMobileDrawerState(prev => !prev);

        if(mobileDrawerState){

            gsap.to(mobileDrawer.current,{

                width:200,
                borderLeftWidth:"1px",
                borderLeftColor:"#616161",
            })
            // console.log("true");


            gsap.to(mobileDrawerGhost.current,{
                width:"100%"
            })

            gsap.to(hamburger1.current,{

                rotate:-45,
                backgroundColor:"black",
                transformOrigin:"center"
            })

            gsap.to(hamburger2.current, {

                width:"100%",
                y:"-11px",
                rotate:45,
                backgroundColor:"black",
            })
        }





        else{
            gsap.to(mobileDrawer.current,{

                width:0,
                borderLeftWidth:"0px",
            })

            gsap.to(mobileDrawerGhost.current,{
                width:"0%",
                duration:0
            })

            gsap.to(hamburger1.current,{

                rotate:0,
                backgroundColor:"#e17100",
                transformOrigin:"center"
            })


            gsap.to(hamburger2.current, {

                width:"50%",
                y:"0",
                rotate:0,
                backgroundColor:"#e17100",
            })
        }
    }


    const currentLocation = useLocation()
 
    
    




    return (
        <div className=" w-[100%] h-[4rem] bg-background flex items-center justify-between p-[10px] border-b border-white10 
         sticky top-0 z-40
         
         xs2:px-[20px]
         sm:px-[30px]
         switchMobileNavbar">


            {/* NAADH Innovation left side */}
            <h1 className=" text-sm font-semibold">NAADH Innovation</h1>



            {/* Two orange lines to open the menu */}
            <div className=" flex flex-col w-[2rem] h-[2rem] justify-evenly items-end z-50 "
            onClick={mobileDrawerStateUpdate}
            >

                <div ref={hamburger1} className=" bg-orange w-[100%] h-[3px] "></div>
                <div ref={hamburger2} className=" bg-orange w-[50%] h-[3px] "></div>
            </div>


            {/* the drawer and the ghost drawer */}
            <div ref={mobileDrawer} className=" w-0 h-[100vh] bg-bright-orange absolute top-0 right-0 z-40
             flex justify-center items-center overflow-hidden
            "
            >

                <div className=" flex flex-col justify-center text-xl min-w-[200px] pl-[30px] mx-[50px] text-white">
                    <Link to={"/"} onClick={mobileDrawerStateUpdate}
                     className={currentLocation.pathname === "/" ? " font-bold underline underline-offset-2 mb-[3px] " : "mb-[3px]"}>Home</Link>

                    <Link to={"/workshop"} onClick={mobileDrawerStateUpdate}
                     className={currentLocation.pathname === "/workshop" ? " font-bold underline underline-offset-2 mb-[3px] " : "mb-[3px]"}>Workshop</Link>

                    <Link to={"stemlab"} onClick={mobileDrawerStateUpdate}
                     className={currentLocation.pathname === "/stemlab" ? " font-bold underline underline-offset-2 mb-[3px] " : "mb-[3px]"}>STEM Lab</Link>

                    <Link to={"gallery"} onClick={mobileDrawerStateUpdate}
                     className={currentLocation.pathname === "/gallery" ? " font-bold underline underline-offset-2 mb-[3px] " : "mb-[3px]"}>Gallery</Link>

                    <Link to={"contactus"} onClick={mobileDrawerStateUpdate}
                     className={currentLocation.pathname === "/contactus" ? " font-bold underline underline-offset-2 mb-[3px] " : "mb-[3px]"}>Contact Us</Link>

                </div>

            </div>

            <div ref={mobileDrawerGhost} className=" w-[0px] h-[100vh] bg-transparent top-0 left-0 absolute z-30"
            onClick={mobileDrawerStateUpdate}
            ></div>


        </div>
    );
}


export default MobileTabNavbar;