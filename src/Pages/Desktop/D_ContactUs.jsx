import D_ContactUsFooter from "@/Components/D_ContactUsFooter";
import DesktopSecondaryHeroSections from "@/Components/DesktopSecondaryHeroSections";
import Form from "@/Components/Form";
import Heading from "@/Components/Heading";
import OrangeHighlighter from "@/Components/OrangeHighlighter";
import SecondaryPageHeroHeading from "@/Components/SecondaryPageHeroHeading";
import Text from "@/Components/Text";
import WhiteHighlighter from "@/Components/WhiteHighlighter";
import { motion } from "motion/react";
import { Toaster } from "sonner";

const D_ContactUs = () => {



    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className=" switchDesktop">


            <div className=" flex justify-center bg-background-level2">


                {/* the big container */}
                <div className="w-full flex flex-col items-center
            
            
            bg-background
            max-w-[1920px]">


                    <Toaster theme="dark" />





                    {/* the container */}
                    <div className=" flex flex-col items-center
                
                
                lg:w-[58rem]
                xl:w-[66rem]
                2xl:w-[76rem]">




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
                                    <OrangeHighlighter>We are just a call away</OrangeHighlighter>
                                    <br /><br />
                                    +91 86373 82771 <br />
                                    +91 80015 03977
                                    <br /><br />
                                    contact@naadhinnovation.com
                                </Text>
                            </div>





                            {/* the form */}
                            <Form />




                        </div>





                    </div>


                    {/* the footer */}
                    <D_ContactUsFooter contactUsButton={false} />
                </div>
            </div>
        </motion.div>
    );
}


export default D_ContactUs;