

const Image = ({src , className}) => {

    return(
        <img src={src} className={` w-full h-full object-cover rounded-sm  ${className}`}/>
    );
}

export default Image;