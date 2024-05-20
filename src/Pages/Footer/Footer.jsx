import Logo from "../../Component/Navbar/Logo";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const Footer = () => {
    return (
        <div>
            <div className="max-w-7xl mx-auto">
                <footer className="footer p-10 text-base-content">
                    <aside>
                        <Logo></Logo>
                        <p className="py-5">Latin literature from 45 BC, making it over 2000 <br /> years old. Richard McClintock, a Latin professor at <br /> Hampde</p>
                        <div className="flex gap-3 ">
                            <div className="bg-[#fed29c] rounded-full p-2  w-10 h-10 flex items-center justify-center">
                                <FaLinkedinIn />
                            </div>
                            <div className="bg-[#fed29c] rounded-full p-2  w-10 h-10 flex items-center justify-center">
                                <FaInstagram />
                            </div>
                            <div className="bg-[#fed29c] rounded-full p-2 w-10 h-10 flex items-center justify-center">
                                <FaTwitter />
                            </div>
                        </div>

                    </aside>
                    <nav>
                        <h6 className="text-2xl pb-4 text-black font-bold">Support</h6>
                        <a className="link link-hover">Privacy & Policy</a>
                        <a className="link link-hover">Terms & Condition</a>
                        <a className="link link-hover">Product FAQS</a>
                        <a className="link link-hover">Company Support</a>
                        <a className="link link-hover">Manage Account</a>
                    </nav>
                    <nav>
                        <h6 className="text-2xl pb-4 text-black font-bold">Quick Links</h6>
                        <a className="link link-hover">About us</a>
                        <a className="link link-hover">Blog Post</a>
                        <a className="link link-hover">Product Features</a>
                        <a className="link link-hover">Company Info</a>
                        <a className="link link-hover">Company Info</a>
                    </nav>
                    <nav>
                        <h6 className="text-2xl pb-4 text-black font-bold">Community</h6>
                        <a className="link link-hover">Become an affiliate</a>
                        <a className="link link-hover">Help Center</a>
                        <a className="link link-hover">Product FAQs</a>
                        <a className="link link-hover">Our Fourms</a>
                        <a className="link link-hover">Product API</a>
                    </nav>
                </footer>
            </div>
            <div className="border-t border-[#fed29c]">
                <div className="flex my-8 justify-between max-w-7xl mx-auto">
                    <div>
                        <p>Copyright © 2023 All rights reserved by Eyeglass</p>
                    </div>
                    <div className="flex space-x-4">
                        <p>Privacy Policy</p>
                        <p>Terms of service</p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Footer;