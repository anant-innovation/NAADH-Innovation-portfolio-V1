

const Divider = ({mb , className}) => {


    return(
        <div className={`w-full border border-white10 mb-[${mb}] 
            
            lg:w-[90%]
            2xl:w-[80%]
            3xl:w-full
            ${className}`}></div>
    );
}


export default Divider