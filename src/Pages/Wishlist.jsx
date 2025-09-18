import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { MdDeleteForever } from "react-icons/md";
import { getStarArray } from "../Utils/helper";
import { RemoveToWishlist } from "../Reducers/WishlistSlice";

function Wishlist() {
    const wishlist = useSelector(state => state.wishlist.data || []);
    const dispatch = useDispatch();

    const handleRemove = (id) => {
        dispatch(RemoveToWishlist({ pId: id }));
    };


    return (
        <main className="min-h-screen bg-gray-50 py-10 px-4">
            <section className="max-w-6xl mx-auto">
                <header className="mb-8 text-center mt-20">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">Your Wishlist</h1>
                    <p className="text-gray-500 text-lg">Products you love, all in one place.</p>
                </header>
                {wishlist.length === 0 ? (
                    <div className="text-center py-20">
                        <MdDeleteForever size={60} className="mx-auto text-gray-300 mb-4" />
                        <h2 className="text-2xl font-semibold text-gray-700">No products in your wishlist.</h2>
                        <p className="text-gray-500 mt-2">Start adding your favorite products!</p>
                    </div>
                ) : (
                    <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                        {wishlist?.map((product, i) => (
                            <article
                                key={i}
                                className="group relative bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col"
                                itemScope
                                itemType="http://schema.org/Product"
                            >
                                <div className="relative w-full h-56 overflow-hidden rounded-t-2xl">
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        itemProp="image"
                                        className="w-full h-full object-cover bg-gray-200 group-hover:scale-105 transition-transform duration-500"
                                    />
                                    <button
                                        onClick={() => handleRemove(product.pId)}
                                        className="absolute top-3 cursor-pointer right-3 bg-white rounded-full p-2 shadow hover:bg-red-600 hover:text-white transition"
                                        aria-label="Remove from wishlist"
                                    >
                                        <MdDeleteForever size={22} />
                                    </button>
                                    {product.label && (
                                        <span className="absolute top-3 left-3 bg-gray-800 text-white text-xs font-semibold px-3 py-1 rounded-full">
                                            {product.label}
                                        </span>
                                    )}
                                </div>
                                <div className="p-4 flex-1 flex flex-col">
                                    <h2 className="text-gray-900 font-semibold text-lg mb-1 truncate" itemProp="name">{product.name}</h2>
                                    <p className="text-gray-500 text-sm mb-2 truncate" itemProp="description">{product.description}</p>
                                    <div className="flex items-center gap-2 mb-2">
                                        {getStarArray(product.rating).map((filled, idx) => (
                                            <svg key={idx} viewBox="0 0 24 24" width="16" height="16" className={`${filled ? "text-yellow-400" : "text-white stroke-gray-300"} stroke-1`}>
                                                <path fill={filled ? "currentColor" : "none"} stroke={filled ? "none" : "#d1d5db"} d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.787 1.402 8.176L12 18.896l-7.336 3.864 1.402-8.176L.132 9.21l8.2-1.192z" />
                                            </svg>
                                        ))}
                                        <span className="text-gray-600 text-xs ml-2">({product.rating})</span>
                                    </div>
                                    <div className="mt-auto flex items-center justify-between pt-2">
                                        <span className="text-gray-900 font-bold text-xl" itemProp="offers" itemScope itemType="http://schema.org/Offer">
                                            <meta itemProp="priceCurrency" content="USD" />
                                            <span itemProp="price">${product.price}</span>
                                        </span>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                )}
            </section>
        </main>
    );
}

export default Wishlist;