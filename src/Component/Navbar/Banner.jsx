import { FaCartShopping } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import { PiSunglassesFill } from "react-icons/pi";
import { MdPayment } from "react-icons/md";
import { ImTruck } from "react-icons/im";

const Banner = () => {
    return (
        <div className="flex flex-col bg-[#eaeaea]">
            <div className="relative max-w-7xl mx-auto">
                <div className="flex items-center justify-center">
                    <img className="lg:h-[75vh] lg:ml-40 lg:mt-12 mt-8 mx-4" src="../../../images/Image.png" alt="Eyeglass Shopping" />
                </div>
                <div className="absolute -mt-52 lg:-mt-[360px] lg:-ml-16 mx-4 text-center lg:text-left">
                    <h3 className="text-[#383838] text-4xl font-extrabold">
                        Personalized Eyeglass <br /> Shopping
                    </h3>
                    <div className="flex justify-center lg:justify-start">
                        <button className="text-base bg-[#383838] text-white px-4 py-2 flex items-center justify-center mt-9">
                            <FaCartShopping className="mr-2" /> Buy Now
                        </button>
                    </div>
                </div>
                <div className="md:flex md:justify-between absolute  lg:-ml-44 mt-20 mx-4 block lg:mx-0 lg:-mt-10">
                    <div className="w-72 text-center mb-4 md:mb-0">
                        <div className="hidden bg-[#fed29c] h-20 w-20 rounded-full lg:flex items-center justify-center mx-auto">
                            <FaSearch className="text-2xl h-9 w-9" />
                        </div>
                        <div className="mt-5">
                            <p className="text-base text-[#383838] font-bold">Search your sunglasses</p>
                            <p className="text-sm">Shop Stylish Eyewear Now</p>
                        </div>
                    </div>
                    <div className="w-72 text-center mb-4 md:mb-0">
                        <div className="bg-[#fed29c] h-20 w-20 rounded-full hidden lg:flex items-center justify-center mx-auto">
                            <PiSunglassesFill className="text-2xl h-9 w-9" />
                        </div>
                        <div className="mt-5">
                            <p className="text-base text-[#383838] font-bold">Select Sunglasses</p>
                            <p className="text-sm">Shade Your Style</p>
                        </div>
                    </div>
                    <div className="w-72 text-center mb-4 md:mb-0">
                        <div className="hidden bg-[#fed29c] h-20 w-20 rounded-full lg:flex items-center justify-center mx-auto">
                            <MdPayment className="text-2xl h-9 w-9" />
                        </div>
                        <div className="mt-5">
                            <p className="text-base text-[#383838] font-bold">Make Payment</p>
                            <p className="text-sm">Securely Checkout Now</p>
                        </div>
                    </div>
                    <div className="w-72 text-center">
                        <div className="hidden bg-[#fed29c] h-20 w-20 rounded-full lg:flex items-center justify-center mx-auto">
                            <ImTruck className="text-2xl h-9 w-9" />
                        </div>
                        <div className="mt-5">
                            <p className="text-base text-[#383838] font-bold">Receive Product</p>
                            <p className="text-sm">See the World Clearly</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
