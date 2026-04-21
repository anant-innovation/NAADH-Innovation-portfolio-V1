import D_ContactUs from "../Desktop/D_ContactUs";
import M_ContactUs from "../Mobile/M_ContactUs";


const ContactUs = () => {

    return(
        <>

        {
            window.innerWidth >= 1024 ? <D_ContactUs/> : <M_ContactUs/>
        }
            
            
        </>
    );
}


export default ContactUs