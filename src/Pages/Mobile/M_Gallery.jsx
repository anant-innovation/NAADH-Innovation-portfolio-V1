import mobileGalleryImage1 from "@/assets/Mobile/Gallery/MobileGallery1.jpg"
import mobileGalleryImage2 from "@/assets/Mobile/Gallery/MobileGallery2.jpg"
import mobileGalleryImage3 from "@/assets/Mobile/Gallery/MobileGallery3.jpg"
import mobileGalleryImage4 from "@/assets/Mobile/Gallery/MobileGallery4.jpg"
import mobileGalleryImage5 from "@/assets/Mobile/Gallery/MobileGallery5.jpg"
import mobileGalleryImage6 from "@/assets/Mobile/Gallery/MobileGallery6.jpg"
import mobileGalleryImage7 from "@/assets/Mobile/Gallery/MobileGallery7.jpg"
import mobileGalleryImage8 from "@/assets/Mobile/Gallery/MobileGallery8.jpg"
import mobileGalleryImage9 from "@/assets/Mobile/Gallery/MobileGallery9.jpg"
import mobileGalleryImage10 from "@/assets/Mobile/Gallery/MobileGallery10.jpg"
import mobileGalleryImage11 from "@/assets/Mobile/Gallery/MobileGallery11.jpg"
import mobileGalleryImage12 from "@/assets/Mobile/Gallery/MobileGallery12.jpg"
import mobileGalleryImage13 from "@/assets/Mobile/Gallery/MobileGallery13.jpg"
import mobileGalleryImage14 from "@/assets/Mobile/Gallery/MobileGallery14.jpg"
import mobileGalleryImage15 from "@/assets/Mobile/Gallery/MobileGallery15.jpg"
import mobileGalleryImage16 from "@/assets/Mobile/Gallery/MobileGallery16.jpg"
import mobileGalleryImage17 from "@/assets/Mobile/Gallery/MobileGallery17.jpg"
import mobileGalleryImage18 from "@/assets/Mobile/Gallery/MobileGallery18.jpg"
import mobileGalleryImage19 from "@/assets/Mobile/Gallery/MobileGallery19.jpg"
import mobileGalleryImage20 from "@/assets/Mobile/Gallery/MobileGallery20.jpg"
import mobileCoFounder from "@/assets/Mobile/Gallery/founderPicture.jpg"
import mobileFounder from "@/assets/Mobile/Gallery/CofounderPicture.jpg"



import BulletPoint from "@/Components/BulletPoint"
import SecondaryPageHeroHeading from "@/Components/SecondaryPageHeroHeading"
import Divider from "@/Components/Divider"
import Heading from "@/Components/Heading"
import Heading2 from "@/Components/Heading2"
import Button from "@/Components/Button"
import ContactUsFooter from "@/Components/ContactUsFooter"
import { motion } from "motion/react"


const M_Gallery = () => {


    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className=" flex flex-col justify-center px-[10px] switchMobile">


            {/* for responsiveness */}
            <div className=" w-full flex justify-center">


                <div className=" flex flex-col items-center
                
                
            xs2:w-[400px]
            sm:w-[500px]">







                    {/* bullet */}
                    <div className=" w-full flex justify-start my-[30px] ">
                        <BulletPoint text={"ARCHIVES V1.0 | 21.03.26"} />
                    </div>


                    {/* secondaryHeroHeading */}
                    <div className=" w-full mb-[30px]">
                        <SecondaryPageHeroHeading heading={"NAADH Innovation Archive"} subText={"National Aerospace Agriculture Defence & Hospitality"} />
                    </div>


                    {/* paragraph */}
                    <p className=" mb-[30px]">Captured moments from live workshops, showcasing real-time fabrication, testing, and applied learning environments.
                    </p>


                    {/* divider */}
                    <Divider mb={"30px"} />


                    {/* images 18pc */}
                    <img className=" mb-[10px]" src={mobileGalleryImage1} alt="" />
                    <img className=" mb-[10px]" src={mobileGalleryImage2} alt="" />
                    <img className=" mb-[10px]" src={mobileGalleryImage3} alt="" />
                    <img className=" mb-[10px]" src={mobileGalleryImage4} alt="" />
                    <img className=" mb-[10px]" src={mobileGalleryImage5} alt="" />
                    <img className=" mb-[10px]" src={mobileGalleryImage6} alt="" />
                    <img className=" mb-[10px]" src={mobileGalleryImage7} alt="" />
                    <img className=" mb-[10px]" src={mobileGalleryImage8} alt="" />
                    <img className=" mb-[10px]" src={mobileGalleryImage9} alt="" />
                    <img className=" mb-[10px]" src={mobileGalleryImage10} alt="" />
                    <img className=" mb-[10px]" src={mobileGalleryImage11} alt="" />
                    <img className=" mb-[10px]" src={mobileGalleryImage12} alt="" />
                    <img className=" mb-[10px]" src={mobileGalleryImage13} alt="" />
                    <img className=" mb-[10px]" src={mobileGalleryImage14} alt="" />
                    <img className=" mb-[10px]" src={mobileGalleryImage15} alt="" />
                    <img className=" mb-[10px]" src={mobileGalleryImage16} alt="" />
                    <img className=" mb-[10px]" src={mobileGalleryImage17} alt="" />
                    <img className=" mb-[10px]" src={mobileGalleryImage18} alt="" />
                    <img className=" mb-[10px]" src={mobileGalleryImage19} alt="" />
                    <img className=" mb-[40px]" src={mobileGalleryImage20} alt="" />



                    {/* divider */}
                    <Divider mb={"60px"} />


                    {/* bring this to your Institution heading */}
                    <h1 className=" w-full text-2xl text-white font-extrabold mb-[20px]">Bring This To Your Institution</h1>


                    {/* bring this to your institute paragraph */}
                    <p className=" mb-[30px]">These are just a few moments from our sessions.If you’d like to organize something similar for your students, take a look at our workshops.</p>


                    {/* workshop button */}
                    <div className=" w-full flex justify-end mb-[100px]">
                        <Button link={"/workshop"} outline={true} text={"Workshops"} />
                    </div>


                    {/* the people behind NAADH Innovation */}
                    <Heading2 classname={"w-full"} text={"The people behind NAADH Innovation"} />


                    {/* the people behind NAADH Innovation paragraph */}
                    <p className=" mb-[60px]">Built through consistent effort, learning, and a genuine interest in how things work.What started as curiosity has grown into a focused pursuit of building real systems and meaningful experiences.</p>


                    {/* founder image */}
                    <img className=" mb-[10px] sm:mb-[20px]" src={mobileCoFounder} alt="" />


                    {/* founder bullet */}
                    <div className="w-full flex justify-end ">
                        <BulletPoint text={"CO FOUNDER"} />
                    </div>


                    {/* Founder Info */}
                    <div className="w-full text-lg leading-[20px] mb-[60px]">
                        <p>Aryabhatta Ghosh</p>
                        <p>Chief Technical Officer (CTO)</p>
                    </div>


                    {/* Cofounder Image */}
                    <img className=" mb-[10px] sm:mb-[20px]" src={mobileFounder} alt="" />



                    {/* co founder bullet */}
                    <div className="flex justify-end w-full">
                        <BulletPoint text={"FOUNDER"} />
                    </div>


                    {/* co founder info */}
                    <div className=" w-full text-lg leading-[20px] mb-[100px]">
                        <p>Sudhanshu Gupta</p>
                        <p>Chief Executive Officer (CEO)</p>
                        <p>Director</p>
                    </div>



                    {/* contact us footer */}
                    <div className=" w-full">
                        <ContactUsFooter button={true} />
                    </div>

                </div>
            </div>

        </motion.div>
    );
}



export default M_Gallery