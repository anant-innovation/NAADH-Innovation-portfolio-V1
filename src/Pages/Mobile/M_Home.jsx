import BulletPoint from "../../Components/BulletPoint";
import mobileWhatDoWeDoSection from "../../assets/Mobile/HomePage/MobileHome1.jpg"
import mobileDroneDevelopmentSectionImg1 from "@/assets/Mobile/HomePage/MobileHome2.jpg"
import mobileDroneDevelopmentSectionImg2 from "@/assets/Mobile/HomePage/MobileHome3.jpg"
import mobileDroneDevelopmentSectionImg3 from "@/assets/Mobile/HomePage/MobileHome4.jpg"
import mobileWorkshopSectionImage from "@/assets/Mobile/HomePage/MobileHome5.jpg"
import mobileHomeImage6 from "@/assets/Mobile/HomePage/MobileHome6.jpg"
import mobileHomeImage7 from "@/assets/Mobile/HomePage/MobileHome7.jpg"
import mobileHomeImage8 from "@/assets/Mobile/HomePage/MobileHome8.jpg"
import mobileHomeImage9 from "@/assets/Mobile/HomePage/MobileHome9.jpg"
import mobileHomeImage10 from "@/assets/Mobile/HomePage/MobileHome10.jpg"
import mobileHomeImage11 from "@/assets/Mobile/HomePage/MobileHome11.jpg"


import Heading from "../../Components/Heading";
import Button from "@/Components/Button";
import Heading2 from "@/Components/Heading2";
import ContactUsFooter from "@/Components/ContactUsFooter";
import { Link } from "react-router-dom";
import { motion } from "motion/react"
import { ChevronDown } from "lucide-react";
import MultipleImageContainer from "@/Components/MultipleImageContainer";
import Image from "@/Components/Image";


const M_Home = () => {











    return (

        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className=" relative overflow-hidden switchMobile">

            {/* for responsiveness */}
            <div className="flex flex-col items-center">


                {/* ******************************************* */}
                {/* HERO SECTION */}
                <div className=" w-screen h-[92svh] bg-background grid-bg flex flex-col justify-center items-center px-[10px] relative
            mb-[100px]">


                    <div className=" flex flex-col justify-center items-center">
                        {/* NAADH INNOVATION V1 */}
                        <div className=" mb-[11px]">
                            <BulletPoint text={"NAADH INNOVATION V1.0"} />
                        </div>


                        {/* BIG HEADING " NAADH INNOVATION ENGINEERING THE FUTURE OF INDIAN FLIGHT" */}
                        <div className=" text-white flex flex-col items-center font-extrabold mb-[30px]
                    
                    xs1:text-[26px] xs1:leading-[30px]
                    xs1-1:text-[28px]
                    xs2:text-4xl xs2:tracking-[-4%] xs2:leading-[38px]
                    sm:text-5xl sm:leading-[52px]
                    ">
                            <h1>NAADH Innovation:</h1>
                            <h1>Engineering the <span className=" text-orange">Future</span></h1>
                            <h1>of Indian Flight</h1>
                        </div>


                        {/* PROUDLY MADE IN INDIA */}
                        <p className=" text-orange tracking-[-4%] mb-[5rem]">Proudly Made In India</p>


                    </div>



                    


                    <div className=" w-full absolute bottom-[2rem] left-0 flex justify-center">
                        <ChevronDown />
                    </div>

                </div>









                {/* ***********************************************/}
                {/* WHAT DO WE DO */}
                <div className="w-screen flex flex-col px-[10px] mb-[100px]
            
            
            xs2:w-[400px]
            sm:w-[500px]">

                    {/* Heading */}
                    <Heading text={"What do we do ?"} />


                    {/* paragraph */}
                    <p className=" text-md mb-[30px]">We’re a team focused on building drone technology and working on real-world engineering problems. <span className=" text-orange">We build drones</span> for practical use cases like defence & agriculture, where they can make a real impact.
                        <br /><br />

                        And teach students how to build them giving them exposure to electronics, flight systems, and the basics of engineering through workshops and lab setups. The idea is to keep it simple, interactive, and focused on learning by doing.
                        <br /><br />
                        At the same time, we continue to explore and develop our own ideas in drone systems and related technologies.</p>


                    {/* image */}
                    <img className=" mb-[30px]"
                        src={mobileWhatDoWeDoSection} alt="" />


                    {/* Drone Building workshop  */}
                    <div className=" flex justify-end">
                        <BulletPoint text={"DRONE BUILDING WORKSHOP"} />
                    </div>
                </div>













                {/* ********************************************* */}
                {/* DRONE DEVELOPMENT */}
                <div className=" flex flex-col px-[10px] justify-center mb-[100px]
            
            
            xs2:w-[400px]
            sm:w-[500px]">

                    {/* heading */}
                    <Heading text="Drone Development" />

                    {/* paragraph */}
                    <p className="mb-[30px]">We are working towards building drones that can be used in areas like <span className="text-orange">Agriculture</span> and <span className="text-orange">Defense</span>, where they can actually solve real problems and create a impact.
                        <br /><br />

                        Our focus is on understanding how these systems work from the ground up from basic electronics and flight control to how different components come together to make a reliable system. We spend a lot of time experimenting, testing ideas, and learning through trial and error.Along the way, we’re also exploring how drones can be adapted for different use cases whether it’s monitoring fields, collecting data, or handling tasks that are difficult or time-consuming for humans. <br /><br />

                        It’s a continuous process of learning, building, and improving, and each step helps us get closer to creating systems that are practical and dependable.</p>


                    {/* image 1 */}

                    <div className="sm:hidden">
                        <img className=" mb-[10px]" src={mobileDroneDevelopmentSectionImg1} alt="" />

                        {/* image 2 */}
                        <img className=" mb-[10px]" src={mobileDroneDevelopmentSectionImg2} alt="" />

                        {/* image 3 */}
                        <img className=" mb-[30px]" src={mobileDroneDevelopmentSectionImg3} alt="" />
                    </div>


                    <MultipleImageContainer className={"hidden sm:block mb-[30px]"}>

                        <div className=" mb-4">
                            <Image src={mobileDroneDevelopmentSectionImg1} />
                        </div>


                        <div className=" mb-4">
                            {/* image 2 */}
                            <Image src={mobileDroneDevelopmentSectionImg2} />
                        </div>



                        <div className="">
                            {/* image 3 */}
                            <Image src={mobileDroneDevelopmentSectionImg3} />
                        </div>


                    </MultipleImageContainer>




                    {/* Tested under real conditions */}
                    <div className=" flex justify-end">
                        <BulletPoint text={"TESTED UNDER REAL CONDITIONS"} />
                    </div>



                </div>

















                {/* ********************************************* */}
                {/* WORKSHOPS */}
                <div className=" flex flex-col justify-center px-[10px] mb-[100px]
            
            
            xs2:w-[400px]
            sm:w-[500px]">

                    {/* workshop heading */}
                    <Heading text={"Workshops"} />

                    {/* workshop paragraph */}
                    <p className=" mb-[30px]">We conduct workshops for schools and colleges where students get hands-on experience with drones, electronics, and basic engineering concepts. Instead of just explaining things in theory, we focus on actually building and understanding how things work. <br />
                        During these sessions, students get to see how different components come together from basic circuits to the fundamentals of how a drone flies. We keep the approach simple so that even beginners can follow along and feel comfortable experimenting. <br /><br />

                        <span className=" text-white">The goal is to make learning more practical and interesting</span>, and to give students a sense of what real-world engineering looks like. It’s not just about completing a session, but about helping them build curiosity and confidence to explore further on their own.</p>



                    {/* buttons */}
                    <div className=" flex justify-start mb-[60px]">
                        <Button link={"/contactus"} classname={"mr-6"} solid={"true"} text={"Contact Us"} />
                        <Button link={"/workshop"} outline={"true"} text={"Workshops"} />
                    </div>



                    {/* images */}
                    <img className=" mb-[30px]" src={mobileWorkshopSectionImage} alt="" />

                    {/* bullet */}
                    <div className=" flex justify-end">
                        <BulletPoint text={"DEDICATED TO THE PROCESS"} />
                    </div>







                </div>
















                {/* ********************************************** */}
                {/* WHAT WE OFFER */}
                <div className=" flex flex-col justify-center px-[10px] mb-[100px]
            
            xs2:w-[400px]
            sm:w-[500px]">


                    {/* What we offer heading */}
                    <Heading text={"What we offer"} />

                    {/* the paragraph */}
                    <p className=" mb-[30px]">We work with schools and colleges to bring more practical learning into the classroom. Our focus is on helping students understand how things work by actually building and experimenting.</p>


                    {/* WORKSHOPS HEADING */}
                    <Heading2 text={"WORKSHOPS"} />


                    {/* Small paragraph */}
                    <p className=" mb-[30px]">We conduct hands-on workshops where students learn the basics of drones, electronics, and engineering.</p>


                    {/* image */}
                    <img className=" mb-[30px]" src={mobileHomeImage6} alt="" />


                    {/* bullet point */}
                    <Link className=" flex justify-end mb-[30px]" to={"/workshop"}>
                        <BulletPoint text={"KNOW MORE"} />
                    </Link>



                    {/* STEM LABS */}
                    <Heading2 text={"STEM LABS"} />



                    {/* Paragraph */}
                    <p className=" mb-[30px]">We help institutions set up STEM labs where students can explore, test ideas, and work on small projects.</p>


                    {/* image */}
                    <img className=" mb-[30px]" src={mobileHomeImage7} alt="" />


                    {/* bullet point */}
                    <Link className=" flex justify-end" to={"/stemlab"}>
                        <BulletPoint text={"KNOW MORE"} />
                    </Link>


                </div>






















                {/* ********************************************** */}
                {/* WHY CHOOSE US */}
                <div className=" flex flex-col justify-center px-[10px] mb-[100px]
            

            xs2:w-[400px]
            sm:w-[500px]">

                    {/* Why Choose Us Heading */}
                    <Heading text={"Why Choose Us ?"} />

                    {/* paragraph */}
                    <p className=" mb-[30px]">We’ve worked with students across different schools and colleges, conducting workshops that focus on practical learning and real understanding. Over time, we’ve learned what works and how to keep students engaged while making sure they actually learn something useful.</p>

                    {/* images 8 to 11 */}
                    <div className=" sm:hidden">
                        <img className=" mb-[10px]" src={mobileHomeImage8} alt="" />
                        <img className=" mb-[10px]" src={mobileHomeImage9} alt="" />
                        <img className=" mb-[10px]" src={mobileHomeImage10} alt="" />
                        <img className=" mb-[20px]" src={mobileHomeImage11} alt="" />
                    </div>


                    <MultipleImageContainer className={"hidden sm:block mb-[30px]"}>
                        <Image className=" mb-4" src={mobileHomeImage8} alt="" />
                        <Image className=" mb-4" src={mobileHomeImage9} alt="" />
                        <Image className=" mb-4" src={mobileHomeImage10} alt="" />
                        <Image className=" " src={mobileHomeImage11} alt="" />
                    </MultipleImageContainer>

                    {/* bullet */}
                    <div className=" flex justify-start mb-[40px]">
                        <BulletPoint sm={"true"} text={"VISUALS SPEAK LOUDER"} />
                    </div>


                    {/* visit gallery button */}
                    <div className=" flex justify-end">
                        <Button link={"/gallery"} outline={"true"} text={"Visit Gallery"} />
                    </div>

                </div>




















                {/* ********************************************* */}
                {/* FOOTER CONTACT US */}
                <div className=" w-full flex justify-center px-[10px]">
                    <ContactUsFooter button={true} />
                </div>


            </div>
        </motion.div>
    );
}


export default M_Home