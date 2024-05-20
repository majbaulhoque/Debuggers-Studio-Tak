import { MdFavoriteBorder } from "react-icons/md";
import { Link } from "react-router-dom";

const Product = ({ cart }) => {
    const { id, brand, price, discounted_price, off, image_url, tag } = cart || {}

    return (
        <div className="card card-compact bg-base-100 shadow-xl mt-10 sm:max-w-sm md:max-w-md lg:max-w-lg">
            <div className="relative bg-[#f7f7f7]">
                <figure>
                    <img src={image_url} alt={brand} className="w-full object-cover sm:h-48 md:h-56 lg:h-64 p-6 sm:p-4 md:p-6" />
                </figure>
                <div className="absolute top-0 left-0 p-2 flex justify-between items-center w-full">
                    <p className="bg-[#fed29c] p-2 h-8 w-8 rounded-full text-black font-bold -pt-1 sm:h-10 sm:w-10 md:h-11 md:w-11 lg:h-12 lg:w-12">{off}</p>
                    <MdFavoriteBorder className="text-3xl sm:text-4xl rounded-full bg-white p-1 cursor-pointer" />
                </div>
            </div>
            <div className="card-body">
                <h2 className="card-title text-lg font-bold">{brand}</h2>
                <div className="flex items-center">
                    <p className="text-base font-semibold">${price}</p>
                    <p className="line-through text-gray-500 -ml-60 lg:-ml-60 sm:ml-4 md:ml-6 text-sm">{discounted_price}</p>
                </div>
                <div className="py-3">
                    <Link to={`/carts/${id}`}>
                        <button className="underline text-black text-lg">Add To Cart</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Product;
