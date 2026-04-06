import BulletPoint from "../../Components/BulletPoint";
import mobileWhatDoWeDoSection from "../../Assets/Mobile/phoneImage1.png"
import mobileDroneDevelopmentSectionImg1 from "@/Assets/Mobile/PhonedroneDev1.png"
import mobileDroneDevelopmentSectionImg2 from "@/Assets/Mobile/PhoneDroneDev2.png"
import mobileDroneDevelopmentSectionImg3 from "@/Assets/Mobile/PhoneDroneDev3.png"

import Heading from "../../Components/Heading";

const Home = () => {

    return (

        <div>


            {/* ******************************************* */}
            {/* HERO SECTION */}
            <div className=" w-screen h-[92svh] bg-background grid-bg flex flex-col justify-center items-center px-[10px] relative
            mb-[100px]
            ">


                <div className=" flex flex-col justify-center items-center">
                    {/* NAADH INNOVATION V1 */}
                    <div className=" mb-[11px]">
                        <BulletPoint text={"NAADH INNOVATION V1.0"} />
                    </div>


                    {/* BIG HEADING " NAADH INNOVATION ENGINEERING THE FUTURE OF INDIAN FLIGHT" */}
                    <div className=" text-white text-4xl flex flex-col items-center font-extrabold tracking-[-4%] mb-[30px]">
                        <h1>NAADH Innovation:</h1>
                        <h1>Engineering the <span className=" text-orange">Future</span></h1>
                        <h1>of Indian Flight</h1>
                    </div>


                    {/* PROUDLY MADE IN INDIA */}
                    <p className=" text-orange tracking-[-4%] mb-[5rem]">Proudly Made In India</p>


                </div>



                {/* SMALL TEXT IN THE BOTTOM */}
                <p className=" absolute bottom-[1rem] px-[2rem] text-sm">Developing next-generation drone systems while training the next generation of engineers through hands-on workshops and STEM labs.</p>

            </div>









            {/* ***********************************************/}
            {/* WHAT DO WE DO */}
            <div className="w-screen flex flex-col px-[10px] mb-[100px]">

                {/* Heading */}
                <Heading text={"What do we do ?"} />


                {/* paragraph */}
                <p className=" text-md mb-[30px]">We’re a team focused on building drone technology and working on real-world engineering problems. We build drones for practical use cases like defence & agriculture, where they can make a real impact.
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
            <div className=" flex flex-col px-[10px] justify-center mb-[100px]">

                {/* heading */}
                <Heading text="Drone Development" />

                {/* paragraph */}
                <p className="mb-[30px]">We are working towards building drones that can be used in areas like agriculture and defense, where they can actually solve real problems and create a impact.
                    <br /><br />

                Our focus is on understanding how these systems work from the ground up from basic electronics and flight control to how different components come together to make a reliable system. We spend a lot of time experimenting, testing ideas, and learning through trial and error.Along the way, we’re also exploring how drones can be adapted for different use cases whether it’s monitoring fields, collecting data, or handling tasks that are difficult or time-consuming for humans. <br /><br />

                It’s a continuous process of learning, building, and improving, and each step helps us get closer to creating systems that are practical and dependable.</p>


                {/* image 1 */}

                <img className=" mb-[10px]" src={mobileDroneDevelopmentSectionImg1} alt="" />

                {/* image 2 */}
                <img className=" mb-[10px]" src={mobileDroneDevelopmentSectionImg2} alt="" />

                {/* image 3 */}
                <img className=" mb-[30px]" src={mobileDroneDevelopmentSectionImg3} alt="" />



                {/* Tested under real conditions */}
                <div className=" flex justify-end">
                    <BulletPoint text={"TESTED UNDER REAL CONDITIONS"}/>
                </div>



            </div>

















            {/* ********************************************* */}
            {/* WORKSHOPS */}

















            {/* ********************************************** */}
            {/* WHAT WE OFFER */}























            {/* ********************************************** */}
            {/* WHY CHOOSE US */}





















            {/* ********************************************* */}
            {/* FOOTER CONTACT US */}
        </div>
    );
}


export default Home