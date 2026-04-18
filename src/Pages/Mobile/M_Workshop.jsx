import BulletPoint from "@/Components/BulletPoint";
import Button from "@/Components/Button";
import ContactUsFooter from "@/Components/ContactUsFooter";
import Divider from "@/Components/Divider";
import Heading from "@/Components/Heading";
import SecondaryPageHeroHeading from "@/Components/SecondaryPageHeroHeading";
import { motion } from "motion/react"

// images
import mobileWorkshopImage1 from "@/assets/Mobile/Workshop/mobileWorkshop1.jpg"
import mobileWorkshopImage2 from "@/assets/Mobile/Workshop/mobileWorkshop2.jpg"
import mobileWorkshopImage3 from "@/assets/Mobile/Workshop/mobileWorkshop3.jpg"
import mobileWorkshopImage4 from "@/assets/Mobile/Workshop/mobileWorkshop4.jpg"
import MultipleImageContainer from "@/Components/MultipleImageContainer";
import Image from "@/Components/Image";



const M_Workshop = () => {


    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className=" px-[10px] switchMobile">

            <div className=" w-full flex justify-center">

                <div className=" flex flex-col items-center
                
            xs2:w-[400px]
            sm:w-[500px]">




                    {/* bullet */}
                    <div className="w-full my-[30px]">
                        <BulletPoint text={"WORKSHOP V1.0"} />
                    </div>



                    {/* SecondaryPageHero Heading */}
                    <div className=" w-full mb-[30px]">
                        <SecondaryPageHeroHeading heading={"Workshops"} subText={"Hands-on Learning · Drone Workshops · STEM Programs"} />
                    </div>



                    {/* paragraph */}
                    <p className=" mb-[30px]">Documented sessions of hands-on workshops, where students engage in building, testing, and understanding real-world engineering systems.</p>



                    {/* divider */}
                    <Divider mb={"30px"} />



                    {/* heading */}

                    <Heading text={"What Students will learn"} />




                    {/* paragraph */}
                    <p className=" mb-[30px]">Our workshops focus on simple, practical learning where students understand concepts by actually building and experimenting.
                        Instead of just theory, we make sure they get hands-on experience and see how things work in real life.</p>



                    {/* bullet points 5 pc */}
                    <div className=" flex flex-col px-[15px] mb-[40px]">
                        <ul className=" list-disc marker:text-white">
                            <li className=" mb-[10px]"><span className=" text-white">Basics of Drones :</span> Students learn how drones work, the purpose of each part, and how everything comes together as a system.</li>

                            <li className=" mb-[10px]"><span className=" text-white">Electronics Fundamentals :</span> Introduction to basic components like motors, batteries, and circuits, explained in a simple and easy-to-follow way.</li>

                            <li className=" mb-[10px]"><span className=" text-white">Flight & Control Systems :</span> Understanding how a drone maintains balance, responds to inputs, and stays stable during flight.</li>

                            <li className=" mb-[10px]"><span className=" text-white">Hands-on Building :</span> Students actively take part in assembling and working with components, making the session interactive and engaging.</li>

                            <li className=" mb-[10px]"><span className=" text-white">Practical Problem-Solving :</span> Students learn to think through small challenges during the build process and understand how to fix issues step by step.</li>
                        </ul>
                    </div>




                    {/* image1 */}
                    <img className=" mb-[100px]" src={mobileWorkshopImage1} alt="" />



                    {/* Secondary Page Hero Heading */}
                    <div className=" mb-[30px] w-full">
                        <SecondaryPageHeroHeading heading={"Hands on Approach"} subText={"Learn by Building"} />
                    </div>


                    {/* paragraph */}
                    <p className=" mb-[30px]">Students don’t just listen they actively build, test, and explore.Our workshops are designed to give them real experience with components, tools, and systems in a way that feels natural and engaging.</p>


                    {/* image 2 */}
                    <div className=" sm:hidden">
                        <img className=" mb-[10px]" src={mobileWorkshopImage2} alt="" />


                        {/* image 3 */}
                        <img className=" mb-[10px]" src={mobileWorkshopImage3} alt="" />



                        {/* image 4 */}
                        <img className=" mb-[30px]" src={mobileWorkshopImage4} alt="" />
                    </div>




                    <MultipleImageContainer className={"hidden sm:flex flex-col items-center mb-[40px]"}>

                        <div className=" mb-4"><Image src={mobileWorkshopImage2}/></div>
                        <div className=" mb-4"><Image src={mobileWorkshopImage3}/></div>
                        <div className=""><Image src={mobileWorkshopImage4}/></div>
                        

                    </MultipleImageContainer>





                    {/* bullet  */}
                    <div className=" w-full mb-[40px]">
                        <BulletPoint text={"DEDICATED TO THE PROCESS"} />
                    </div>



                    {/* gallery button */}
                    <div className=" w-full flex justify-end mb-[60px]">
                        <Button link={"/gallery"} outline={true} text={"Gallery"} />
                    </div>



                    {/* heading How we work */}
                    <Heading text={"How we work"} />



                    {/* paragraph how we work */}
                    <p className=" mb-[60px]">We plan each workshop based on the institution’s needs including the duration, level of students, and how detailed the session should be. <br /> <br />

                        Students get hands-on experience by building and working with real components during the session, making the learning process more engaging. <br /> <br />

                        We keep everything simple and flexible so that the workshop can be organized smoothly without any complications. <br /> <br />
                        <span className=" text-white">*</span>
                        <span className=" text-orange">No prior setup or experience is required from the institution.</span></p>



                    {/* Heading lets plan a workshop */}
                    <Heading text={"Let's plan a Workshop"} />


                    {/* Paragraph */}
                    <div className=" mb-[100px] flex flex-col">


                        <p className=" mb-[10px]">If you’re interested in conducting a workshop at your institution, feel free to reach out.We’ll help you plan everything step by step.</p>



                        <p className="">We are just a call away <br /><br />

                            +91 86373 82771 <br />
                            +91 80015 03977</p>
                    </div>



                    {/* contact us footer */}
                    <ContactUsFooter button={true} />



                </div>
            </div>
        </motion.div>
    );
}


export default M_Workshop