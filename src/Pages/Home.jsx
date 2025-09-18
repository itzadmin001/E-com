import React, { useEffect } from "react";
import BgBunner from "../assets/Images/Bg-2.png";
import ProductCard from "../Components/ProductCard";
import productImage from "../assets/Images/Bg-2.png"
import products from "../Data/Product"
import About from "./About";
import { Link, useNavigate } from "react-router-dom";


function Home() {



    useEffect(() => {
        smoothScrollToTop();

    }, [])

    const smoothScrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    return (
        <>
            <HeroBanner />
            <NewCollection productImage={productImage} products={products} />
            <ExploreNow />
            <About />
        </>
    )
}

const HeroBanner = () => {
    return (
        <section
            className=" w-full min-h-screen bg-center bg-cover flex items-center bg-white"
            aria-label="Hero banner"
        >

            <div className=" w-full mx-auto px-6 py-16 flex flex-col md:flex-row items-center gap-8">
                <div className=" max-w-7xl md:w-1/2 mt-10 md:px-10 px-4">
                    <div >
                        <h2 className="   font-[Cardo] font-bold uppercase sm:text-center md:text-start text-6xl md:text-6xl lg:text-9xl leading-none text-black">
                            Zentro
                        </h2>
                        <div className=" flex flex-col items-center md:items-start leading-none md:ml-20">
                            <h3 className="font-[Cardo] font-bold  text-6xl md:text-6xl lg:text-9xl leading-none text-black">
                                FASHION
                            </h3>
                            <p className="mt-4 font-[Raleway] md:text-start text-center text-sm lg:w-lg lg:text-xl text-black/90">
                                Discover a fashion journey that reflects your unique personality and confidence. Our premium
                                collection is crafted to help you stand out effortlessly in every setting.
                            </p>
                            <div className="mt-6 flex font-[Raleway] flex-row gap-3 w-full sm:w-auto justify-center">
                                <Link
                                    to="/store"
                                    className="inline-flex  items-center justify-center lg:px-6 px-3 py-4  rounded-md bg-black hover:bg-black/90 text-white font-medium shadow-sm hover:shadow-md transition"
                                    aria-label="Buy Product"
                                >
                                    Buy Product
                                </Link>
                                <Link
                                    to="/login"
                                    className="inline-flex items-center font-semibold justify-center lg:px-6 px-3 py-4   rounded-md border border-black text-black bg-white hover:bg-black/20 duration-300 transition"
                                    aria-label="Explore Product"
                                >
                                    Explore Product
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="block rounded-xl " >
                    <img src={BgBunner} alt="hero" className="object-cover w-full md:h-[80vh] h-[50vh] " />
                </div>

            </div>
        </section>
    );
};


const NewCollection = ({ productImage, products }) => {
    const newArrivals = (products || []).filter(p => p.NewArrive);
    const navigate = useNavigate()

    return (
        <section className=" w-full sm:px-10 px-6 min-h-[100vh] bg-white  ">
            <div className=" mx-auto pt-10">
                <div className="flex flex-col md:flex-row items-center justify-between">
                    <div className="md:w-3/2 text-center md:text-left">
                        <h1 className="text-5xl uppercase font-[Silkscreen] font-bold">New Collection</h1>
                    </div>

                    <div className="w-full font-[Raleway] md:w-1/2 mt-4 md:mt-0 text-gray-600 text-justify leading-relaxed text-sm ">
                        <p>
                            Step into the world of fashion, where every collection tells its own story.
                            From bold streetwear to timeless classics, our new arrivals are designed to keep you at the forefront of style.
                            Explore the perfect blend of comfort and trend-setting looks made for those who dare to stand out.
                        </p>
                    </div>
                </div>
            </div>

            <div className="mt-10  grid lg:grid-cols-4 md:grid-cols-3  sm:grid-cols-2 grid-cols-2 sm:gap-10 gap-2">
                {newArrivals.length === 0 ? (
                    <div className="col-span-full text-center py-8">No new arrivals at the moment.</div>
                ) : (
                    newArrivals.map((product, i) => (
                        <ProductCard key={product.id ?? i} product={product} title="grid" />
                    ))
                )}
            </div>

            <div className="flex justify-center items-center mt-10 font-[Raleway]" >
                <button onClick={() => navigate("/shop")} className="bg-black  text-white px-18 py-2 mb-5 cursor-pointer rounded-lg hover:bg-gray-900 transition">
                    Shop
                </button>
            </div>
        </section>
    )
}

const ExploreNow = () => {

    const collections = [
        { name: "Footwear", imgSrc: "https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTAwfHxmYXNoaW9uJTIwRm9vdHdlYXJ8ZW58MHx8MHx8fDA%3D" },
        { name: "Jacket", imgSrc: "https://images.unsplash.com/photo-1646178071012-7bf3efe0ddfa?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZmFzaGlvbiUyMEphY2tldCUyMGltYWdlJTIwYmxhY2t8ZW58MHx8MHx8fDA%3D" },
        { name: "Accesories", imgSrc: "https://images.unsplash.com/photo-1674555201959-58ae7b2d7731?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGZhc2hpb24lMjBBY2Nlc29yaWVzfGVufDB8fDB8fHww" },
        { name: "Headwear", imgSrc: "https://images.unsplash.com/photo-1674979347115-5bd017ef3efe?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", isSpecial: true },
        { name: "Bags", imgSrc: "https://images.unsplash.com/photo-1645276241987-7a7c14bf88f9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D" },
        { name: "Bottoms", imgSrc: "https://plus.unsplash.com/premium_photo-1708110920881-635419c3411f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzd8fGZhc2hpb258ZW58MHx8MHx8fDA%3D" },
    ];
    return (
        <section className="w-full  min-h-[100vh] mx-auto sm:px-10 px-6 py-8 mb-5">
            {/* Top Sale Section */}
            <div className="flex flex-col md:flex-row items-center bg-white  rounded-lg p-6 mb-12">
                <div className="md:w-1/2">
                    <img
                        src="https://images.unsplash.com/photo-1665590099081-234a76c76fd6?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="Jolt Storefront"
                        loading="lazy"
                        className="w-full h-auto rounded-lg"
                    />
                </div>
                <div className="md:w-1/2 mt-6 md:mt-0 md:pl-10">
                    <h1 className="sm:text-4xl text-2xl mb-4 font-[Cardo] font-bold">
                        Find Your Perfect Look at Jolt's Stylish New on Tokyo
                    </h1>
                    <p className="text-gray-600  mb-4 font-[Raleway]">
                        Welcome to the newest Jolt outlet in Shibuya, Japan! Step into our stylish and trendy store and discover the latest in fashion and apparel. Come and experience the unique and vibrant atmosphere.
                    </p>
                    <div className="text-5xl font-extrabold text-black mb-4 font-[Raleway]">50% <span className="text-lg font-normal animate-pulse ">Sale</span></div>
                    <button className="bg-black text-white font-[Raleway] cursor-pointer px-6 py-2 rounded hover:bg-gray-900">
                        See On Map
                    </button>
                </div>
            </div>

            {/* Featured Collections Section */}
            <div className="text-center mb-8 ">
                <h2 className="sm:text-5xl text-2xl font-bold font-[Cardo]">Featured Collections</h2>
                <p className="text-gray-500 mt-2 font-[Raleway]">
                    Dare to mix and match! Check our collections to level up your fashion game.
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-10">
                {collections.map((col, idx) => (
                    <div key={idx} className="relative group rounded-lg overflow-hidden shadow-lg font-[Raleway]">
                        <img
                            src={col.imgSrc}
                            loading="lazy"
                            alt={col.name}
                            className="w-full h-64 object-cover object-top"
                        />
                        <div className="absolute inset-0 bg-black cursor-pointer bg-opacity-30 opacity-0 group-hover:opacity-100 flex flex-col items-center justify-center transition-opacity duration-300">
                            <h3 className="text-white text-xl font-semibold">{col.name}</h3>
                            {col.isSpecial && (
                                <button className="mt-4 bg-white text-black px-4 py-1 rounded">
                                    Discover
                                </button>
                            )}
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-20 flex flex-col md:flex-row items-center justify-between gap-8">

                {/* Left Side: Description */}
                <div className="md:w-1/3 text-gray-600 text-start text-sm leading-relaxed font-[Raleway]">
                    <p>
                        At Jolt, we offer more than just clothing and footwear — we curate a unique collection for your individuality.
                        Thoughtfully designed apparel and footwear combine bold style and comfort, allowing you to make a statement with every step.
                    </p>
                </div>

                {/* Right Side: Heading */}
                <div className="md:w-1/2 text-right">
                    <h1 className="text-5xl uppercase font-extrabold font-[Cardo]">
                        Hoodies and T-Shirt Collection
                    </h1>
                </div>

            </div>
        </section>
    )
}




export default Home;
