import gsap from "gsap";
import { useRef,useState } from "react";
import { Link } from "react-router-dom";




const MobileTabNavbar = () => {

    const[mobileDrawerState, setMobileDrawerState] = useState(true);
    const mobileDrawer = useRef();
    const mobileDrawerGhost = useRef();


    // the function controlling the state of the drawer
    const mobileDrawerStateUpdate = () => {


        setMobileDrawerState(prev => !prev);

        if(mobileDrawerState){

            gsap.to(mobileDrawer.current,{

                width:200,
                borderLeftWidth:"1px",
                borderLeftColor:"#616161",
            })
            console.log("true");


            gsap.to(mobileDrawerGhost.current,{
                width:"100%"
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
        }
    }
 
    
    




    return (
        <div className=" w-screen h-[4rem] bg-background flex items-center justify-between p-[10px] border-b border-white10 
         sticky top-0 z-50">


            {/* NAADH Innovation left side */}
            <h1 className=" text-sm font-semibold">NAADH Innovation</h1>



            {/* Two orange lines to open the menu */}
            <div className=" flex flex-col w-[2rem] h-[2rem] justify-evenly items-end z-50"
            onClick={mobileDrawerStateUpdate}
            >

                <div className=" bg-orange w-[100%] h-[3px]"></div>
                <div className=" bg-orange w-[50%] h-[3px]"></div>
            </div>


            {/* the drawer and the ghost drawer */}
            <div ref={mobileDrawer} className=" w-0 h-[100vh] bg-bright-orange absolute top-0 right-0 z-40
             flex justify-center items-center overflow-hidden
            "
            >

                <div className=" flex flex-col justify-center text-xl min-w-[200px] pl-[30px] mx-[50px]">
                    <Link className=" mb-[3px] text-white font-light">Home</Link>
                    <Link className=" mb-[3px] text-white font-light">Workshop</Link>
                    <Link className=" mb-[3px] text-white font-light">StemLAB</Link>
                    <Link className=" mb-[3px] text-white font-light">Gallery</Link>
                    <Link className=" text-white font-bold underline underline-offset-2">Contact Us</Link>
                </div>

            </div>

            <div ref={mobileDrawerGhost} className=" w-[0px] h-[100vh] bg-transparent top-0 left-0 absolute z-30"
            onClick={mobileDrawerStateUpdate}
            ></div>


        </div>
    );
}


export default MobileTabNavbar;