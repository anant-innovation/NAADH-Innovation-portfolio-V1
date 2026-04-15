

const ImageBorder = ({ src , className }) => {



    return (
        <div className={` relative w-[527px]  ml-[100px] mb-[40px] mt-[30px] ${className}`}>
            <div className=" bg-white10 w-[calc(100%+60px)] h-[2px]
             absolute bottom-[-2px] left-[-30px]
            "/>
            <div className=" bg-white10 w-[calc(100%+60px)] h-[2px]
             absolute top-[-2px] left-[-30px]
            "/>
            <div className=" bg-white10 h-[calc(100%+60px)] w-[2px]
             absolute left-[-2px] top-[-30px]
            "/>
            <div className=" bg-white10 h-[calc(100%+60px)] w-[2px]
             absolute right-[-2px] top-[-30px]
            "/>
           
            <img src={src} alt="" />
        </div>
    );
}


export default ImageBorder;