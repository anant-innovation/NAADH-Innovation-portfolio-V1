import D_Workshop from "../Desktop/D_Workshop"
import M_Workshop from "../Mobile/M_Workshop"


const Workshop = () => {



    return(
        <>
        {
            window.innerWidth >= 1024 ? <D_Workshop/> : <M_Workshop/>
        }
        </>
    );
}

export default Workshop;