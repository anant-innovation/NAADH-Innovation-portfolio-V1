import { MapPin } from 'lucide-react';
import Heading from "@/Components/Heading"

const ContactUsFooter = () => {


    return (
        <div className=' px-[10px] flex flex-col'>

            <div className=' flex flex-col justify-start mb-[30px]'>

                {/* Naadh Innovation Heading */}
                <h1 className=' text-3xl font-extrabold text-white leading-[30px]'>NAADH Innovation</h1>


                {/* National Aerospace Agriculture Defence & Hospitality */}
                <p className=' text-xs'>National Aerospace Agriculture Defence & Hospitality</p>


            </div>









            <div className=' flex '>



                {/* the left side */}
                <div className=' border-r border-white20 pr-[30px]'>

                    {/* the copyright stuff */}
                    <p className=' mb-[15px]'>© 2026 NAADH INNOVATION. <br />
                        ALL RIGHTS RESERVED</p>

                    {/* location with the map icon */}
                    <div className=' flex mb-[15px]'>
                        
                        <MapPin className=' w-[15px]'/>


                        <p>3 No. Shankhari pukur <br />
                            Sadarghat Road <br />
                            Sripally <br />
                            Burdwan 713103</p>
                    </div>

                    {/* phone number and email */}
                    <div>
                        <p>+91 80015 03977</p>
                        <p>+91 86373 82771</p>
                        <p>contact@naadhinnovation.com</p>
                    </div>
                </div>






                {/* the right side */}
                <div className=' text-sm'>


                    {/* socials */}
                    <div>
                        <p>Socials</p>
                        
                    </div>


                    {/* privacy policy */}
                    <a href="">Privacy Policy</a>

                    {/* careers */}


                    {/* Contact us orange button */}
                </div>
            </div>










            <div>
                {/* The light NAADH Name */}


            </div>




        </div>
    );
}


export default ContactUsFooter

