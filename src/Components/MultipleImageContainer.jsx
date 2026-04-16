

const MultipleImageContainer = ({children , className}) => {


    return(
        <div className={`relative p-4 ${className}`}>

            <div className=" bg-white20 w-[calc(100%+30px)] h-[1px]
             absolute bottom-[-1px] left-[-15px]
            "/>
            <div className=" bg-white20 w-[calc(100%+30px)] h-[1px]
             absolute top-[-1px] left-[-15px]
            "/>
            <div className=" bg-white20 h-[calc(100%+30px)] w-[1px]
             absolute left-[-1px] top-[-15px]
            "/>
            <div className=" bg-white20 h-[calc(100%+30px)] w-[1px]
             absolute right-[-1px] top-[-15px]
            "/>
            {children}
        </div>
    );
}


export default MultipleImageContainer;