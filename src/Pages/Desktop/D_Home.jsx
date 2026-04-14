import BulletPoint from "@/Components/BulletPoint";
import { motion } from "motion/react";
import { ChevronDown } from 'lucide-react';

const D_Home = () => {




    return (
        <motion.div className="switchDesktop">

            {/* the biggest container */}
            <div className=" bg-background flex flex-col justify-center">





                {/* the hero section */}
                <div className=" w-[100%] h-[93vh] grid-bg flex flex-col  justify-center relative">





                    




                    {/* the main writing container */}
                    <div className=" flex flex-col justify-center items-center mb-[60px]">





                        {/* the bullet point */}
                        <div className=" mb-[30px]">
                            <BulletPoint text={"NAADH INNOVATION V1.0"} />
                        </div>



                        {/* the main writing */}
                        <div className=" flex flex-col justify-center items-center text-white font-black mb-[60px]
                            
                            text-8xl tracking-[-4%]

                            3xl:text-8xl 3xl:tracking-[-4%]
                            ">
                            <h1>NAADH Innovation:</h1>
                            <h1>Engineering the <span className=" text-orange">Future</span></h1>
                            <h1>of Indian Flight</h1>
                        </div>



                        {/* the subtext */}
                        <p className=" text-center">Developing next-generation drone systems while training the next <br /> generation of engineers through hands-on workshops and STEM labs.</p>

                    </div>








                    {/* the bottom right side thingy and the arrow with bobbing animation */}

                    <div className="w-[100%] flex justify-center absolute bottom-[30px]">

                        {/* the right side thingy */}
                        <div className="p-2 border border-white20 bg-background absolute left-[50px] bottom-1 text-xs">

                            <p className=" text-orange">LAT/LONG CALIBRATION</p>
                            <p className=" text-white">28.6139° N, 77.2090° E</p>
                        </div>


                        {/* the bottom center arrow */}
                        <ChevronDown/>
                    </div>

                </div>






                {/* what do we do section */}
                <div className=" w-[100%] h-[30rem]">

                </div>





                {/* Drone Development section */}






                {/* the workshop section */}







                {/* the what we offer section */}







                {/* the why choose us section */}






                {/* the footer with contact us button section */}
            </div>




        </motion.div>
    );
}


export default D_Home;