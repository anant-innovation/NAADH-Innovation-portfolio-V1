

const Heading = ({text , classname}) => {


    return(
        <h1 className={`text-3xl tracking-[-2%] font-extrabold text-white mb-[30px] ${classname}`}>{text}</h1>
    );
}

export default Heading;