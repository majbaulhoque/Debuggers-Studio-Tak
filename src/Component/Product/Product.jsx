import { MdFavoriteBorder } from "react-icons/md";
import { Link } from "react-router-dom";

const Product = ({ cart }) => {
    const { id, brand, price, discounted_price, off, image_url, tag } = cart || {}

    return (
        <div className="card card-compact bg-base-100 shadow-xl mt-10 sm:max-w-sm md:max-w-md lg:w-[360px] lg:h-[490px]">
    <div className="relative bg-[#f7f7f7]">
        <figure>
            <img src={image_url} alt={brand} className="w-full object-cover h-48 sm:h-56 lg:my-10  p-4" />
        </figure>
        <div className="absolute top-0 left-0 p-2 flex justify-between items-center w-full">
            <p className="bg-[#fed29c] lg:p-2 h-8 w-8 rounded-full text-black font-bold flex justify-center items-center sm:h-10 sm:w-10 md:h-12 md:w-12 lg:h-14 lg:w-14 text-sm pr-[-11px] lg:pr-[2px]">
                {off}
            </p>
            <MdFavoriteBorder className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl rounded-full bg-white p-1 cursor-pointer" />
        </div>
    </div>
    <div className="card-body">
        <h2 className="card-title text-lg font-bold">{brand}</h2>
        <div className="flex items-center pt-3">
            <p className="text-base font-semibold">${price}</p>
            <p className="line-through text-gray-500 text-sm -ml-52 lg:-ml-52">{discounted_price}</p>
        </div>
        <div className="pt-3">
            <Link to={`/carts/${id}`}>
                <button className="underline text-black text-lg">Add To Cart</button>
            </Link>
        </div>
    </div>
</div>

    );
};

export default Product;
