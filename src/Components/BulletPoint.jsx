
const BulletPoint = ({text}) => {



    return (
        <div className=" bg-background border border-white10 py-1 px-2 inline-flex items-center justify-between">

            {/* ORANGE BULLET */}
            <div className=" bg-orange w-[8px] h-[8px] mr-2"></div>

            {/* TEXT */}
            <p className=" text-white80 text-sm tracking-[14%]">{text}</p>
        </div>
    );
}

export default BulletPoint