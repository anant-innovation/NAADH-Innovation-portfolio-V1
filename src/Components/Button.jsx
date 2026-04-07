import { Link } from "react-router-dom";

const Button = ({ link, text, classname, outline, solid }) => {

    if (outline) {


        return (
            <Link to={link}><button className={`bg-background border border-white20 px-4 py-1 text-white text-lg rounded-xs ${classname}`}>{text}</button>
            </Link>
        );
    }


    if (solid) {



        return (
            <Link to={link}><button className={`bg-orange px-4 py-1 text-white text-lg rounded-xs ${classname}`}>{text}</button>
            </Link>
        );
    }



}

export default Button