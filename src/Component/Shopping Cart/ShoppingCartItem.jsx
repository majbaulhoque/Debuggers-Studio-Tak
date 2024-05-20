import { FaCartShopping } from "react-icons/fa6";

const ShoppingCartItem = ({cart}) => {
    const { id, brand, price, image_url, tag } = cart || {}
    return (
        <div className="max-w-7xl mx-auto">
            <a href="#" className="flex flex-col items-center rounded-lg shadow md:flex-row md:max-w-xl lg:mt-20">
                <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg py-10 bg-[#f7f7f7] p-4" src={image_url} alt="" />
                <div className="flex flex-col justify-between p-4 leading-normal">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight">{brand}</h5>
                    <p className="text-black">${price}</p>
                    <div className="my-4 font-bold">
                        <button className="text-base bg-[#f7f7f7] text-black border border-black px-4 py-2 flex items-center justify-center hover:bg-black hover:text-white transition-colors">
                            <FaCartShopping className="mr-2" /> Buy Now
                        </button>
                    </div>
                </div>
            </a>
        </div>
    );
};

export default ShoppingCartItem;