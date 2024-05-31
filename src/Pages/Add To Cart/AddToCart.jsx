import { useEffect, useState } from "react";
import { useLoaderData, useOutletContext, useParams } from "react-router-dom";
import AddToCartItem from "./AddToCartItem";


const AddToCart = () => {
    const [cart, setCart] = useState({})

    const {id} = useParams()
    // console.log(id)

    const addToCart = useLoaderData();

    useEffect(() =>{
        const findAddToCart = addToCart?.find(cart => cart.id.toString() === id)
        setCart(findAddToCart);
    },[addToCart, id])

    return (
        <div>
            <AddToCartItem cart={cart}></AddToCartItem>
        </div>
    );
};

export default AddToCart;