

const BulletPoint = ({text, sm, className}) => {

    if(sm){

        return (
        <div className={`custom-cursor bg-background border border-white10 py-1 px-2 inline-flex items-center justify-between ${className}`}>

            {/* ORANGE BULLET */}
            <div className="custom-cursor bg-orange w-[8px] h-[8px] mr-2"></div>

            {/* TEXT */}
            <p className="custom-cursor text-white80 text-[11px] tracking-[14%]">{text}</p>
        </div>
    );
    }

    return (
        <div className={`custom-cursor bg-background border border-white10 py-1 px-2 inline-flex items-center justify-between ${className}`}>

            {/* ORANGE BULLET */}
            <div className="custom-cursor bg-orange w-[8px] h-[8px] mr-2"></div>

            {/* TEXT */}
            <p className="custom-cursor text-white80 tracking-[14%]
            
            xs1:text-[11px]
            sm:text-sm
            ">{text}</p>
        </div>
    );
}

export default BulletPoint