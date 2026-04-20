import { useEffect, useRef, useState } from "react"
import NaadhSVG from "./NaadhSVG"
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import DrawSVGPlugin from "gsap/DrawSVGPlugin";
import { SplitText } from "gsap/SplitText";



const OpeningAnimation = () => {

    gsap.registerPlugin(useGSAP);

    const [countDown, setCountDown] = useState(0);






    const subTextRef = useRef()
    const headingRef = useRef()
    const darkGreyCurtain = useRef()
    const countDownRef = useRef()
    const whiteCurtainRef = useRef()


    useEffect(() => {
        const interval = setInterval(() => {
            setCountDown((prev) => {
                if (prev >= 100) {
                    clearInterval(interval);
                    return 100;
                }

                // slow down near the end
                const increment = prev < 70 ? 3 : prev < 90 ? 1 : 0.5;

                return Math.min(prev + increment, 100);
            });
        }, 60);

        return () => clearInterval(interval);
    }, []);



    useGSAP(() => {

        const tl = gsap.timeline();


        tl


                .to(darkGreyCurtain.current, {
                    x: "100%",
                    duration: 4.58,
                    ease: "power2"
                })


                .to(countDownRef.current, {
                    y: "180px",
                    duration: 1,
                    ease: "power4.out"
                })




            .from(headingRef.current, {
                duration: 1,
                y: "100px",
                ease: "power4",

            }, "-=0.89")




            .from(subTextRef.current, {
                duration: 1,
                y: "-100px",
                ease: "power4",
                

            })



            .to(whiteCurtainRef.current, {

                duration: 2,
                y: "-100%",
                ease: "power4.inOut"
            })







    })








    return (
        <div ref={whiteCurtainRef} className="absolute w-full h-[100svh] bg-white z-41 
         overflow-hidden
        flex justify-center items-center">



            {/* the backgoround going down */}
            <div ref={darkGreyCurtain} className=" bg-background w-full h-screen absolute">
            </div>



            <div className=" flex flex-col items-center justify-center relative">

                <div className=" w-full overflow-hidden">
                    <h1
                        ref={headingRef}
                        className=" w-full text-black font-black
                        
                         tracking-tight
                        
                        text-2xl
                        sm:text-3xl
                        lg:text-4xl
                        ">NAADH Innovation</h1>
                </div>



                <div className=" w-full overflow-hidden">
                    <p className=" text-black  w-full 
                    
                    text-xs
                    sm:text-sm
                    " ref={subTextRef}>National Aerospace Agriculture Defence & Hospitality
                    </p>
                </div>

                <div className=" overflow-hidden flex justify-center items-center absolute">


                    <h1 ref={countDownRef} className=" mix-blend-difference font-black text-white 
                    
                    text-3xl
                    
                    ">{Math.floor(countDown)}%</h1>
                </div>

            </div>


        </div>
    )
}


export default OpeningAnimation