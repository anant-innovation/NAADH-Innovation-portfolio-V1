import D_StemLab from "../Desktop/D_StemLab";
import M_StemLAB from "../Mobile/M_StemLab";



const StemLab = () => {


    return(
        <>
        {
            window.innerWidth >= 1024 ? <D_StemLab/> : <M_StemLAB/>
        }
        </>
    );
}


export default StemLab;