const AboutUs = () => {
    return (
        <div className="flex flex-col lg:flex-row">
            <div className="flex flex-col items-center justify-center w-full lg:w-1/2 p-6 bg-[#fed29c]">
                <div className="max-w-lg mx-auto">
                    <h3 className="text-black font-bold text-3xl mb-4 text-center lg:text-left">
                        Experience clear vision with <br />OptiChroma Vision Frames
                    </h3>
                    <p className="mb-4">
                        At OptiChroma, we believe that everyone deserves clear vision and stylish eyewear. That's why we've designed a collection of frames that prioritize both form and function.
                    </p>
                    <p className="mb-4">
                        Our team of experts is dedicated to helping you find the perfect pair of glasses.
                    </p>
                    <br />
                    <button className="bg-[#383838] text-white px-4 py-2 rounded-md">
                        About Us
                    </button>
                </div>
            </div>
            <div className="flex items-center justify-center w-full lg:w-1/2">
                <img src="../../../public/images/Image (4).png" alt="OptiChroma Vision Frames" className="max-w-full h-auto"/>
            </div>
        </div>
    );
};

export default AboutUs;
