import React from "react";

function About() {
    return (
        <div className="bg-black text-white py-16 px-6 md:px-20">
            {/* Clothing Collection */}
            <div className="grid md:grid-cols-2 gap-10 items-center mb-20">
                <div>
                    <img
                        src="https://i.pinimg.com/1200x/71/14/17/7114179f4bc3769fbd3c9c5950aab721.jpg" // replace with your clothing image
                        alt="Clothing Collection"
                        className="rounded-xl shadow-lg "
                    />
                </div>
                <div>
                    <h2 className="text-4xl  mb-4 font-[Silkscreen] font-bold">Clothing Collection</h2>
                    <p className="text-gray-300 mb-6 font-[Raleway]">
                        Our clothing collection is a blend of style, versatility, and comfort.
                        From trendy <b>hoodies</b> and stylish <b>t-shirts</b> to everyday essentials,
                        we bring you fashion that fits every occasion. Whether it’s casual streetwear
                        or a statement-making outfit, we’ve got you covered.
                    </p>
                    <button className="bg-white text-black px-6 py-2 rounded-lg font-semibold hover:bg-gray-200 font-[Cardo]" >
                        Explore Products
                    </button>
                </div>
            </div>

            {/* Shoes & Bags Collection */}
            <div className="grid md:grid-cols-2 gap-10 items-center mb-20">
                <div className="order-2 md:order-1">
                    <h2 className="text-4xl font-bold mb-4 font-[Silkscreen]">Shoes & Bags Collection</h2>
                    <p className="text-gray-300 mb-6 font-[Raleway]">
                        Step into style with our <b>footwear</b> and elevate your look with
                        premium <b>bags</b>. Designed for comfort, durability, and modern trends,
                        our shoes and accessories perfectly complement your everyday lifestyle.
                        Be it sneakers, casual shoes, or fashion-forward bags – we’ve got it all.
                    </p>
                    <button className="bg-white text-black px-6 py-2 rounded-lg font-semibold hover:bg-gray-200">
                        Explore Shoes & Bags
                    </button>
                </div>
                <div className="order-1 md:order-2">
                    <img
                        src="https://i.pinimg.com/1200x/72/b7/c3/72b7c35f64b7c0099528a9f923a81273.jpg" // replace with your shoes image
                        alt="Shoes Collection"
                        className="rounded-xl shadow-lg "
                    />
                </div>
            </div>

            {/* Fashion Lifestyle */}
            <div className="text-center max-w-3xl mx-auto">
                <h2 className="text-4xl font-bold mb-4 font-[Silkscreen]">Fashion for Every Lifestyle</h2>
                <p className="text-gray-300 mb-6 font-[Raleway]">
                    At <b>YourBrand</b>, we believe fashion is more than just clothing –
                    it’s a reflection of who you are. From casual streetwear to iconic
                    wardrobe staples, our collection is designed to empower your unique style.
                    Join the movement and express yourself with confidence.
                </p>
            </div>
        </div>
    );
}

export default About;
