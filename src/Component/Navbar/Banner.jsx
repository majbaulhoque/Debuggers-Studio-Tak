import { FaCartShopping } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import { PiSunglassesFill } from "react-icons/pi";
import { MdPayment } from "react-icons/md";
import { ImTruck } from "react-icons/im";

const Banner = () => {
    return (
        <div className="flex flex-col bg-[#eaeaea] ">
            <div className="relative max-w-7xl mx-auto">
                <div className="flex items-center justify-center ">
                    <img className="h-[75vh] ml-40 mt-12" src="../../../images/Image.png" alt="Eyeglass Shopping" />
                </div>
                <div className="absolute -mt-[360px] -ml-16">
                    <h3 className="text-[#383838] text-4xl font-extrabold">Personalized Eyeglass <br /> Shopping</h3>
                    <div className="flex">
                        <button className="text-base bg-[#383838] text-white px-4 py-2 flex items-center justify-center mt-9"><FaCartShopping className="mr-2" /> Buy Now</button>
                    </div>
                </div>
                <div className="md:flex md:justify-between absolute md:-mt-11 md:-ml-16 block">
                    <div className="w-72 text-center">
                        <div className="bg-[#fed29c] h-20 w-20 rounded-full  flex items-center justify-center">
                            <FaSearch className="text-2xl h-9 w-9" />
                        </div>
                        <div className="-ml-52 mt-5 text-">
                        <p className="text-base text-[#383838] font-bold">Search you sunglass</p>
                        <p className="text-sm">Shop Stylish Eyewear Now</p>
                        </div>
                    </div>
                    <div className="w-72 text-center">
                        <div className="bg-[#fed29c] h-20 w-20 rounded-full flex items-center justify-center">
                            <PiSunglassesFill className="text-2xl h-9 w-9" />
                        </div>
                        <div className="-ml-52 mt-5 text-">
                        <p className="text-base text-[#383838] font-bold">Select Sunglass </p>
                        <p className="text-sm">Shade Your Style</p>
                        </div>
                    </div>
                    <div className="w-72 text-center">
                        <div className="bg-[#fed29c] h-20 w-20 rounded-full flex items-center justify-center">
                            <MdPayment className="text-2xl h-9 w-9" />
                        </div>
                        <div className="-ml-52 mt-5 text-">
                        <p className="text-base text-[#383838] font-bold">Make Payment</p>
                        <p className="text-sm">Securely Checkout Now</p>
                        </div>
                    </div>
                    <div className="w-72 text-center">
                        <div className="bg-[#fed29c] h-20 w-20 rounded-full flex items-center justify-center">
                            <ImTruck className="text-2xl h-9 w-9" />
                        </div>
                        <div className="-ml-52 mt-5 text-">
                        <p className="text-base text-[#383838] font-bold">Received Product </p>
                        <p className="text-sm">See the World Clearly</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
