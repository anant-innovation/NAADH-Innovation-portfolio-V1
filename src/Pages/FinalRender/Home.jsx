import D_Home from "../Desktop/D_Home"
import M_Home from "../Mobile/M_Home"




const Home = () => {


    


    return (
        <>
        {
            window.innerWidth >= 1024 ? <D_Home/> : <M_Home />
        }
            
            
        </>
    )
}

export default Home