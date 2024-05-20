import { useLoaderData } from "react-router-dom";
import Banner from "../../Component/Navbar/Banner";
import Sunglass from "../../Component/Sunglass/Sunglass";
import AboutUs from "../About Us/AboutUs";
import Products from "../Products/Products";


const Home = () => {

    const carts = useLoaderData()


    return (
        <div>
            <div>
                <Banner></Banner>
            </div>
            <div>
                <Sunglass></Sunglass>
            </div>
            <div>
                <AboutUs></AboutUs>
            </div>
            <div>
                <Products carts={carts}></Products>
            </div>
        </div>
    );
};

export default Home;