import React, { useEffect } from 'react'
import { FaTimes } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import { Changeqty } from '../Reducers/CartSlice';
import { useNavigate } from 'react-router-dom';

function CartItems({ cartOpen, setCartOpen }) {

    const cart = useSelector(state => state.cart)
    const navigate = useNavigate()
    const dispatch = useDispatch()


    return (
        <>
            {/* Overlay */}
            {cartOpen && (
                <div
                    className="fixed inset-0 bg-black/50 bg-opacity-50 z-40"
                    onClick={() => setCartOpen(false)}
                    aria-hidden="true"
                />
            )}
            {/* Drawer */}
            <aside
                className={`fixed top-0 right-0 h-full bg-white z-50 transform transition-transform duration-300 ease-in-out ${cartOpen ? "translate-x-0" : "translate-x-full"}`}
                style={{ width: "70vw", maxWidth: "420px" }}
            >
                <div className="flex items-center justify-between px-4 py-3 border-b">
                    <span className="text-lg font-bold">Your Cart</span>
                    <button
                        aria-label="Close Cart"
                        onClick={() => setCartOpen(false)}
                        className="p-2 text-gray-700 cursor-pointer rounded-md hover:bg-gray-100"
                    >
                        <FaTimes />
                    </button>
                </div>
                <div className="p-4">
                    {cart.data.length === 0 ? (
                        <div className="text-center py-12">
                            <p className="text-gray-500 text-lg">No items in cart.</p>
                        </div>
                    ) : (
                        <div className="space-y-4">
                            {cart.data?.map((item) => (
                                <div
                                    key={item.pId}
                                    className="flex flex-col sm:flex-row items-center justify-between bg-white shadow-md rounded-2xl p-4 hover:shadow-lg transition duration-300"
                                >
                                    {/* Product Image */}
                                    <div className="flex items-center gap-4 w-full sm:w-2/3">
                                        <img
                                            src={item.image}
                                            alt={item.name}
                                            className="w-20 h-20 object-cover rounded-xl border"
                                        />
                                        <div>
                                            <h3 className="font-semibold text-gray-800 text-lg">
                                                {item.name}
                                            </h3>
                                            <p className="text-gray-500 text-xs">{item.description}</p>
                                            <p className="text-gray-700 font-medium mt-1">${item.price}</p>
                                        </div>
                                    </div>

                                    {/* Quantity and Total */}
                                    <div className="flex flex-col sm:flex-row items-center gap-4 mt-4 sm:mt-0">
                                        <div className="flex items-center gap-3">
                                            <button onClick={() => dispatch(Changeqty({ pId: item.pId, flag: 0, price: item.price }))} className="px-3  cursor-pointer py-1 rounded-lg bg-gray-100 border hover:bg-gray-200">
                                                -
                                            </button>
                                            <span className="px-2 font-semibold text-gray-800">
                                                {item.qty}
                                            </span>
                                            <button onClick={() => dispatch(Changeqty({ pId: item.pId, flag: 1, price: item.price }))} className="px-3 cursor-pointer py-1 rounded-lg bg-gray-100 border hover:bg-gray-200">
                                                +
                                            </button>
                                        </div>

                                    </div>

                                </div>
                            ))}
                            <div className='py-4 w-full font-bold flex items-center justify-between px-5'>
                                <h1>Total</h1>
                                <h3>${cart.total}</h3>
                            </div>
                        </div>
                    )}
                </div>
                <div className="p-4 border-t" >
                    <button onClick={() => {

                        setCartOpen(false)
                        navigate("/check-out")

                    }} className="cursor-pointer bg-black text-white px-6 py-2 rounded-md hover:bg-gray-900 w-full">
                        Checkout
                    </button>
                </div>
            </aside>
        </>
    )
}

export default CartItems