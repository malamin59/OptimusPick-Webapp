import BannerSlider from "../Slaydar/BannerSlider";
import ReactAwesome from "./Sidebar";

const Header = () => {
    return (
        <div className="flex flex-col lg:flex-row ">
            <div className="w-full lg:w-1/2">
                <BannerSlider />
            </div>
            <div className="w-full lg:w-1/2">
                <ReactAwesome />
            </div>
        </div>
    );
};

export default Header;
