

const MobileTabNavbar = () => {


    return(
        <div className=" w-screen h-[4rem] bg-background flex items-center justify-between p-[10px] border-b border-white10 
         sticky top-0 z-50">


            {/* NAADH Innovation left side */}
            <h1 className=" text-sm font-semibold">NAADH Innovation</h1>



            {/* Two orange lines to open the menu */}
            <div className=" flex flex-col w-[2rem] h-[2rem] justify-evenly items-end">

                <div className=" bg-orange w-[100%] h-[3px]"></div>
                <div className=" bg-orange w-[50%] h-[3px]"></div>
            </div>


        </div>
    );
}


export default MobileTabNavbar;