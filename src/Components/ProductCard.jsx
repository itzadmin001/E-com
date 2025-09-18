import React, { useContext } from "react";
import { SlHandbag } from "react-icons/sl";
import { getStarArray } from "../Utils/helper";
import { FcLike } from "react-icons/fc";
import { MdFavoriteBorder } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../Reducers/CartSlice";
import { Main } from "../MainContext";
import { AddToWishlist, RemoveToWishlist } from "../Reducers/WishlistSlice";
import { useNavigate } from "react-router-dom";

function ProductCard({ product, title }) {

    const wishlist = useSelector(state => state.wishlist.data)
    const { notify, setCartOpen } = useContext(Main)
    const stars = getStarArray(product.rating);
    const dispatch = useDispatch()
    const navigate = useNavigate()


    const isInWishlist = wishlist.some(item => item.pId === product.id);



    const HandleCartInfo = () => {

        dispatch(addToCart({ pId: product.id, price: product.price, image: product.image, name: product.name, description: product.description }))
        notify("Add In Cart", "success")
        setCartOpen(true)

    }




    const handleWishlistToggle = () => {
        if (isInWishlist) {
            dispatch(RemoveToWishlist({ pId: product.id }));
        } else {
            dispatch(AddToWishlist({
                pId: product.id,
                name: product.name,
                price: product.price,
                image: product.image,
                description: product.description,
                rating: product.rating
            }));
        }
    };







    // Grid Layout
    if (title === "grid") {
        return (
            <div onClick={() => navigate(`/product-details/${product.id}`)} className="group relative bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer">
                <div className="relative w-full h-66 overflow-hidden">
                    <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full bg-[#88929F] object-cover object-center transform group-hover:scale-105 transition-transform duration-500"
                    />

                    <button onClick={(e) => {
                        e.stopPropagation()
                        handleWishlistToggle()
                    }} className="absolute cursor-pointer top-3 right-3 bg-white rounded-full p-2 shadow-sm hover:bg-gray-400 transition">
                        {
                            isInWishlist ? <FcLike /> :
                                <MdFavoriteBorder />
                        }
                    </button>


                </div>

                <div className="p-4 ">
                    <h3 className="text-gray-900 font-medium text-lg truncate font-[Silkscreen]">{product.name}</h3>
                    <p className="text-gray-500 text-sm mt-1 truncate font-[Raleway]">{product.description}</p>

                    <div className="flex sm:flex-row flex-col sm:items-center justify-center gap-2 mt-3 font-[Raleway]">
                        <div className="flex sm:items-center justify-center  gap-1">
                            {stars.map((filled, idx) => (
                                <svg key={idx} viewBox="0 0 24 24" width="10" height="10" className={`${filled ? "text-yellow-400" : "text-white stroke-gray-300"} stroke-1`}>
                                    <path fill={filled ? "currentColor" : "none"} stroke={filled ? "none" : "#d1d5db"} d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.787 1.402 8.176L12 18.896l-7.336 3.864 1.402-8.176L.132 9.21l8.2-1.192z" />
                                </svg>
                            ))}
                        </div>

                        <span className="text-gray-900 font-semibold text-lg sm:ml-auto text-center ">${product.price}</span>

                        <div onClick={(e) => {
                            e.stopPropagation()
                            HandleCartInfo()
                        }} className=" flex items-center justify-center cursor-pointer border-[1px] rounded-full p-2 shadow-sm hover:bg-gray-800 transition text-gray-700 hover:text-white">
                            <button >
                                <SlHandbag />
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        );
    }

    // Row Layout
    return (
        <div onClick={() => navigate(`/product-details/${product.id}`)} className="flex bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer">
            {/* Left: Image */}
            <div className="relative w-48 min-w-48 h-48 flex-shrink-0 overflow-hidden">
                <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover bg-[#88929F] transition-transform duration-500"
                />
                <button onClick={(e) => {
                    e.stopPropagation()
                    dispatch(AddToWishlist({ pId: product.id, name: product.name, price: product.price, image: product.image, description: product.description, rating: product.rating }))
                }} className="absolute cursor-pointer top-3 right-3 bg-white rounded-full p-2 shadow-sm hover:bg-gray-800 transition">
                    <MdFavoriteBorder />
                </button>
            </div>
            {/* Right: Details */}
            <div className="flex flex-col justify-between p-6 flex-1">
                <div>
                    <h3 className="text-gray-900 font-semibold text-xl mb-1 font-[Silkscreen]">{product.name}</h3>
                    <p className="text-gray-500 text-base mb-2 font-[Raleway]">{product.description}</p>
                    <div className="flex items-center gap-2 mb-2 font-[Raleway]">
                        {stars.map((filled, idx) => (
                            <svg key={idx} viewBox="0 0 24 24" width="10" height="10" className={`${filled ? "text-yellow-400" : "text-white stroke-gray-300"} stroke-1`}>
                                <path fill={filled ? "currentColor" : "none"} stroke={filled ? "none" : "#d1d5db"} d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.787 1.402 8.176L12 18.896l-7.336 3.864 1.402-8.176L.132 9.21l8.2-1.192z" />
                            </svg>
                        ))}
                        <span className="text-gray-600 text-sm ml-2">({product.rating})</span>
                    </div>
                </div>
                <div onClick={(e) => {
                    e.stopPropagation()
                    HandleCartInfo()

                }} className="flex items-center justify-between mt-4">
                    <span className="text-gray-900 font-bold text-2xl">${product.price}</span>
                    <button className="cursor-pointer border-[1px] rounded-full p-3 shadow-sm hover:bg-gray-800 transition text-gray-700 hover:text-white">
                        <SlHandbag size={22} />
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ProductCard;