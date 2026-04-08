import BulletPoint from "@/Components/BulletPoint";
import ContactUsFooter from "@/Components/ContactUsFooter";
import Divider from "@/Components/Divider";
import Heading from "@/Components/Heading";
import SecondaryPageHeroHeading from "@/Components/SecondaryPageHeroHeading";


import mobileSTEMLABImage1 from "@/assets/Mobile/STEM LAB/mobileSTEMLABImage1.jpg"


const StemLAB = () => {



    return (
        <div className=" px-[10px]">


            {/* workshop */}
            <div className=" my-[30px]">
                <BulletPoint text={"STEM LAB V1.0"} />
            </div>


            {/* STEM Lab secondary page hero section */}
            <div className=" mb-[30px]">
                <SecondaryPageHeroHeading heading={"STEM Lab"} subText={"We help institutes setup STEM Labs."} />
            </div>


            {/* paragraph */}
            <p className=" mb-[30px]">Structured setup for STEM labs designed to support hands-on learning, experimentation, and student-led exploration.</p>


            {/* divider */}
            <Divider mb={"60px"}/>


            {/* heading What we do */}
            <Heading text={"What we do"} />


            {/* paragraph What we do */}
            <div>
                <p className=" mb-[20px]">We work with institutions to design and set up STEM labs that focus on hands-on learning. The goal is to create a space where students can explore, build, and understand concepts beyond textbooks.</p>

                <p className=" mb-[10px] text-orange">What the lab includes</p>

                <ul className=" list-disc marker:text-white px-[15px] mb-[20px]">
                    <li className=" mb-[10px]"><span className=" text-white">Basic Electronics and Components :</span> A range of essential components that allow students to understand and work with real systems.</li>

                    <li className=" mb-[10px]"><span className=" text-white">Tools for Building and Testing :</span> Simple tools and setups that help students build, experiment, and test their ideas practically.</li>

                    <li className=" mb-[10px]"><span className=" text-white">Learning Modules :</span> Structured activities and modules designed to guide students through concepts step by step.</li>

                    <li className=" mb-[10px]"><span className=" text-white">Setup Guidance and Support :</span> Assistance in planning and setting up the lab so everything runs smoothly from the start.</li>
                </ul>


                <p className=" mb-[30px]">These are just a few examples of what a STEM lab can include.For more details and a setup tailored to your institution, feel free to contact us.</p>
            </div>




            {/* image */}
            <img className=" mb-[100px]" src={mobileSTEMLABImage1} alt="" />



            {/* How we work heading */}
            <Heading text={"How we work"} />


            {/* how we work paragraph */}
            <p className=" mb-[60px]">Every institution is different, so we plan the lab setup based on your needs, available space, and student level. <br />
                We keep the process simple and guide you through everything step by step.</p>


            {/* let's set up a lab heading */}
            <Heading text={"Let's set up a LAB"} />


            {/* let's set up paragraph */}
            <div className=" mb-[100px]">

                <p className=" mb-[10px]">If you’re planning to build a STEM lab in your institution, feel free to reach out. <br />
                    We’ll help you understand what’s needed and how to get started. </p>


                <p> <span className=" text-white">We are just a call away</span> <br /> <br />

                    +91 86373 82771 <br />
                    +91 80015 03977</p>
            </div>



            {/* contact us footer */}
            <ContactUsFooter button={true}/>
        </div>
    );
}


export default StemLAB