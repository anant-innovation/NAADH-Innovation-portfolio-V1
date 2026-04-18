// images
import DesktopGalleryImage1 from "@/assets/Desktop/Gallery/DesktopGallery1.jpg"
import DesktopGalleryImage2 from "@/assets/Desktop/Gallery/DesktopGallery2.jpg"
import DesktopGalleryImage3 from "@/assets/Desktop/Gallery/DesktopGallery3.jpg"
import DesktopGalleryImage4 from "@/assets/Desktop/Gallery/DesktopGallery4.jpg"
import DesktopGalleryImage5 from "@/assets/Desktop/Gallery/DesktopGallery5.jpg"
import DesktopGalleryImage6 from "@/assets/Desktop/Gallery/DesktopGallery6.jpg"
import DesktopGalleryImage7 from "@/assets/Desktop/Gallery/DesktopGallery7.jpg"
import DesktopGalleryImage8 from "@/assets/Desktop/Gallery/DesktopGallery8.jpg"
import DesktopGalleryImage9 from "@/assets/Desktop/Gallery/DesktopGallery9.jpg"
import DesktopGalleryImage10 from "@/assets/Desktop/Gallery/DesktopGallery10.jpg"
import DesktopGalleryImage11 from "@/assets/Desktop/Gallery/DesktopGallery11.jpg"
import DesktopGalleryImage12 from "@/assets/Desktop/Gallery/DesktopGallery12.jpg"
import DesktopGalleryImage13 from "@/assets/Desktop/Gallery/DesktopGallery13.jpg"
import DesktopGalleryImage14 from "@/assets/Desktop/Gallery/DesktopGallery14.jpg"
import DesktopGalleryImage15 from "@/assets/Desktop/Gallery/DesktopGallery15.jpg"
import DesktopGalleryImage16 from "@/assets/Desktop/Gallery/DesktopGallery16.jpg"
import DesktopGalleryImage17 from "@/assets/Desktop/Gallery/DesktopGallery17.jpg"
import DesktopGalleryImage18 from "@/assets/Desktop/Gallery/DesktopGallery18.jpg"
import founderImage from "@/assets/Desktop/Gallery/founderPicture.jpg"
import co_founderImage from "@/assets/Desktop/Gallery/CofounderPicture.jpg"





import BulletPoint from "@/Components/BulletPoint";
import Image from "@/Components/Image"
import D_ContactUsFooter from "@/Components/D_ContactUsFooter";
import Divider from "@/Components/Divider";
import MultipleImageContainer from "@/Components/MultipleImageContainer";
import SecondaryPageHeroHeading from "@/Components/SecondaryPageHeroHeading";
import Text from "@/Components/Text";
import { motion } from "motion/react"
import Heading from "@/Components/Heading"
import Button from "@/Components/Button"
import ImageBorder from "@/Components/ImageBorder"
import DesktopSecondaryHeroSections from "@/Components/DesktopSecondaryHeroSections"




const D_Gallery = () => {


    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="switchDesktop">


            {/* the bigger container */}
            <div className=" w-full flex flex-col items-center">





                {/* the container */}
                <div className=" flex flex-col items-center
                
                
                w-[76rem]">



                    {/* hero section */}
                    <DesktopSecondaryHeroSections bulletpointText={"ARCHIVES V1.0 | 21.03.2026"}

                        heading={"NAADH Innovation Archive"}
                        subText={"National Aerospace Agriculture Defence & Hospitality"}
                        paragraphText={"Captured moments from live workshops, showcasing real-time fabrication, testing, and applied learning environments."}
                    />





                    {/* the image section */}
                    <MultipleImageContainer className={" w-full mb-[30px]"}>
                        <div className=" grid grid-cols-20 gap-3">

                            <div className=" col-span-9">
                                <Image src={DesktopGalleryImage1} alt="" />
                            </div>


                            <div className=" col-span-11">
                                <Image src={DesktopGalleryImage2} alt="" />
                            </div>







                            <div className=" col-span-10">
                                <Image src={DesktopGalleryImage3} alt="" />
                            </div>


                            <div className=" col-span-10 row-span-2">
                                <Image src={DesktopGalleryImage4} alt="" />
                            </div>


                            <div className=" col-span-10">
                                <Image src={DesktopGalleryImage5} alt="" />
                            </div>







                            <div className=" col-span-11">
                                <Image src={DesktopGalleryImage6} alt="" />
                            </div>


                            <div className=" col-span-9">
                                <Image src={DesktopGalleryImage7} alt="" />
                            </div>







                            <div className=" col-span-10">
                                <Image src={DesktopGalleryImage18} alt="" />
                            </div>


                            <div className=" col-span-10">
                                <Image src={DesktopGalleryImage8} alt="" />
                            </div>








                            <div className=" col-span-12">
                                <Image src={DesktopGalleryImage9} alt="" />
                            </div>


                            <div className=" col-span-8">
                                <Image src={DesktopGalleryImage10} alt="" />
                            </div>







                            <div className=" col-span-10 row-span-2">
                                <Image src={DesktopGalleryImage11} alt="" />
                            </div>


                            <div className=" col-span-10">
                                <Image src={DesktopGalleryImage12} alt="" />
                            </div>

                            <div className=" col-span-10">
                                <Image src={DesktopGalleryImage13} alt="" />
                            </div>






                            <div className=" col-span-9">
                                <Image src={DesktopGalleryImage14} alt="" />
                            </div>

                            <div className=" col-span-11">
                                <Image src={DesktopGalleryImage15} alt="" />
                            </div>





                            <div className=" col-span-11">
                                <Image src={DesktopGalleryImage16} alt="" />
                            </div>

                            <div className=" col-span-9">
                                <Image src={DesktopGalleryImage17} alt="" />
                            </div>

                        </div>
                    </MultipleImageContainer>


                    {/* bullet */}
                    <div className=" w-full flex justify-end mb-[150px]">
                        <BulletPoint sm={true} text={"NAADH INNOVATION ARCHIVE V1.0 | 21.03.26 "} />
                    </div>




                    {/* bring this to your institue section */}
                    <div className=" w-full mb-[150px]">

                        <Heading text={"Bring This To Your Institution"} />

                        <div className=" flex justify-between items-end">
                            <Text>These are just a few moments from our sessions. <br /> If you’d like to organize something similar for your students, take a look at our workshops.</Text>


                            <Button outline={true} text={"Workshops"} />
                        </div>
                    </div>


                    <Divider mb={"200px"} />









                    {/* the people behind Naadh innovation */}
                    <div className=" w-full mb-[300px]">


                        {/* heading */}
                        <Heading text={"The people behind NAADH Innovation"} />




                        {/* paragraph */}
                        <Text className={"mb-[150px]"}>Built through consistent effort, learning, and a genuine interest in how things work. <br />What started as curiosity has grown into a focused pursuit of building real systems and meaningful experiences.</Text>




                        {/* container */}
                        <div className=" flex justify-around">




                            {/* founder  */}
                            <div >
                                <ImageBorder className={" w-[360px] mb-[40px]"} src={founderImage} />

                                <div className=" w-full flex justify-end">
                                    <BulletPoint sm={true} text={"FOUNDER"} />
                                </div>



                                <Text>Aryabhatta Ghost</Text>
                                <Text>Cheif Technical Officer (CTO) <br />
                                    Director</Text>

                            </div>







                            {/* cofounder */}
                            <div>
                                <ImageBorder className={" w-[360px] mb-[40px]"} src={co_founderImage} />

                                <div className=" w-full flex justify-end">
                                    <BulletPoint sm={true} text={"CO FOUNDER"} />
                                </div>



                                <Text>Sudhanshu Gupta</Text>
                                <Text>Cheif Executive Officer (CEO),<br />
                                    Director</Text>
                            </div>
                        </div>
                    </div>



                </div>




                {/* contact us footer */}
                <D_ContactUsFooter />
            </div>
        </motion.div>
    );
}

export default D_Gallery;