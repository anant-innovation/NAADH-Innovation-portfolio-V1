import BulletPoint from "./BulletPoint";
import SecondaryPageHeroHeading from "./SecondaryPageHeroHeading";
import Text from "./Text";
import Divider from "./Divider";


const DesktopSecondaryHeroSections = ({ bulletpointText, heading, subText, paragraphText, headingClassName }) => {


    return (
        <div className=" w-full mt-[60px] mb-[200px] flex flex-col items-center">


            <div className=" flex justify-between w-full h-[250px]  mb-[60px]">

                <div className=" ">

                    <BulletPoint text={bulletpointText} className={" mb-[20px]"} sm={true} />

                    <SecondaryPageHeroHeading headingClassName={headingClassName} heading={heading} subText={subText} />
                </div>

                <div className=" w-[450px] flex items-end">
                    <Text>{paragraphText}</Text>
                </div>


            </div>
            <div className=" w-[98vw] flex justify-center">
                <Divider />
            </div>
        </div>
    );
}


export default DesktopSecondaryHeroSections;