

const SecondaryPageHeroHeading = ({heading, subText, className}) => {


    return(
        <div className={`${className}`}>
            <h1 className=" text-[28px] text-white font-extrabold leading-[30px]
            
            
             3xl:text-[48px] 3xl:leading-[40px]
            ">{heading}</h1>
            <p className=" text-xs 
            
            
            3xl:text-lg
            ">{subText}</p>
        </div>
    );
}


export default SecondaryPageHeroHeading