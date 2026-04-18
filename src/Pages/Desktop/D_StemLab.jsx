// image
import DesktopStemLabImage1 from "@/assets/Desktop/STEMLab/DesktopSTEMLAB1.jpg"


import D_ContactUsFooter from "@/Components/D_ContactUsFooter";
import DesktopSecondaryHeroSections from "@/Components/DesktopSecondaryHeroSections";
import Heading from "@/Components/Heading";
import ImageBorder from "@/Components/ImageBorder";
import OrangeHighlighter from "@/Components/OrangeHighlighter";
import Text from "@/Components/Text";
import WhiteHighlighter from "@/Components/WhiteHighlighter";
import { motion } from "motion/react";


const D_StemLab = () => {



    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className=" switchDesktop">


            {/* the big container */}
            <div className=" w-full flex flex-col items-center">




                {/* the responsive container */}
                <div className=" flex flex-col items-center
                
                w-[76rem]">





                    {/* hero section */}
                    <DesktopSecondaryHeroSections
                        bulletpointText={"STEM LAB V1.0"}
                        heading={"STEM Lab"}
                        subText={"We help institutes setup STEM Labs."}
                        paragraphText={"Structured setup for STEM labs designed to support hands-on learning, experimentation, and student-led exploration."}
                    />






                    {/* what we do section */}
                    <div className=" w-full mb-[200px]">



                        {/* heading */}
                        <Heading text={"What we do"} />



                        {/* paragraph */}
                        <Text className={"mb-[100px]"}>We work with institutions to design and set up STEM labs that focus on hands-on learning. The goal is to create a space where students can explore, build, and understand concepts beyond textbooks.</Text>




                        {/* list and picture container */}
                        <div className=" w-full flex justify-between">





                            {/* bullet points */}
                            <div className=" w-[50%]">

                                <Text className={"mb-[30px]"}><OrangeHighlighter>What the lab Includes</OrangeHighlighter></Text>

                                <ul className=" list-disc marker:text-white text-lg
                             leading-[22px]
                            
                             mb-[150px]
                            ">
                                    <li className=" mb-[14px]"><WhiteHighlighter>Basic Electronics and Components :</WhiteHighlighter>  A range of essential components that allow students to understand and work with real systems.</li>


                                    <li className=" mb-[14px]"> <WhiteHighlighter>Tools for Building and Testing :</WhiteHighlighter>  Simple tools and setups that help students build, experiment, and test their ideas practically.</li>


                                    <li className=" mb-[14px]"> <WhiteHighlighter>Learning Modules : </WhiteHighlighter>   Structured activities and modules designed to guide students through concepts step by step.</li>


                                    <li className=""> <WhiteHighlighter>Setup Guidance and Support : </WhiteHighlighter> Assistance in planning and setting up the lab so everything runs smoothly from the start.</li>


                                </ul>

                                <Text><WhiteHighlighter>* </WhiteHighlighter>These are just a few examples of what a STEM lab can include. For more details and a setup tailored to your institution, feel free to contact us.</Text>
                            </div>





                            {/* picture with framing */}
                            <div className=" w-[30%]">
                                <ImageBorder src={DesktopStemLabImage1} />
                            </div>


                        </div>


                    </div>





                    {/* how we work section */}
                    <div className=" w-full mb-[150px]">



                        {/* heading */}
                        <Heading text={"How we work"} />



                        {/* paragraph */}
                        <Text className={"w-[60rem]"}>Every institution is different, so we plan the lab setup based on your needs, available space, and student level. We keep the process simple and guide you through everything step by step.</Text>



                    </div>






                    {/* lets set up a lab section */}
                    <div className=" w-full mb-[200px]">



                        {/* heading */}
                        <Heading text={"Let's set up a LAB"} />



                        {/* text */}
                        <Text className={" w-[51rem]"}>If you’re planning to build a STEM lab in your institution, feel free to reach out.We’ll help you understand what’s needed and how to get started.

                            <br /><br />
                            <WhiteHighlighter>We are just a call away</WhiteHighlighter>

                            <br /><br />
                            +91 86373 82771 <br />
                            +91 80015 03977
                        </Text>




                    </div>






                </div>



                {/* contact us footer */}
                <D_ContactUsFooter />
            </div>
        </motion.div>
    );
}


export default D_StemLab;