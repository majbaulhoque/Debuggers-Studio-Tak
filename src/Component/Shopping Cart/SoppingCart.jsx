import { useEffect, useState } from "react";
import ShoppingCartItem from "./ShoppingCartItem";


const SoppingCart = ({refresh, setRefresh}) => {
    const [carts, setCarts] = useState([]);
    const [noData, setNoData] = useState('')
    const [isShow, setIsShow] = useState(false)

    useEffect(() =>{
        const addToCartItem = JSON.parse(localStorage.getItem('addCart'));
        if (addToCartItem) {
            setCarts(addToCartItem)
        }
        else{
            setNoData('No Data Found')
        }
    },[]);

    const handleDelete = () =>{
        localStorage.clear();
        setCarts([]);
        setNoData('No Data Found')
    }

    return (
        <div>
            {
                noData ? <p className="h-[70vh] flex justify-center items-center font-bold text-3xl">{noData}</p> : 
                
                <div>
                    {
                        carts.length > 0 && <button onClick={handleDelete} className=" mt-10 text-base bg-[#f7f7f7] text-black border border-black px-4 py-2 items-center justify-center hover:bg-black hover:text-white transition-colors block mx-auto">Delete All</button>
                    }

                <div className="grid grid-cols-1 md:grid-cols-2">
                    {
                        isShow ? carts?.map(cart => <ShoppingCartItem key={cart.id} setRefresh={setRefresh} refresh={refresh} cart={cart}></ShoppingCartItem>) 
                        : 
                        carts?.slice(0,2).map(cart => <ShoppingCartItem key={cart.id} setRefresh={setRefresh} refresh={refresh} cart={cart}></ShoppingCartItem>) 
                    }
                </div>

                <button onClick={() =>setIsShow(!isShow)} className=" mt-10 text-base bg-[#f7f7f7] text-black border border-black px-4 py-2 items-center justify-center hover:bg-black hover:text-white transition-colors block mx-auto">{isShow ? 'See less' : 'See More'}</button>
                </div>
            }
        </div>
    );
};

export default SoppingCart;