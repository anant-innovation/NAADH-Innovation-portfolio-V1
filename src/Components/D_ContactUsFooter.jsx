import { MapPin } from "lucide-react";
import SecondaryPageHeroHeading from "./SecondaryPageHeroHeading";
import Button from "./Button";
import Divider from "./Divider";
import naadhBackgrounImage from "@/assets/Desktop/Contact Us/NAADH.svg"


const D_ContactUsFooter = ({ contactUsButton = true }) => {



    return (
        <div className=" w-full flex flex-col items-center relative overflow-hidden">



            {/* container */}
            <div className="  flex flex-col items-center relative z-0
            
             h-[350px]
             

             lg:w-[55rem]
             xl:w-[66rem]
             2xl:w-[76rem]">




                {/* container 1 */}
                <div className=" w-full flex justify-between mb-[20px]">
                    <div className=" mr-[20px]">

                        {/* secondary page heading style */}
                        <div className=" mb-[30px]">
                            <h1 className=" text-4xl font-black text-white leading-[40px]">NAADH Innovation</h1>
                            <p className="">National Aerospace Agriculture Defence & Hospitality</p>
                        </div>


                        {/* copyright part */}
                        <p className=" mb-[30px]">© 2026 NAADH INNOVATION. <br />
                            ALL RIGHTS RESERVED</p>



                        {/* location part */}
                        <div className=" flex">
                            <MapPin className=" w-[20px] mr-[5px]" />

                            <p className=" mt-[2px]">3 No. Shankhari pukur <br />
                                Sadarghat Road <br />
                                Sripally <br />
                                Burdwan 713103</p>
                        </div>
                    </div>



                    {/* container 2 */}
                    <div>


                        <h1 className=" text-white text-xl mb-[5px]">Socials</h1>
                        <p className=" mb-[2px]">Instagram</p>
                        <p>Linkedin</p>
                    </div>




                    {/* container 3 */}
                    <div>
                        <h1 className=" text-white text-xl mb-[5px]">Careers</h1>
                    </div>



                    {/* container 4 */}
                    <div>
                        <h1 className=" text-white text-xl mb-[5px]">Privacy Policy</h1>
                    </div>




                    {/* container 5 */}
                    <div className=" flex flex-col items-end">


                        {/* contact us button */}
                        {contactUsButton && <Button link={"/contactus"} classname={"mb-[30px]"} solid={true} text={"Contact Us"} />}


                        {/* phone number and email */}
                        <p className=" mb-[10px]">contact@naadhinnovation.com</p>
                        <p>+91 86373 82771</p>
                        <p>+91 80015 03977</p>
                    </div>
                </div>






                {/* the line */}
                <div className=" w-[115%] border border-white20" />





                {/* the big NAADH LOGO */}
                <div className=" relative w-full 
                
                lg:bottom-[120px]
                xl:bottom-[140px]
                2xl:bottom-[150px]">
                    <img
                    
                    src={naadhBackgrounImage}
                    className="  absolute -z-10
                
                
                xl:text-[300px]
                2xl:text-[400px]

                "/>

                </div>


            </div>





        </div>
    )
}

export default D_ContactUsFooter;