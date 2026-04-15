

const Text = ({children , className}) => {


    return(
        <p className={` ${className}
        
        

        3xl:text-xl 3xl:tracking-tight 3xl:leading-[24px] 
        `}>
            {children}
        </p>
    );
}


export default Text;