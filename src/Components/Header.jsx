import { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { LuSearch } from "react-icons/lu";
import { FaRegUser, FaBars, FaTimes } from "react-icons/fa";
import { RiLoginBoxLine } from "react-icons/ri";
import { BsCart4 } from "react-icons/bs"
import { Main } from "../MainContext";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../Reducers/UserSlice";
import CartItems from "./CartItems";

function Header() {
    const [open, setOpen] = useState(false);
    const { cartOpen, setCartOpen } = useContext(Main)
    const user = useSelector(state => state.user.data);
    const cart = useSelector(state => state.cart.data);
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const menu = [
        { name: "Home", link: "/" },
        { name: "Store", link: "/store" },
        { name: "About", link: "/about" },
        { name: "Contact Us", link: "/contact" },
        { name: "Let's work", link: "/wishlist", primary: true },
    ];

    useEffect(() => {
        const prev = document.body.style.overflow;
        document.body.style.overflow = open ? "hidden" : prev || "";
        return () => {
            document.body.style.overflow = prev || "";
        };
    }, [open]);

    return (
        <header className="w-full fixed z-20 top-2 font-[Raleway] font-bold" >
            {/* Center block: logo + nav (centered on page) */}
            <div className="max-w-6xl mx-auto px-4">
                <div className="flex lg:justify-center items-center h-16">
                    <div className="flex items-center gap-6 px-4 bg-black py-2 rounded-md">
                        {/* Logo */}
                        <Link
                            to="/"
                            aria-label="Go to homepage"
                            className="inline-flex items-center"
                        >
                            <span className="bg-black  text-white px-3  py-1 rounded-sm text-lg font-bold tracking-wider">
                                Zentro
                            </span>
                        </Link>

                        {/* Primary nav (visible md+) */}
                        <nav
                            className="hidden md:flex items-center "
                            aria-label="Primary"
                        >
                            <ul className="flex items-center lg:gap-6 gap-2 text-gray-400">
                                {menu.map((item, idx) => (
                                    <li key={idx}>
                                        <Link
                                            to={item.link}
                                            className={
                                                "px-3 py-1 rounded-md transition-colors " +
                                                (item.primary
                                                    ? "bg-gray-700 text-white font-semibold px-4 py-2 hover:bg-gray-600 duration-300"
                                                    : "hover:text-white duration-300")
                                            }
                                        >
                                            {item.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </div>
                    <div onClick={() => setCartOpen(true)} className="ml-2 bg-black cursor-pointer md:block hidden relative rounded-sm text-gray-400 font-semibold py-2 px-3 hover:bg-gray-600 duration-300">
                        <button className="cursor-pointer"
                            aria-label="Cart"
                        >
                            <BsCart4 size={24} />
                            <span className="absolute -top-1  -right-1 inline-flex items-center justify-center bg-red-400 text-white text-xs font-medium rounded-full h-5 w-5">
                                {cart.length}
                            </span>
                        </button>
                    </div>
                </div>
            </div>

            {/* Right-side icons pinned to viewport right edge (hidden on small screens) */}
            <div className="absolute right-6 top-1/2 transform -translate-y-1/2 bg-black hover:text-black hover:bg-white duration-300 hover:border-[1px] rounded-md text-white  items-center gap-2 z-30 md:flex hidden">
                <Link
                    className=" px-3 py-2 rounded-md flex items-center gap-2"
                >
                    <RiLoginBoxLine />
                    {
                        user ? <span onClick={() => dispatch(logout())}>logout</span> : <span onClick={() => navigate("/login")}>Login</span>
                    }

                </Link>

            </div>

            {/* Mobile menu toggle (visible on small screens) */}
            <button
                onClick={() => setOpen(true)}
                aria-controls="mobile-drawer"
                aria-expanded={open}
                className="md:hidden absolute cursor-pointer right-4 top-1/2 transform -translate-y-1/2 text-gray-700 p-2 rounded-md z-40 bg-white/0 hover:bg-gray-100"
                aria-label="Open menu"
            >
                <FaBars />
            </button>

            {/* Mobile side drawer + overlay */}
            {/* overlay */}
            {/* Backdrop */}
            <div
                className={`fixed inset-0 bg-black/40 z-40 transition-opacity duration-300 ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
                aria-hidden={!open}
                onClick={() => setOpen(false)}
            />

            {/* Drawer (from left, ~70% width) */}
            <aside
                id="mobile-drawer"
                className={`fixed left-0 top-0 h-full z-50 transform transition-transform duration-300 ${open ? "translate-x-0" : "-translate-x-full"}`}
                style={{ width: "70%" }}
                aria-hidden={!open}
            >
                <div className="h-full bg-white shadow-lg flex flex-col">
                    {/* Drawer header */}
                    <div className="flex items-center justify-between px-4 py-3 border-b">
                        <div className="inline-flex items-center gap-2">
                            <span className="text-lg font-bold">Zentro</span>
                        </div>
                        <button
                            onClick={() => setOpen(false)}
                            aria-label="Close menu"
                            className="p-2 rounded-md hover:bg-gray-100"
                        >
                            <FaTimes />
                        </button>
                    </div>

                    {/* Drawer content: menu */}
                    <nav className="px-4 py-6 flex-1 overflow-auto" aria-label="Mobile primary">
                        <ul className="flex flex-col gap-3 text-gray-700">
                            {menu.map((item, idx) => (
                                <li key={idx}>
                                    <Link
                                        to={item.link}
                                        onClick={() => setOpen(false)}
                                        className={
                                            "block w-full text-left px-3 py-3 rounded-md transition-colors " +
                                            (item.primary
                                                ? "bg-gray-900 text-white font-semibold"
                                                : "hover:bg-gray-100")
                                        }
                                    >
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    {/* Drawer footer: user actions */}
                    <div className="px-4 py-4 border-t">
                        {!user ? (
                            <button
                                onClick={() => { setOpen(false); navigate("/login"); }}
                                className="w-full py-2 rounded-md bg-black text-white font-semibold"
                            >
                                Login
                            </button>
                        ) : (
                            <button
                                onClick={() => { dispatch(logout()); setOpen(false); }}
                                className="w-full py-2 rounded-md bg-red-600 text-white font-semibold"
                            >
                                Logout
                            </button>
                        )}

                        {/* Optional: quick cart button inside drawer */}
                        <button
                            onClick={() => { setCartOpen(true); setOpen(false); }}
                            className="w-full mt-3 py-2 rounded-md border flex items-center justify-center gap-2"
                        >
                            <BsCart4 />
                            <span>Cart ({cart.length})</span>
                        </button>
                    </div>
                </div>
            </aside>

            <CartItems cartOpen={cartOpen} setCartOpen={setCartOpen} />

        </header >
    );
}

export default Header;
