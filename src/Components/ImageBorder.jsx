

const ImageBorder = ({ src , className }) => {



    return (
        <div className={` relative ${className}`}>
            <div className=" bg-white10 w-[calc(100%+60px)] h-[2px]
             absolute bottom-0 left-[-30px]
            "/>
            <div className=" bg-white10 w-[calc(100%+60px)] h-[2px]
             absolute top-0 left-[-30px]
            "/>
            <div className=" bg-white10 h-[calc(100%+60px)] w-[2px]
             absolute left-0 top-[-30px]
            "/>
            <div className=" bg-white10 h-[calc(100%+60px)] w-[2px]
             absolute right-0 top-[-30px]
            "/>
           
            <img src={src} alt="" />
        </div>
    );
}


export default ImageBorder;