import { FaCartShopping } from "react-icons/fa6";

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
            </div>
        </div>
    );
};

export default Banner;
