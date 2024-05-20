import Product from "../../Component/Product/Product";


const Products = ({ carts }) => {
    return (
        <div className="max-w-7xl mx-auto px-4 py-28">
            <div>
                <div className="flex flex-col lg:flex-row lg:justify-between items-center lg:items-start">
                    <h3 className="block text-black font-bold text-3xl mb-4 lg:text-left">Bravo Sunglass</h3>
                </div>
                <div className="flex flex-col lg:flex-row items-center lg:items-start lg:justify-between">
                    <p className="w-full lg:w-[450px] mb-4 lg:mb-0 lg:mr-8">
                        Experience crystal clear vision and elevated style with our premium collection of eyeglasses.
                    </p>
                    <div className="flex space-x-4">
                        <button className="bg-white text-black py-2 px-4 border border-black rounded">Latest</button>
                        <button className="bg-white text-black py-2 px-4 border border-black rounded">Special</button>
                        <button className="bg-white text-black py-2 px-4 border border-black rounded">Best Sell</button>
                    </div>
                </div>
                
            </div>
            <div className="grid grid-cols-1 md:grid-cols2 lg:grid-cols-3 gap-7">
                    {
                        carts?.map(cart => <Product key={cart.id} cart={cart}></Product>)
                    }
                </div>
        </div>
    );
};

export default Products;
