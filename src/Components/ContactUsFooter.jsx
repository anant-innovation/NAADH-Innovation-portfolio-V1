import { MapPin } from 'lucide-react';
import { FaLinkedin } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import Button from './Button';




const ContactUsFooter = ({ button }) => {


    return (
        <div className=' flex flex-col relative overflow-hidden'>

            <div className=' flex flex-col justify-start mb-[30px]'>

                {/* Naadh Innovation Heading */}
                <h1 className=' text-3xl font-extrabold text-white leading-[30px]'>NAADH Innovation</h1>


                {/* National Aerospace Agriculture Defence & Hospitality */}
                <p className=' text-xs'>National Aerospace Agriculture Defence & Hospitality</p>


            </div>









            <div className=' flex mb-[30px]'>



                {/* the left side */}
                <div className=' border-r border-white20 pr-[20px]'>

                    {/* the copyright stuff */}
                    <p className=' mb-[15px]'>© 2026 NAADH INNOVATION. <br />
                        ALL RIGHTS RESERVED</p>

                    {/* location with the map icon */}
                    <div className=' flex mb-[15px]'>

                        <MapPin className=' w-[15px]' />


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
                <div className=' text-sm pl-[10px]'>


                    {/* socials */}
                    <div className=' mb-[10px]'>
                        <p className=' text-white mb-[3px]'>Socials</p>

                        <div className=' flex'>

                            {/* linkedin */}
                            <a href="">
                                <FaLinkedin className='w-[30px] h-[30px]' />
                            </a>

                            {/* twitter */}
                            <a href="">
                                <BsTwitterX className='w-[30px] h-[30px]' />
                            </a>
                        </div>

                    </div>


                    {/* privacy policy */}
                    <a href="" className=' text-white underline'>Privacy Policy</a>
                    <br />
                    {/* careers */}
                    <a href="" className=' text-white underline'>Careers</a>


                </div>
            </div>




            {
                button ? (
                    <div className=' mb-[30px]'>
                        <Button solid={"true"} text={"Contact Us"} />
                    </div>
                ) : null



            }







        </div >
    );
}


export default ContactUsFooter

