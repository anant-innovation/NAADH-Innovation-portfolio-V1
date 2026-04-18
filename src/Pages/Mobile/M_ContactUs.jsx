import BulletPoint from "@/Components/BulletPoint";
import Button from "@/Components/Button";
import ContactUsFooter from "@/Components/ContactUsFooter";
import Divider from "@/Components/Divider";
import Form from "@/Components/Form";
import SecondaryPageHeroHeading from "@/Components/SecondaryPageHeroHeading";
import { motion } from "motion/react"


const M_ContactUs = () => {


    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className=" px-[10px] switchMobile">



            {/* for responsiveness */}
            <div className=" flex justify-center">



                <div className=" flex flex-col items-center
                    
            xs2:w-[400px]
            sm:w-[500px]">






                    {/* bullet */}
                    <div className=" w-full my-[30px]">
                        <BulletPoint text={"CONTACT V1.0"} />
                    </div>


                    {/* Secondary Page hero heading */}
                    <div className=" w-full mb-[30px]">
                        <SecondaryPageHeroHeading heading={"Contact Us"} subText={"Connect with us to discuss your requirements"} />
                    </div>


                    {/* paragraph */}
                    <p className=" mb-[30px]">Dedicated channel for coordinating workshops, discussing requirements, and planning sessions with institutions.</p>


                    {/* divider */}
                    <Divider mb={"60px"} />


                    {/* the form */}
                    <div className=" w-full">
                        <Form className={"mb-[60px]"} />
                    </div>


                    {/* the contact us footer */}
                    <ContactUsFooter />


                </div>
            </div>
        </motion.div>
    );
}


export default M_ContactUs;