

const SecondaryPageHeroHeading = ({heading, subText, className, headingClassName}) => {


    return(
        <div className={`${className}`}>
            <h1 className= {`text-[28px] text-white font-bold leading-[30px]
            
            lg:text-[48px] lg:leading-[45px]  ${headingClassName}`}
            >{heading}</h1>
            <p className=" text-xs 
            
            
            3xl:text-lg
            ">{subText}</p>
        </div>
    );
}


export default SecondaryPageHeroHeading