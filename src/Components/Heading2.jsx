

const Heading2 = ({text,classname}) => {


    return(
        <h1 className={`text-2xl tracking-[-4%] font-extrabold text-white mb-[20px] ${classname}`}>{text}</h1>
    );
}


export default Heading2