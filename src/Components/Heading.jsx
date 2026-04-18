

const Heading = ({text , classname}) => {


    return(
        <h1 className={`text-3xl tracking-[-2%] font-extrabold text-white mb-[30px] w-full 
            
            3xl:text-5xl 3xl:mb-[40px]
            
            ${classname}`}>{text}</h1>
    );
}

export default Heading;