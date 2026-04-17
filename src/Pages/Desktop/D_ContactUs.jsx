import D_ContactUsFooter from "@/Components/D_ContactUsFooter";
import DesktopSecondaryHeroSections from "@/Components/DesktopSecondaryHeroSections";
import Form from "@/Components/Form";
import Heading from "@/Components/Heading";
import SecondaryPageHeroHeading from "@/Components/SecondaryPageHeroHeading";
import Text from "@/Components/Text";
import { motion } from "motion/react";
import { Toaster } from "sonner";

const D_ContactUs = () => {



    return (
        <motion.div className=" switchDesktop">

            {/* the big container */}
            <div className="w-full flex flex-col items-center">

            
            <Toaster/>


                {/* the container */}
                <div className=" flex flex-col items-center
                
                
                w-[76rem]">




                    {/* the hero section */}
                    <DesktopSecondaryHeroSections
                        bulletpointText={"CONTACT V1.0"}
                        heading={"Contact Us"}
                        subText={"Connect with us to discuss your requirements, scheduling, or any queries."}
                        paragraphText={"Dedicated channel for coordinating workshops, discussing requirements, and planning sessions with institutions."}
                    />






                    {/* the container for the form and the left text */}
                    <div className="w-full flex justify-between mb-[200px]">




                        {/* the text */}
                        <div>
                            <SecondaryPageHeroHeading
                                heading={"NAADH Innovation"}
                                subText={"National Aerospace Agriculture Defence & Hospitality"}
                                className={"mb-[30px]"}
                            />


                            <Text>
                                Contact Numbers :
                                <br /><br />
                                +91 86373 82771 <br />
                                +91 80015 03977
                                <br /><br />
                                contact@naadhinnovation.com
                            </Text>
                        </div>





                        {/* the form */}
                        <Form/>




                    </div>
                        {/* the footer */}
                        <D_ContactUsFooter/>




                </div>
            </div>
        </motion.div>
    );
}


export default D_ContactUs;