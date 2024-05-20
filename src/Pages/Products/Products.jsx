import React, { useState } from "react";
import Product from "../../Component/Product/Product";

const Products = ({ carts }) => {
    const [selectedCategory, setSelectedCategory] = useState("Latest");

    // Function to filter products based on the selected category
    const filterProducts = (category) => {
        switch (category) {
            case "Latest":
                return carts.filter(cart => cart.tag.includes("latest"));
            case "Special":
                return carts.filter(cart => cart.tag.includes("special"));
            case "Best Sell":
                return carts.filter(cart => cart.tag.includes("best-sell"));
            default:
                return carts;
        }
    };

    const filteredProducts = filterProducts(selectedCategory);

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
                        <button
                            className={`bg-white text-black py-2 px-4 border border-black rounded ${selectedCategory === "Latest" ? "bg-gray-300" : ""}`}
                            onClick={() => setSelectedCategory("Latest")}
                        >
                            Latest
                        </button>
                        <button
                            className={`bg-white text-black py-2 px-4 border border-black rounded ${selectedCategory === "Special" ? "bg-gray-300" : ""}`}
                            onClick={() => setSelectedCategory("Special")}
                        >
                            Special
                        </button>
                        <button
                            className={`bg-white text-black py-2 px-4 border border-black rounded ${selectedCategory === "Best Sell" ? "bg-gray-300" : ""}`}
                            onClick={() => setSelectedCategory("Best Sell")}
                        >
                            Best Sell
                        </button>

                    </div>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
                {filteredProducts.map(cart => (
                    <Product key={cart.id} cart={cart} />
                ))}
            </div>
        </div>
    );
};

export default Products;
