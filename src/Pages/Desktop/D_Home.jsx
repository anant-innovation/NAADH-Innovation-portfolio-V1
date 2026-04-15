import BulletPoint from "@/Components/BulletPoint";
import { motion } from "motion/react";
import { ChevronDown } from 'lucide-react';
import Heading from "@/Components/Heading";
import Text from "@/Components/Text";


// images
import DesktopHomeImage1 from "@/assets/Desktop/Home/DesktopHome1.jpg"
import DesktopHomeImage2 from "@/assets/Desktop/Home/DesktopHome2.jpg"
import DesktopHomeImage3 from "@/assets/Desktop/Home/DesktopHome3.jpg"
import DesktopHomeImage4 from "@/assets/Desktop/Home/DesktopHome4.jpg"
import DesktopHomeImage5 from "@/assets/Desktop/Home/DesktopHome5.jpg"
import DesktopHomeImage6 from "@/assets/Desktop/Home/DesktopHome6.jpg"
import DesktopHomeImage7 from "@/assets/Desktop/Home/DesktopHome7.jpg"
import DesktopHomeImage8 from "@/assets/Desktop/Home/DesktopHome8.jpg"
import DesktopHomeImage9 from "@/assets/Desktop/Home/DesktopHome9.jpg"
import DesktopHomeImage10 from "@/assets/Desktop/Home/DesktopHome10.jpg"
import DesktopHomeImage11 from "@/assets/Desktop/Home/DesktopHome11.jpg"


import ImageBorder from "@/Components/ImageBorder";
import WhiteHighlighter from "@/Components/WhiteHighlighter";
import OrangeHighlighter from "@/Components/OrangeHighlighter";
import Button from "@/Components/Button";
import CardDesktop from "@/Components/CardDesktop";
import MultipleImageContainer from "@/Components/MultipleImageContainer";

const D_Home = () => {




    return (
        <motion.div className="switchDesktop">

            {/* the biggest container */}
            <div className=" bg-background flex flex-col justify-center">





                {/* the hero section */}
                <div className=" w-[100%] h-[93vh] grid-bg-desktop flex flex-col  justify-center relative
                
                
                3xl:mb-[200px]">





                    {/* the main writing container */}
                    <div className=" flex flex-col justify-center items-center mb-[60px]">





                        {/* the bullet point */}
                        <div className=" mb-[30px]">
                            <BulletPoint text={"NAADH INNOVATION V1.0"} />
                        </div>



                        {/* the main writing */}
                        <div className=" flex flex-col justify-center items-center text-white font-black mb-[60px]
                            
                            

                            3xl:text-8xl 3xl:tracking-[-4%]
                            ">
                            <h1>NAADH Innovation:</h1>
                            <h1>Engineering the <span className=" text-orange">Future</span></h1>
                            <h1>of Indian Flight</h1>
                        </div>



                        {/* the subtext */}
                        <p className=" text-center">Developing next-generation drone systems while training the next <br /> generation of engineers through hands-on workshops and STEM labs.</p>

                    </div>




                    {/* the bottom right side thingy and the arrow with bobbing animation */}

                    <div className="w-[100%] flex justify-center absolute bottom-[30px]">

                        {/* the right side thingy */}
                        <div className="p-2 border border-white10 bg-background absolute left-[50px] bottom-1 text-xs">

                            <p className=" text-orange">LAT/LONG CALIBRATION</p>
                            <p className=" text-white">28.6139° N, 77.2090° E</p>
                        </div>


                        {/* the bottom center arrow */}
                        <ChevronDown />
                    </div>

                </div>




















                {/* what do we do section */}
                <div className=" w-[100%] mb-[300px] flex justify-center ">




                    {/* the big container containing the text and the image */}
                    <div className=" flex justify-between
                    
                    
                    w-[76rem]">



                        {/* the text container */}
                        <div className="
                        
                        
                        ">


                            {/* the heading */}
                            <Heading text={"What do we do?"} />

                            {/* the paragraph */}
                            <div>

                                <Text>We’re a team focused on building drone technology and working on real-world engineering problems. <span className=" text-white">We build drones for</span> practical use cases like
                                    <WhiteHighlighter> Defence</WhiteHighlighter>  & <WhiteHighlighter>Agriculture</WhiteHighlighter>,
                                    where they can make a real impact.

                                    <br /> <br />

                                    <OrangeHighlighter>And teach students how to build them</OrangeHighlighter> giving them exposure to electronics, flight systems, and the basics of engineering through workshops and lab setups. The idea is to keep it simple, interactive, and focused on learning by doing.

                                    <br /> <br />

                                    At the same time, we continue to explore and develop our own ideas in drone systems and related technologies.
                                </Text>


                            </div>
                        </div>





                        {/* the image container with the bullet */}
                        <div className=" flex flex-col items-end">


                            {/* image with the borders */}
                            <ImageBorder className={"ml-[100px] mb-[40px] mt-[30px] w-[527px]"} src={DesktopHomeImage1} />


                            {/* the bullet point below the image with right indentation */}
                            <div>
                                <BulletPoint text={"DRONE BUILDING WORKSHOP"} />
                            </div>




                        </div>
                    </div>
                </div>











                {/* Drone Development section */}
                <div className=" w-[100%] flex justify-center
                
                
                mb-[300px]">

                    {/* internal container */}
                    <div className=" flex flex-col justify-center
                    
                    
                    w-[76rem]">





                        {/* the heading  */}
                        <Heading text={"Drone Development"} />


                        {/* the paragraph */}
                        <Text className={"mb-[100px]"}>We are working towards building drones that can be used in areas like agriculture and defense, where they can actually solve real problems and create a impact.

                            <br /><br />
                            Our focus is on understanding how these systems work from the ground up from basic electronics and flight control to how different components come together to make a reliable system. We spend a lot of time experimenting, testing ideas, and learning through trial and error.Along the way, we’re also exploring how drones can be adapted for different use cases whether it’s monitoring fields, collecting data, or handling tasks that are difficult or time-consuming for humans.
                            <br /><br />
                            It’s a continuous process of learning, building, and improving, and each step helps us get closer to creating systems that are practical and dependable.</Text>




                        {/* the images */}
                        <div className=" relative w-full flex justify-between
                        
                        ">
                            <ImageBorder className={" w-[320px]"} src={DesktopHomeImage2} />
                            <ImageBorder className={" w-[320px]"} src={DesktopHomeImage3} />
                            <ImageBorder className={" w-[320px]"} src={DesktopHomeImage4} />

                            <div className=" absolute bottom-[-80px] left-0">
                                <BulletPoint sm={true} text={"TESTED UNDER REAL CONDITIONS"} />
                            </div>
                        </div>
                    </div>
                </div>














                {/* the workshop section */}
                <div className=" flex justify-center
                
                
                mb-[200px]">




                    {/* container */}
                    <div className=" w-[76rem] flex">





                        {/* text + button section */}
                        <div>

                            {/* Workshops heading */}
                            <Heading text={"Workshops"} />



                            {/* paragraph */}
                            <Text className={"mb-[60px]"}>We conduct workshops for schools and colleges where students get hands-on experience with drones, electronics, and basic engineering concepts. Instead of just explaining things in theory, we focus on actually building and understanding how things work.


                                During these sessions, students get to see how different components come together from basic circuits to the fundamentals of how a drone flies. We keep the approach simple so that even beginners can follow along and feel comfortable experimenting.
                                <br /> <br />
                                The goal is to make learning more practical and interesting, and to give students a sense of what real-world engineering looks like. It’s not just about completing a session, but about helping them build curiosity and confidence to explore further on their own.</Text>


                            {/* container for the two buttons */}
                            <div className=" flex justify-start">


                                {/* button 1 */}
                                <Button classname={"mr-[20px]"} solid={true} text={"Contact Us"} />


                                {/* button 2 */}
                                <Button outline={true} text={"Details"} />
                            </div>
                        </div>






                        {/* image + bullet section */}
                        <div className=" flex flex-col relative">


                            {/* the image with borders */}
                            <ImageBorder className={"ml-[100px] mb-[40px] mt-[30px] w-[527px]"} src={DesktopHomeImage5} />



                            {/* the bullet */}
                            <div className=" absolute bottom-[40px] right-0">
                                <BulletPoint text={"DEDICATED TO THE PROCESS"} />
                            </div>
                        </div>



                    </div>
                </div>










                {/* the what we offer section */}
                <div className=" flex justify-center bg-black py-[100px] mb-[200px]">




                    {/* the container */}
                    <div className=" w-[76rem] mb-[100px]">




                        {/* heading */}
                        <Heading text={"What we offer"} />



                        {/* small text */}
                        <div className=" w-[40rem] mb-[100px]">
                            <Text>We work with schools and colleges to bring more practical learning into the classroom. Our focus is on helping students understand how things work by actually building and experimenting.</Text>
                        </div>



                        {/* two cards container */}
                        <div className=" flex justify-around">


                            {/* card 1 */}
                            <CardDesktop src={DesktopHomeImage6} heading={"WORKSHOPS"} paragraph={"We conduct hands-on workshops where students learn the basics of drones, electronics, and engineering."} />



                            {/* card 2 */}
                            <CardDesktop src={DesktopHomeImage7} heading={"STEM LABS"}
                                paragraph={"We help institutions set up STEM labs where students can explore, test ideas, and work on small projects."}
                            />
                        </div>
                    </div>
                </div>












                {/* the why choose us section */}
                <div className=" flex justify-center">




                    {/* the container */}
                    <div className=" w-[76rem]">



                        {/* the heading */}
                        <Heading text={"Why Choose Us?"} />



                        {/* the paragraph */}
                        <Text className={"mb-[60px]"}>We’ve worked with students across different schools and colleges, conducting workshops that focus on practical learning and real understanding. Over time, we’ve learned what works and how to keep students engaged while making sure they actually learn something useful.</Text>



                        {/* the image container with those nice lines */}
                        <MultipleImageContainer className={"mb-[50px]"}>
                            <div className="w-full">
                                <div className="w-full flex h-[500px] mb-4">
                                    <img className="rounded-sm w-[40%] object-cover mr-4" src={DesktopHomeImage8} alt="" />
                                    <img className="rounded-sm w-[60%] object-cover" src={DesktopHomeImage9} alt="" />
                                </div>



                                <div className=" flex h-[500px]">
                                    <img className="rounded-sm w-[50%] object-cover" src={DesktopHomeImage11} alt="" />

                                    <img className="rounded-sm w-[48.5%] object-cover ml-4" src={DesktopHomeImage10} alt="" />
                                </div>
                            </div>
                        </MultipleImageContainer>

                        {/* the bullet  */}
                        <div className=" flex justify-between">
                            <Button outline={true} text={"Visit Gallery"}/>
                            <BulletPoint text={"WE WILL LET THE PICTURES DO THE TALKING"}/>
                        </div>

                    </div>
                </div>





                {/* the footer with contact us button section */}
            </div>




        </motion.div>
    );
}


export default D_Home;