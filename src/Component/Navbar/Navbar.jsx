import { NavLink } from "react-router-dom";
import { IoPerson } from "react-icons/io5";
import Logo from "./Logo";
import { FaCartShopping } from "react-icons/fa6";
import { RiMenu2Fill } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";
import { useState } from "react";

const Navbar = () => {
const [open, setOpen] = useState(false)


    return (
        <div>
            <div className="bg-white shadow-xl">
                <nav className="flex max-w-7xl mx-auto justify-between items-center py-6 px-4">
                    <div className="text-2xl md:hidden" onClick={() => setOpen(!open)}>
                        {
                            open === true ? 
                            <RxCross2 />
                            :
                            <RiMenu2Fill />
                        }
                    
                    </div>
                    <div>
                        <Logo />
                    </div>
                    <ul className={`text-sm flex space-x-3 lg:space-x-7 ml-2 mt-3 absolute md:static duration-1000
                    ${open ? 'top-16' : '-top-60'}`}>
                        <li className="md:text-lg">
                            <NavLink to='/' className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "underline text-[#DF3B41] font-bold" : ""
                                }>Home</NavLink>
                        </li>
                        <li className="md:text-lg">
                            <NavLink to='/aboutUs' className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "underline text-[#DF3B41] font-bold" : ""
                                }>About Us</NavLink>
                        </li>
                        <li className="md:text-lg" >
                            <NavLink to='/products' className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "underline text-[#DF3B41] font-bold" : ""
                                }>Products</NavLink>
                        </li>
                        <li className="md:text-lg">
                            <NavLink to='/features' className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "underline text-[#DF3B41] font-bold" : ""
                                }>Features</NavLink>
                        </li>
                        <li className="md:text-lg">
                            <NavLink to='/reviews' className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "underline text-[#DF3B41] font-bold" : ""
                                }>Reviews</NavLink>
                        </li>
                        <li className="md:text-lg">
                            <NavLink to='/contact' className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "underline text-[#DF3B41] font-bold" : ""
                                }>Contact Us</NavLink>
                        </li>
                    </ul>
                    <div className="flex gap-5 lg:text-2xl">
                        <NavLink to='/shoppingCart'><FaCartShopping /></NavLink>
                        <IoPerson />
                    </div>
                </nav>
            </div>
        </div>
    );
};

export default Navbar;
