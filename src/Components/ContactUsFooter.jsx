import { MapPin } from 'lucide-react';
import { FaLinkedin } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import Button from './Button';




const ContactUsFooter = ({ button }) => {


    return (
        <div className=' flex flex-col relative overflow-hidden
        
        w-full
        max-w-[500px]'>

            <div className=' flex flex-col justify-start mb-[30px]'>

                {/* Naadh Innovation Heading */}
                <h1 className=' text-3xl font-extrabold text-white leading-[30px]'>NAADH Innovation</h1>


                {/* National Aerospace Agriculture Defence & Hospitality */}
                <p className=' text-xs'>National Aerospace Agriculture Defence & Hospitality</p>


            </div>









            <div className=' flex flex-col mb-[10px] '>



                {/* the left side */}
                <div className='border-b border-white10'>

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
                    <div className=' mb-[30px]'>
                        <p>+91 80015 03977</p>
                        <p>+91 86373 82771</p>
                        <p>contact@naadhinnovation.com</p>
                    </div>




                    {
                        button ? (
                            <div className=' mb-[20px] flex justify-between'>

                                <Button link={"/contactus"} solid={"true"} text={"Contact Us"} />

                                <div className=' flex justify-between'>

                                    {/* linkedin */}
                                    <a  href="">
                                        <FaLinkedin className='w-[30px] h-[30px]' />
                                    </a>

                                    {/* twitter */}
                                    <a className='ml-[10px]' href="">
                                        <BsTwitterX className='w-[30px] h-[30px]' />
                                    </a>
                                </div>
                            </div>
                        ) : null



                    }
                </div>






                {/* the right side */}
                <div className=' w-full flex justify-center text-sm pt-[10px]'>


                    {/* privacy policy */}
                    <div className=' flex w-full justify-end'>
                        <a href="" className=' text-white mr-[30px]'>Privacy Policy</a>
                        <br />
                        {/* careers */}
                        <a href="" className=' text-white'>Careers</a>
                    </div>


                </div>
            </div>








        </div >
    );
}


export default ContactUsFooter

