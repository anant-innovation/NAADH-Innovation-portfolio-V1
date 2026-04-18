// image
import DesktopWorkshopImage1 from "@/assets/Desktop/Workshops/DesktopWorkshop1.jpg"
import DesktopWorkshopImage2 from "@/assets/Desktop/Workshops/DesktopWorkshop2.jpg"
import DesktopWorkshopImage3 from "@/assets/Desktop/Workshops/DesktopWorkshop3.jpg"
import DesktopWorkshopImage4 from "@/assets/Desktop/Workshops/DesktopWorkshop4.jpg"
import BulletPoint from "@/Components/BulletPoint";
import Button from "@/Components/Button";
import D_ContactUsFooter from "@/Components/D_ContactUsFooter";


import DesktopSecondaryHeroSections from "@/Components/DesktopSecondaryHeroSections";
import Heading from "@/Components/Heading";
import Image from "@/Components/Image";
import ImageBorder from "@/Components/ImageBorder";
import MultipleImageContainer from "@/Components/MultipleImageContainer";
import OrangeHighlighter from "@/Components/OrangeHighlighter";
import SecondaryPageHeroHeading from "@/Components/SecondaryPageHeroHeading";
import Text from "@/Components/Text";
import WhiteHighlighter from "@/Components/WhiteHighlighter";
import { motion } from "motion/react";


const D_Workshop = () => {


    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className=" switchDesktop">


            {/* for screens bigger than my screen */}
            <div className=" flex justify-center bg-background-level2">


                {/* biggest container */}
                <div className=" w-full flex flex-col items-center
            
             bg-background
            max-w-[1920px]">




                    {/* the size container */}
                    <div className=" flex flex-col items-center
                
                
                lg:w-[58rem]
                xl:w-[66rem]
                2xl:w-[76rem]

                
                ">





                        {/* the hero section */}
                        <DesktopSecondaryHeroSections
                            bulletpointText={"WORKSHOP V1.0"}
                            heading={"Workshops"}
                            subText={"Hands-on Learning · Drone Workshops · STEM Programs"}
                            paragraphText={"Documented sessions of hands-on workshops, where students engage in building, testing, and understanding real-world engineering systems."}
                        />









                        {/* what students will learn section */}
                        <div className=" mb-[200px]">

                            <Heading text={"What students will learn"} />

                            <Text className={"mb-[100px]"}>Our workshops focus on simple, practical learning where students understand concepts by actually building and experimenting. <br /> Instead of just theory, we make sure they get hands-on experience and see how things work in real life.</Text>



                            {/* bullet points and image container */}
                            <div className=" w-full flex justify-between">



                                {/* bullet points */}
                                <ul className=" list-disc marker:text-white text-lg
                             leading-[22px]
                            
                            w-[50%]
                            ">
                                    <li className=" mb-[10px]"><WhiteHighlighter>Basics of Drones :</WhiteHighlighter>  Students learn how drones work, the purpose of each part, and how everything comes together as a system.</li>


                                    <li className=" mb-[10px]"> <WhiteHighlighter>Electronics Fundamentals :</WhiteHighlighter>  Introduction to basic components like motors, batteries, and circuits, explained in a simple and easy-to-follow way.</li>


                                    <li className=" mb-[10px]"> <WhiteHighlighter>Flight & Control Systems :</WhiteHighlighter>  Understanding how a drone maintains balance, responds to inputs, and stays stable during flight.</li>


                                    <li className=" mb-[10px]"> <WhiteHighlighter>Hands-on Building :</WhiteHighlighter>  Students actively take part in assembling and working with components, making the session interactive and engaging.</li>


                                    <li className=" mb-[10px]"> <WhiteHighlighter>Practical Problem-Solving :</WhiteHighlighter>  Students learn to think through small challenges during the build process and understand how to fix issues step by step.</li>
                                </ul>



                                {/* the image */}
                                <div className=" w-[40%]">
                                    <ImageBorder src={DesktopWorkshopImage1} />
                                </div>
                            </div>
                        </div>







                        {/* Hands on approach section */}
                        <div className=" w-full mb-[200px]">




                            {/* secondarypage hero heading */}
                            <Heading text={"Hands on Approach"} />


                            {/* paragraph */}
                            <Text className={"mb-[60px]"}>
                                <OrangeHighlighter>Students don’t just listen they actively build, test, and explore.</OrangeHighlighter>
                                <br /> Our workshops are designed to give them real experience with components, tools, and systems in a way that feels natural and engaging.</Text>




                            {/* the three images */}
                            <MultipleImageContainer className={" mb-[30px] grid grid-cols-3 gap-4"}>
                                <img src={DesktopWorkshopImage2} />
                                <img src={DesktopWorkshopImage3} />
                                <img src={DesktopWorkshopImage4} />
                            </MultipleImageContainer>




                            {/* the bullet point */}
                            <div className=" w-full flex justify-end mb-[30px]">
                                <BulletPoint sm={true} text={"DEDICATED TO THE PROCESS"} />
                            </div>




                            {/* the gallery button */}
                            <div className=" w-full justify-start">
                                <Button link={"/gallery"} outline={true} text={"Gallery"} />
                            </div>
                        </div>







                        {/* how we work section */}
                        <div className=" w-full mb-[200px]">


                            {/* heading */}
                            <Heading text={"How we work"} />



                            {/* paragraph */}
                            <Text className={"w-[60rem]"}>
                                We plan each workshop based on the institution’s needs including the duration, level of students, and how detailed the session should be.
                                <br /> <br />
                                Students get hands-on experience by building and working with real components during the session, making the learning process more engaging.
                                <br /> <br />
                                We keep everything simple and flexible so that the workshop can be organized smoothly without any complications.
                                <br /> <br />
                                <WhiteHighlighter>*</WhiteHighlighter>
                                <OrangeHighlighter>No prior setup or experience is required from the institution.</OrangeHighlighter>

                            </Text>



                        </div>







                        {/* lets plan a workshop section */}
                        <div className=" w-full mb-[200px]">



                            {/* heading */}
                            <Heading text={"Let's plan a Workshop"} />

                            {/* paragrpah */}
                            <Text className={"w-[50.4rem]"}>
                                If you’re interested in conducting a workshop at your institution, feel free to reach out.We’ll help you plan everything step by step.

                                <br /> <br />
                                <WhiteHighlighter>We are just a call away</WhiteHighlighter>

                                <br /> <br />

                                +91 86373 82771 <br />
                                +91 80015 03977
                            </Text>
                        </div>







                    </div>
                    {/* conatact us footer */}
                    <D_ContactUsFooter />
                </div>
            </div>
        </motion.div>
    );
}


export default D_Workshop;