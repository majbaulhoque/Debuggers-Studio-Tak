import { NavLink } from "react-router-dom";
import { IoPerson } from "react-icons/io5";
import Logo from "./Logo";
import Cart from "../Shopping Cart/SoppingCart";
import SoppingCart from "../Shopping Cart/SoppingCart";

const Navbar = () => {
    return (
        <div>
            <div className="bg-white shadow-xl">
                <nav className="flex max-w-7xl mx-auto justify-between items-center py-6">
                    <div>
                        <Logo />
                    </div>
                    <ul className="flex space-x-7">
                        <li className="text-lg">
                            <NavLink to='/'>Home</NavLink>
                        </li>
                        <li className="text-lg">
                            <NavLink to='/'>About Us</NavLink>
                        </li>
                        <li className="text-lg">
                            <NavLink to='/products'>Products</NavLink>
                        </li>
                        <li className="text-lg">
                            <NavLink to='/features'>Features</NavLink>
                        </li>
                        <li className="text-lg">
                            <NavLink to='/reviews'>Reviews</NavLink>
                        </li>
                        <li className="text-lg">
                            <NavLink to='/contact'>Contact Us</NavLink>
                        </li>
                    </ul>
                    <div className="flex gap-5 text-xl">
                        <SoppingCart/>
                        <IoPerson />
                    </div>
                </nav>
            </div>
        </div>
    );
};

export default Navbar;
