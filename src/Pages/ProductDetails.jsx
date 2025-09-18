// src/pages/ProductDetails.jsx
import { useContext } from "react";
import { useParams } from "react-router-dom";
import { Main } from "../MainContext";
import {
    FiHeart,
    FiTruck,
    FiCreditCard,
    FiShare2,
    FiHelpCircle,
    FiDroplet,
} from "react-icons/fi";
import { FcLike } from "react-icons/fc";
import { useDispatch, useSelector } from "react-redux";
import { AddToWishlist, RemoveToWishlist } from "../Reducers/WishlistSlice";
import { addToCart } from "../Reducers/CartSlice";

function ProductDetails() {

    const { id } = useParams();
    const { Products, notify, setCartOpen } = useContext(Main);
    const wishlist = useSelector(state => state.wishlist.data)
    const dispatch = useDispatch()

    const product = Products.find((item) => item.id === Number(id));
    const isInWishlist = wishlist.some(item => item.pId === product.id);

    if (!product) {
        return (
            <div className="min-h-screen flex items-center justify-center text-gray-700 text-xl">
                Product not found!
            </div>
        );
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


    const HandleCartInfo = () => {
        dispatch(addToCart({ pId: product.id, price: product.price, image: product.image, name: product.name, description: product.description }))
        notify("Add In Cart", "success")
        setCartOpen(true)
    }

    return (
        <section className="max-w-7xl mx-auto px-4 py-10 min-h-[100vh] font-[Raleway]">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-20">
                {/* LEFT IMAGE SECTION */}
                <div>
                    {/* Main Product Image */}
                    <div className="w-full h-[400px] md:h-[500px] rounded-lg overflow-hidden shadow-lg bg-white">
                        <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-full object-cover"
                            loading="lazy"
                        />
                    </div>

                    {/* Related Images */}
                    <div className="flex gap-3 mt-4 overflow-x-auto">
                        {product.relatedImg?.map((img, index) => (
                            <div
                                key={index}
                                className="w-20 h-20 rounded-lg overflow-hidden border cursor-pointer hover:border-gray-800 transition flex-shrink-0"
                            >
                                <img
                                    src={img}
                                    alt={`${product.name}-${index}`}
                                    className="w-full h-full object-cover"
                                    loading="lazy"
                                />
                            </div>
                        ))}
                    </div>
                </div>

                {/* RIGHT PRODUCT DETAILS */}
                <div className="flex flex-col justify-between">
                    <div>
                        {/* Title */}
                        <h1 className="text-3xl font-bold text-gray-900 ">{product.name}</h1>

                        {/* Price and Discount */}
                        <div className="flex items-center gap-3 mt-2">
                            <span className="text-2xl font-semibold text-gray-800">
                                ${product.price.toFixed(2)}
                            </span>
                            <span className="text-gray-500 line-through text-lg">
                                ${(product.price + 3.4).toFixed(2)}
                            </span>
                        </div>

                        {/* Stock Status */}
                        <div className="mt-3">
                            {product.inStock ? (
                                <span className="bg-green-100 text-green-700 px-3 py-1 rounded-md text-sm font-medium">
                                    In Stock
                                </span>
                            ) : (
                                <span className="bg-red-100 text-red-700 px-3 py-1 rounded-md text-sm font-medium">
                                    Out of Stock
                                </span>
                            )}
                        </div>

                        {/* Description */}
                        <p className="mt-5 text-gray-600 leading-relaxed">
                            {product.description}
                        </p>
                    </div>

                    {/* Actions */}
                    <div className="mt-6">
                        <div className="flex gap-4">
                            <button onClick={HandleCartInfo}
                                className="flex-1 cursor-pointer bg-gray-900 text-white py-3 rounded-lg hover:bg-gray-800 transition font-medium"
                                aria-label="Add to cart"
                            >
                                Add to Cart
                            </button>
                            <button onClick={handleWishlistToggle}
                                className="p-3 border cursor-pointer rounded-lg hover:bg-gray-100 transition"
                                aria-label="Add to wishlist"
                            >
                                {
                                    isInWishlist ? <FcLike size={22} /> :
                                        <FiHeart className="w-5 h-5 text-gray-700" />
                                }
                            </button>
                        </div>

                        {/* Extra Options */}
                        <div className="mt-6 border-t pt-5 space-y-4">
                            <div className="flex flex-wrap gap-6 text-gray-700 text-sm">
                                <div className="flex items-center gap-2">
                                    <FiDroplet className="w-4 h-4" />
                                    Compare Color
                                </div>

                                <div className="flex items-center gap-2">
                                    <FiHelpCircle className="w-4 h-4" />
                                    Ask a Question
                                </div>

                                <div className="flex items-center gap-2">
                                    <FiTruck className="w-4 h-4" />
                                    Delivery & Return
                                </div>

                                <div className="flex items-center gap-2">
                                    <FiShare2 className="w-4 h-4" />
                                    Share
                                </div>
                            </div>
                        </div>

                        {/* Features Section */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                            <div className="p-4 border rounded-lg text-center">
                                <p className="font-semibold">Free Shipping</p>
                                <p className="text-gray-600 text-sm">On orders over $120</p>
                            </div>
                            <div className="p-4 border rounded-lg text-center">
                                <p className="font-semibold">Flexible Payment</p>
                                <p className="text-gray-600 text-sm">
                                    Pay with multiple credit cards
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ProductDetails;
