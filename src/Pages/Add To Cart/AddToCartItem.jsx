import { getItem } from "localforage";
import { useState } from "react";
import { FaCartShopping } from "react-icons/fa6";
import { useOutletContext } from "react-router-dom";
import swal from "sweetalert";

const AddToCartItem = ({ cart }) => {
    const [refresh, setRefresh] = useOutletContext();
    console.log(refresh)
    const [count, setCount] = useState(0);
    const { id, brand, price, image_url, tag } = cart || {};

    const handleAddToCart = () => {

        const addedCart = [];

        const addToCartItem = JSON.parse(localStorage.getItem('addCart'));

        if (!addToCartItem) {
            addedCart.push(cart);
            localStorage.setItem('addCart', JSON.stringify(addedCart));
            swal("Success!", "Your Product is added successfully", "success");
            setRefresh(!refresh)
        }
        else {

            const isExist = addToCartItem.find(cart => cart.id === id);

            if (!isExist) {
                addedCart.push(...addToCartItem, cart);
                localStorage.setItem('addCart', JSON.stringify(addedCart));
                swal("Success!", "Your Product is added successfully", "success");
            }
            else {
                swal("Error!", "No Duplicate", "error");
            }
        }
    }

    return (
        <div className="max-w-7xl mx-auto px-4">
            <a href="#" className="flex flex-col items-center rounded-lg shadow md:flex-row md:max-w-xl lg:mt-20 mt-20">
                <img className="object-cover w-full rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-s-lg py-10 bg-[#f7f7f7] p-4" src={image_url} alt="" />
                <div className="flex flex-col justify-between p-4 leading-normal">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight">{brand}</h5>
                    <p className="text-black">${price}</p>
                    <div className="my-4 font-bold">
                        <button onClick={handleAddToCart} className="text-base bg-[#f7f7f7] text-black border border-black px-4 py-2 flex items-center justify-center hover:bg-black hover:text-white transition-colors">
                            <FaCartShopping className="mr-2" /> Buy Now
                        </button>

                    </div>
                </div>
            </a>
        </div>
    );
};

export default AddToCartItem;
