import { Link } from "react-router-dom";
import BulletPoint from "./BulletPoint";
import Button from "./Button";


const CardDesktop = ({ src, heading, paragraph, path }) => {



    return (
        <Link to={path} className="custom-cursor hover:scale-105 transition-all duration-300 ease-out">

            {/* the actual card */}
            <div className=" custom-cursor bg-background w-[400px] p-[25px] relative">


                <div className=" custom-cursor bg-white10 w-[calc(100%+60px)] h-[2px]
             absolute bottom-[-1px] left-[-30px]
            "/>
                <div className=" custom-cursor bg-white10 w-[calc(100%+60px)] h-[2px]
             absolute top-[-1px] left-[-30px]
            "/>
                <div className=" custom-cursor bg-white10 h-[calc(100%+60px)] w-[2px]
             absolute left-[-1px] top-[-30px]
            "/>
                <div className=" custom-cursor bg-white10 h-[calc(100%+60px)] w-[2px]
             absolute right-[-1px] top-[-30px]
            "/>





                {/* the image */}
                <img className="custom-cursor mb-[30px]" src={src} alt="" />



                {/* the heading */}
                <h1 className="custom-cursor text-2xl text-white font-bold mb-[10px]">{heading}</h1>



                {/* the paragraph */}
                <p className="custom-cursor text-base leading-[18px] mb-[50px]">{paragraph}</p>


                {/* know more button */}
                <div className="custom-cursor flex justify-end">
                    {/* <Button link={path} outline={true} text={"Know More"} /> */}
                    <BulletPoint sm={true} text={"KNOW MORE"}/>
                </div>
            </div>




        </Link>
    );
}


export default CardDesktop