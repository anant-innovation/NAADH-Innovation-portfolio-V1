import Button from "./Button";


const CardDesktop = ({ src, heading, paragraph, path }) => {



    return (
        <div>

            {/* the actual card */}
            <div className=" bg-background w-[400px] p-[25px] relative">


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





                {/* the image */}
                <img className=" mb-[30px]" src={src} alt="" />



                {/* the heading */}
                <h1 className=" text-2xl text-white font-bold mb-[10px]">{heading}</h1>



                {/* the paragraph */}
                <p className=" text-base leading-[18px] mb-[50px]">{paragraph}</p>


                {/* know more button */}
                <div className=" flex justify-end">
                    <Button outline={true} text={"Know More"} />
                </div>
            </div>




        </div>
    );
}


export default CardDesktop