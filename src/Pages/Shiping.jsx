import { useEffect, useState } from "react";

export default function SimpleShipping({ cart: cartProp }) {
    const [cart, setCart] = useState(null);
    const [form, setForm] = useState({
        fullName: "",
        email: "",
        phone: "",
        address: "",
        city: "",
        postalCode: "",
        country: "",
    });
    const [showThanks, setShowThanks] = useState(false);

    useEffect(() => {
        if (cartProp) {
            setCart(cartProp);
            return;
        }
        try {
            const raw = localStorage.getItem("cart");
            setCart(raw ? JSON.parse(raw) : { data: [], total: 0 });
        } catch {
            setCart({ data: [], total: 0 });
        }
    }, [cartProp]);

    useEffect(() => {

        if (cart && Array.isArray(cart.data) && cart.data.length === 0) {
            window.location.replace("/");
        }
    }, [cart]);

    function handleChange(e) {
        const { name, value } = e.target;
        setForm((p) => ({ ...p, [name]: value }));
    }

    function handleSubmit(e) {
        e.preventDefault();
        // simple save
        const payload = { shipping: form, cartSnapshot: cart, savedAt: new Date().toISOString() };
        localStorage.setItem("shippingInfo", JSON.stringify(payload));
        setShowThanks(true);
        setTimeout(() => {
            window.location.replace("/");
        }, 200);
    }

    if (cart === null) return null;

    return (
        <div className="min-h-screen bg-gray-50 p-4 flex items-center justify-center font-[Raleway]">
            <div className="max-w-6xl mx-auto">
                <div className="bg-white rounded-xl shadow p-4 md:p-6">
                    <div className="flex flex-col md:flex-row gap-6">
                        {/* LEFT: Products */}
                        <div className="md:w-1/2">
                            <h2 className="text-lg font-bold mb-4 font-[Cardo]">Your Cart</h2>

                            {cart.data && cart.data.length ? (
                                <div className="space-y-4">
                                    {cart.data.map((item, idx) => (
                                        <div key={item.pId ?? idx} className="flex items-center gap-4 p-3 border rounded-lg">
                                            <img
                                                src={item.image}
                                                alt={item.name}
                                                className="w-20 h-20 object-cover rounded"
                                            />
                                            <div className="flex-1">
                                                <div className="font-medium">{item.name}</div>
                                                <div className="text-sm text-gray-500">{item.description}</div>
                                                <div className="text-sm mt-1">Qty: {item.qty ?? 1}</div>
                                            </div>
                                            <div className="font-semibold">₹{item.price}</div>
                                        </div>
                                    ))}

                                    <div className="mt-4 p-4 rounded-lg bg-gray-100 flex items-center justify-between">
                                        <div className="text-sm text-gray-600">Total</div>
                                        <div className="text-xl font-bold font-[Cardo]">₹{cart.total ?? 0}</div>
                                    </div>
                                </div>
                            ) : (
                                <div className="text-gray-500">No items in cart.</div>
                            )}
                        </div>

                        {/* RIGHT: Form */}
                        <div className="md:w-1/2">
                            <h2 className="text-lg font-semibold mb-4">Shipping Details</h2>

                            <form onSubmit={handleSubmit} className="space-y-3">
                                <input
                                    name="fullName"
                                    value={form.fullName}
                                    onChange={handleChange}
                                    placeholder="Full name"
                                    className="w-full rounded-md border px-3 py-2"
                                    required
                                />

                                <input
                                    name="email"
                                    value={form.email}
                                    onChange={handleChange}
                                    placeholder="Email"
                                    type="email"
                                    className="w-full rounded-md border px-3 py-2"
                                    required
                                />

                                <input
                                    name="phone"
                                    value={form.phone}
                                    onChange={handleChange}
                                    placeholder="Phone"
                                    className="w-full rounded-md border px-3 py-2"
                                    required
                                />

                                <input
                                    name="address"
                                    value={form.address}
                                    onChange={handleChange}
                                    placeholder="Address"
                                    className="w-full rounded-md border px-3 py-2"
                                    required
                                />

                                <div className="grid grid-cols-2 gap-2">
                                    <input
                                        name="city"
                                        value={form.city}
                                        onChange={handleChange}
                                        placeholder="City"
                                        className="rounded-md border px-3 py-2"
                                        required
                                    />
                                    <input
                                        name="postalCode"
                                        value={form.postalCode}
                                        onChange={handleChange}
                                        placeholder="Postal Code"
                                        className="rounded-md border px-3 py-2"
                                        required
                                    />
                                </div>

                                <input
                                    name="country"
                                    value={form.country}
                                    onChange={handleChange}
                                    placeholder="Country"
                                    className="w-full rounded-md border px-3 py-2"
                                    required
                                />

                                <button
                                    type="submit"
                                    className="w-full cursor-pointer bg-indigo-600 text-white py-2 rounded-md font-medium"
                                >
                                    Proceed to Buy
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            {/* simple thank you overlay */}
            {showThanks && (
                <div className="fixed inset-0 z-50 flex items-center justify-center">
                    <div className="bg-white rounded-lg p-6 shadow-lg flex flex-col items-center gap-3">
                        <svg className="w-16 h-16" viewBox="0 0 24 24" fill="none">
                            <path d="M20 6L9 17l-5-5" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <div className="text-lg font-semibold">Thank you for your order!</div>
                        <div className="text-sm text-gray-500">Redirecting...</div>
                    </div>
                </div>
            )}
        </div>
    );
}
