import { useContext, useEffect, useMemo, useState, useCallback } from "react";
import BunnerImage from "../assets/Images/Bg-1.webp";
import ProductCard from "../Components/ProductCard";
import { Main } from "../MainContext";

import { BsGrid3X3GapFill } from "react-icons/bs";
import { FaThList } from "react-icons/fa";


function Store() {
    const { Products = [] } = useContext(Main);

    useEffect(() => {
    }, [Products]);

    return (
        <>
            <HeroBunner />
            <ProductListing Products={Products} />
        </>
    );
}

const HeroBunner = () => {
    return (
        <section className="w-full  bg-cover bg-center relative ">
            <div className="w-full sm:h-[90vh] h-[70vh] relative">
                <img src={BunnerImage} alt="" className="object-cover w-full h-full" />
                <div className="absolute z-10 top-0 w-full h-full flex flex-col justify-center items-center bg-opacity-40 text-white text-center px-4">
                    <h1 className="text-6xl md:text-6xl font-bold mb-4 font-[Cardo]">Welcome to Our Store</h1>
                    <p className="text-lg md:text-2xl mb-8 font-[Raleway]">Discover the best Products curated just for you</p>
                </div>
            </div>
        </section>
    );
};

const ProductListing = ({ Products = [] }) => {


    const categories = useMemo(() => {
        if (!Products || Products.length === 0) return [];
        return Array.from(new Set(Products.map((p) => p.category))).filter(Boolean);
    }, [Products]);

    const colors = useMemo(() => {
        if (!Products || Products.length === 0) return [];
        return Array.from(new Set(Products.map((p) => p.color))).filter(Boolean);
    }, [Products]);

    const maxProductPrice = useMemo(() => {
        if (!Products || Products.length === 0) return 0;

        const prices = Products.map((p) => Number(p?.price || 0));
        return prices.length ? Math.max(...prices) : 0;
    }, [Products]);

    const [selectedCategories, setSelectedCategories] = useState([]);
    const [maxPrice, setMaxPrice] = useState(maxProductPrice);
    const [selectedColors, setSelectedColors] = useState([]);
    const [view, setView] = useState("list");
    const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

    useEffect(() => {
        setMaxPrice(maxProductPrice);
    }, [maxProductPrice]);

    const toggleCategory = useCallback((cat) => {
        setSelectedCategories((prev) => (prev.includes(cat) ? prev.filter((c) => c !== cat) : [...prev, cat]));
    }, []);

    const toggleColor = useCallback((c) => {
        setSelectedColors((prev) => (prev.includes(c) ? prev.filter((x) => x !== c) : [...prev, c]));
    }, []);

    const noFiltersApplied = useMemo(() => {
        return selectedCategories.length === 0 && selectedColors.length === 0 && maxPrice === maxProductPrice;
    }, [selectedCategories, selectedColors, maxPrice, maxProductPrice]);

    const filtered = useMemo(() => {
        if (noFiltersApplied) return Products;

        return Products.filter((p) => {
            if (selectedCategories.length && !selectedCategories.includes(p.category)) return false;
            if (selectedColors.length && !selectedColors.includes(p.color)) return false;
            // ensure numeric comparison
            const price = Number(p?.price || 0);
            if (price > maxPrice) return false;
            return true;
        });
    }, [Products, noFiltersApplied, selectedCategories, selectedColors, maxPrice]);

    return (
        <section className="w-full min-h-[70vh] px-4 py-6">
            {/* Mobile filter toggle */}
            <div className="md:hidden mb-4 flex items-center justify-between">
                <button onClick={() => setMobileFiltersOpen((v) => !v)} className="cursor-pointer px-3 py-2 bg-gray-200 rounded">
                    {mobileFiltersOpen ? "Hide Filters" : "Show Filters"}
                </button>
                <div className="flex gap-2">
                    <button onClick={() => setView("grid")} className={`px-3 cursor-pointer  py-2 rounded ${view === "grid" ? "bg-gray-800 text-white" : "bg-white border"}`}><BsGrid3X3GapFill /></button>
                    <button onClick={() => setView("list")} className={`px-3 cursor-pointer py-2 rounded ${view === "list" ? "bg-gray-800 text-white" : "bg-white border"}`}><FaThList /></button>
                </div>
            </div>

            <div className="md:flex md:gap-6">
                {/* Filters - left */}
                <aside className={`md:w-58 w-full md:block ${mobileFiltersOpen ? "block mb-6 " : "hidden md:block"}`}>
                    <div className="bg-white p-4 rounded shadow-sm sticky top-4">
                        <h4 className="font-semibold mb-2">Category</h4>
                        <div className="flex flex-col gap-2 mb-4 font-[Raleway]">
                            {categories.map((cat) => (
                                <label key={cat} className="flex items-center gap-2 cursor-pointer font-semibold">
                                    <input
                                        type="checkbox"
                                        checked={selectedCategories.includes(cat)}
                                        onChange={() => toggleCategory(cat)}
                                        className="cursor-pointer"
                                    />
                                    <span>{cat}</span>
                                </label>
                            ))}
                        </div>

                        <h4 className="font-semibold mb-2 font-[Raleway]">Price (max): ${Math.round(maxPrice)}</h4>
                        <input
                            type="range"
                            min="0"
                            max={maxProductPrice}
                            value={maxPrice}
                            onChange={(e) => setMaxPrice(Number(e.target.value))}
                            className="w-full mb-4"
                        />

                        <h4 className="font-semibold mb-2">Colors</h4>
                        <div className="flex gap-3 flex-wrap font-[Raleway]">
                            {colors.map((col) => {
                                const selected = selectedColors.includes(col);
                                return (
                                    <button
                                        key={col}
                                        onClick={() => toggleColor(col)}
                                        className={`w-4 h-4 cursor-pointer rounded-full ${selected ? "border-2 border-black" : ""}`}
                                        style={{ backgroundColor: col }}
                                        title={col}
                                    />
                                );
                            })}
                        </div>
                    </div>
                </aside>

                {/* Products - right */}
                <div className="flex-1">
                    <div className="hidden md:flex justify-end mb-4">
                        <div className="flex gap-2">
                            <button onClick={() => setView("grid")} className={`px-3  cursor-pointer py-2 rounded ${view === "grid" ? "bg-gray-800 text-white" : "bg-white border"}`}><BsGrid3X3GapFill /></button>
                            <button onClick={() => setView("list")} className={`px-3 cursor-pointer py-2 rounded ${view === "list" ? "bg-gray-800 text-white" : "bg-white border"}`}><FaThList /></button>
                        </div>
                    </div>

                    {filtered.length === 0 ? (
                        <div className="text-center py-16">No Products match the selected filters.</div>
                    ) : view === "grid" ? (
                        <div className="grid gap-6 grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
                            {filtered.map((p) => (
                                <ProductCard key={`${p.id}-${p.name}`} product={p} title="grid" />
                            ))}
                        </div>
                    ) : (
                        <div className="flex flex-col gap-4">
                            {filtered.map((p) => (
                                <div key={`${p.id}-${p.name}`} className="w-full">
                                    <ProductCard product={p} title="row" />
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Store;
