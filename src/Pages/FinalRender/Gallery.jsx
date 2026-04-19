import D_Gallery from "../Desktop/D_Gallery";
import M_Gallery from "../Mobile/M_Gallery";


const Gallery = () => {


    return(
        <>
        {
            window.innerWidth >= 1024 ? <D_Gallery/> : <M_Gallery/>
        }
        </>
    );
}


export default Gallery;