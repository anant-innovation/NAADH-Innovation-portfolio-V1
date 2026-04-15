

const ImageBorder = ({ src , className }) => {



    return (
        <div className={` relative ${className}`}>
            <div className=" bg-white10 w-[calc(100%+60px)] h-[2px]
             absolute bottom-[-1px] left-[-30px]
            "/>
            <div className=" bg-white10 w-[calc(100%+60px)] h-[2px]
             absolute top-[-1px] left-[-30px]
            "/>
            <div className=" bg-white10 h-[calc(100%+60px)] w-[2px]
             absolute left-[-1px] top-[-30px]
            "/>
            <div className=" bg-white10 h-[calc(100%+60px)] w-[2px]
             absolute right-[-1px] top-[-30px]
            "/>
           
            <img src={src} alt="" />
        </div>
    );
}


export default ImageBorder;