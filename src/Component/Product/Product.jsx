import { MdFavoriteBorder } from "react-icons/md";
import { Link } from "react-router-dom";

const Product = ({ cart }) => {
    const { id, brand, price, discounted_price, off, image_url, tag } = cart || {}

    return (
        <div className="card card-compact md:w-96 bg-base-100 shadow-xl mt-10"> 
            <div className="relative bg-[#f7f7f7]">
                <figure>
                    <img src={image_url} alt={brand} className="w-full h-64 object-cover p-20" />
                </figure>
                <div className="absolute top-0 left-0 p-2 flex justify-between items-center w-full">
                    <p className="bg-[#fed29c] p-2 h-11 w-11 rounded-full text-black font-bold -pt-1">{off}</p>
                    <MdFavoriteBorder className="text-4xl rounded-full bg-white p-1 cursor-pointer" />
                </div>
            </div>
            <div className="card-body">
                <h2 className="card-title text-lg font-bold">{brand}</h2>
                <div className="flex items-center">
                    <p className="text-base font-semibold">${price}</p>
                    <p className="line-through text-gray-500 -ml-60 text-sm md:-ml-0"> 
                        {discounted_price}
                    </p>
                </div>
                <div className="py-5">
                    <Link to={`/carts/${id}`}>
                        <button className="underline text-black text-lg">Add To Cart</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Product;
