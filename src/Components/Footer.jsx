import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import FooterImage from "../assets/Images/Bg-1.webp"; // Make sure the image path is correct
import { Link } from "react-router-dom";

function Footer() {


    const menu = [
        {
            name: "Jackets",
            path: "/store/jackets"
        },
        {
            name: "Shirts",
            path: "/store/shirts"


        },
        {
            name: "Knit",
            path: "/store/knit"
        },
        {
            name: "T-shirts",
            path: "/store/t-shirts"
        },
        {
            name: "Accessories",
            path: "/store/accessories"
        }
    ]


    return (
        <footer className="bg-black text-white">

            {/* Newsletter Section */}
            <div
                className="bg-cover  bg-center py-12 px-4 text-center"
                style={{ backgroundImage: `url(${FooterImage})` }}
            >
                <h2 className="text-2xl font-semibold mb-4 font-[Cardo]">Sign Up to Our Newsletter</h2>
                <p className="mb-6 text-gray-300 font-[Raleway]">
                    Get the Latest Beauty Secrets and Trends. Sign Up for Our Newsletter and Stay Informed About All Things Beauty
                </p>
                <form className="flex justify-center flex-col sm:flex-row items-center max-w-xl mx-auto">
                    <input
                        type="email"
                        placeholder="Your Email"
                        className="w-full sm:w-auto px-4 py-2 rounded-l-md text-black focus:outline-none"
                    />
                    <button
                        type="submit"
                        className="bg-white font-[Cardo] cursor-pointer text-black px-6 py-2 rounded-md mt-2 sm:mt-0"
                    >
                        Submit
                    </button>
                </form>
            </div>

            {/* Footer Main Content */}
            <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">
                <div>
                    <h3 className="text-xl font-bold mb-4 font-[Cardo]">ZENTRO</h3>
                    <p className="text-gray-400 font-[Raleway]">
                        Experience the Great Outdoors in Style with Jolt. Shop now and gear up for adventure in Jolt!
                    </p>
                </div>

                <div>
                    <h4 className="font-semibold mb-3 font-[Silkscreen]">Categories</h4>
                    <ul className="flex flex-col  space-y-2 text-gray-400 font-[Raleway]">
                        {
                            menu.map((item, i) => {
                                return (
                                    <Link key={i} to={item.path} className=" cursor-pointer">{item.name}</Link>
                                )
                            })
                        }
                    </ul>
                </div>

                <div>
                    <h4 className="font-semibold mb-3 font-[Silkscreen]">Customer Care</h4>
                    <ul className="space-y-2 text-gray-400 font-[Raleway]">
                        <li>FAQ</li>
                        <li>Shipping</li>
                        <li>Order Status</li>
                        <li>Return & Exchanges</li>
                    </ul>
                </div>

                <div>
                    <h4 className="font-semibold mb-3 font-[Silkscreen]">Company</h4>
                    <ul className="space-y-2 text-gray-400 font-[Raleway]">
                        <li>Privacy</li>
                        <li>Guides</li>
                        <li>Terms of Conditions</li>
                    </ul>
                </div>
            </div>

            {/* Social Icons and Footer Bottom */}
            <div className="border-t border-gray-700 py-6 flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto px-4">
                <div className="flex space-x-4 mb-4 md:mb-0">
                    <a href="https://github.com/itzadmin001" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
                        <FaGithub size={24} />
                    </a>
                    <a href="https://www.linkedin.com/in/yogesh-kumar-558b4b26b/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
                        <FaLinkedin size={24} />
                    </a>
                    <a href="https://www.instagram.com/itz__admin__01/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
                        <FaInstagram size={24} />
                    </a>
                </div>
                <p className="text-gray-500 text-sm font-[Raleway]">
                    © 2023 Jolt Studio, Inc. All Rights Reserved. Call Us On - +12 3323470 | USD $ | English
                </p>
            </div>
        </footer>
    );
}

export default Footer;
