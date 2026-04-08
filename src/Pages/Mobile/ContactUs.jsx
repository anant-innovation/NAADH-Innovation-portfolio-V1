import BulletPoint from "@/Components/BulletPoint";
import Button from "@/Components/Button";
import ContactUsFooter from "@/Components/ContactUsFooter";
import Divider from "@/Components/Divider";
import SecondaryPageHeroHeading from "@/Components/SecondaryPageHeroHeading";


const ContactUs = () => {


    return (
        <div className=" px-[10px]">


            {/* bullet */}
            <div className=" my-[30px]">
                <BulletPoint text={"CONTACT V1.0"} />
            </div>


            {/* Secondary Page hero heading */}
            <div className=" mb-[30px]">
                <SecondaryPageHeroHeading heading={"Contact Us"} subText={"Connect with us to discuss your requirements"} />
            </div>


            {/* paragraph */}
            <p className=" mb-[30px]">Dedicated channel for coordinating workshops, discussing requirements, and planning sessions with institutions.</p>


            {/* divider */}
            <Divider mb={"60px"} />


            {/* the form */}
            <form className=" px-[20px] mb-[100px]" action="">



                {/* NAME */}
                <div className="flex flex-col mb-[15px]">


                    <label className=" mb-1 text-white" htmlFor="Name">Name</label>

                    <input className="w-[100%] h-[30px] border border-white20 rounded-sm px-1 focus:outline-none focus:border-white text-white bg-white10" id="Name" type="text" />
                </div>



                {/* PHONE NUMBER */}
                <div className=" flex flex-col mb-[15px]">

                    <label className=" text-white mb-1" htmlFor="Phone_Number">Phone Number</label>
                    <input className=" w-[100%] h-[30px] border border-white20 rounded-sm px-1 focus:outline-none focus:border-white text-white bg-white10" id="Phone_Number" type="number" />
                </div>




                {/* Institution Name */}
                <div className=" flex flex-col mb-[15px]">

                    <label className=" text-white mb-1" htmlFor="Institution_Name">Institution Name</label>
                    <input className=" w-[100%] h-[30px] border border-white20 rounded-sm px-1 focus:outline-none focus:border-white text-white bg-white10" id="Institution_Name" type="text" />
                </div>



                {/* Message */}
                <div className=" flex flex-col mb-[15px] mb-[30px]">

                    <label className=" text-white mb-1" htmlFor="Message">Message</label>
                    <textarea className=" w-[100%] h-[100px] border border-white20 rounded-sm p-1 focus:outline-none focus:border-white text-white bg-white10" name="Message" id="Message"></textarea>
                </div>



                <div className=" flex justify-end">
                    <Button solid={true} text={"Submit"}/>
                </div>
            </form>


            {/* the contact us footer */}
            <ContactUsFooter />
        </div>
    );
}


export default ContactUs;