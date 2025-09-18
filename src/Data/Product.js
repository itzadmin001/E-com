import productImage from "../assets/Images/Bg-2.png";

const products = [
    {
        id: 1,
        name: "Adult Ultra Cotton T-Shirt, Style G2000, Multipack",
        description: "Durable metal carabiners for keys and gear",
        price: 12.0,
        image: "https://tulos.reactbd.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fpyh5dp7x%2Fproduction%2Fb2af7e0b3861d3a0d667beb3adbc2a98c4ef2651-508x491.png&w=1920&q=75",
        category: "T-shirts",
        relatedImg: [
            "https://tulos.reactbd.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fpyh5dp7x%2Fproduction%2Fe69be1ba6ea618c1fbaeb6865e432d112133a883-387x550.png&w=1920&q=75",
            "https://tulos.reactbd.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fpyh5dp7x%2Fproduction%2F138ff8dfc2f42dba2bece2e032262825a5da1915-398x550.png&w=1920&q=75",
            "https://tulos.reactbd.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fpyh5dp7x%2Fproduction%2F537c881b06ad4aa852ef70a6ccffe4afa05b63ba-456x548.png&w=1920&q=75",
            "https://tulos.reactbd.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fpyh5dp7x%2Fproduction%2F19bedcdb7e3123693b4c1fc605590820bd1ebe5a-286x550.png&w=1920&q=75"
        ],
        color: "black",
        rating: 4,
        inStock: true,
        NewArrive: false
    },
    {
        id: 2,
        name: "Athletic Men's Short Sleeve Performance T-Shirt",
        description: "Compact travel bag with multiple pockets",
        price: 32.0,
        image: "https://tulos.reactbd.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fpyh5dp7x%2Fproduction%2F8e90b8ba5cf712dde43179871b3d9513e884d66e-412x606.png&w=1920&q=75",
        category: "T-shirts",
        color: "blue",
        relatedImg: [
            "https://tulos.reactbd.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fpyh5dp7x%2Fproduction%2Fe69be1ba6ea618c1fbaeb6865e432d112133a883-387x550.png&w=1920&q=75",
            "https://tulos.reactbd.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fpyh5dp7x%2Fproduction%2F138ff8dfc2f42dba2bece2e032262825a5da1915-398x550.png&w=1920&q=75",
            "https://tulos.reactbd.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fpyh5dp7x%2Fproduction%2F537c881b06ad4aa852ef70a6ccffe4afa05b63ba-456x548.png&w=1920&q=75",
            "https://tulos.reactbd.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fpyh5dp7x%2Fproduction%2F19bedcdb7e3123693b4c1fc605590820bd1ebe5a-286x550.png&w=1920&q=75"
        ],
        inStock: true,
        rating: 5,
        NewArrive: true
    },
    {
        id: 3,
        name: "Carhartt Men's Relaxed Fit Washed Duck Sherpa",
        description: "Insulated thermos keeps drinks hot or cold",
        price: 13.0,
        image: "https://tulos.reactbd.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fpyh5dp7x%2Fproduction%2F622f59f0296b2052b0b6de02350dd9321acba23c-385x463.png&w=1920&q=75",
        category: "Jacket",
        color: "red",
        relatedImg: [
            "https://tulos.reactbd.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fpyh5dp7x%2Fproduction%2Fe69be1ba6ea618c1fbaeb6865e432d112133a883-387x550.png&w=1920&q=75",
            "https://tulos.reactbd.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fpyh5dp7x%2Fproduction%2F138ff8dfc2f42dba2bece2e032262825a5da1915-398x550.png&w=1920&q=75",
            "https://tulos.reactbd.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fpyh5dp7x%2Fproduction%2F537c881b06ad4aa852ef70a6ccffe4afa05b63ba-456x548.png&w=1920&q=75",
            "https://tulos.reactbd.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fpyh5dp7x%2Fproduction%2F19bedcdb7e3123693b4c1fc605590820bd1ebe5a-286x550.png&w=1920&q=75"
        ],
        inStock: true,
        rating: 3,
        label: "Limited",
        NewArrive: false
    },
    {
        id: 4,
        name: "Hoodies",
        description: "Compact multi-tool set for everyday fixes",
        price: 22.0,
        image: "https://i.pinimg.com/736x/32/3a/b4/323ab41f018ef305bcfd7377f638458b.jpg",
        inStock: true,
        category: "Hoodie",
        relatedImg: [
            "https://i.pinimg.com/1200x/04/0b/90/040b9036695fcf5a553cb717e09ba38e.jpg",
            "https://i.pinimg.com/736x/8d/9e/75/8d9e75208a0c424a62ef2d2212529440.jpg",
            "https://i.pinimg.com/736x/6e/9c/3b/6e9c3b28778c1264a6d4a549b9045640.jpg"

        ],
        color: "green",
        rating: 4,
        NewArrive: false
    },
    {
        id: 5,
        name: "Travel Pouch",
        description: "Organizer pouch for chargers and small items",
        price: 18.0,
        image: "https://i.pinimg.com/1200x/81/db/39/81db394d10d85036ec4c6508adce908f.jpg",
        relatedImg: [
            "https://i.pinimg.com/1200x/ca/8e/ab/ca8eabcbfe9279d70ad82fbc951be120.jpg",
            "https://i.pinimg.com/736x/15/c1/14/15c114f6ee52ad2e9a370889e3cb081f.jpg",
            "https://i.pinimg.com/736x/15/c1/14/15c114f6ee52ad2e9a370889e3cb081f.jpg",
            "https://i.pinimg.com/1200x/b6/32/17/b63217973e47e358bdf69fc572289d65.jpg"

        ],
        category: "Hoodie",
        inStock: true,
        color: "black",
        rating: 2,
        NewArrive: false
    },
    {
        id: 6,
        name: "Insulated Shorts",
        description: "Stainless steel insulated bottle",
        price: 28.0,
        image: "https://i.pinimg.com/736x/f1/32/57/f132573a9ccc787b743225f6e004e566.jpg",
        category: "Short",
        color: "yellow",
        relatedImg: [
            "https://i.pinimg.com/736x/92/12/ea/9212eaa46e8ab0a20e372fcde5f71544.jpg",
            "https://i.pinimg.com/736x/92/12/ea/9212eaa46e8ab0a20e372fcde5f71544.jpg",
            "https://i.pinimg.com/736x/21/44/08/214408c7d445af366b932f6811280aca.jpg",
            "https://i.pinimg.com/736x/a6/f3/05/a6f305a133eccfc8983de011bd82db0b.jpg"

        ],
        inStock: true,
        rating: 5,
        NewArrive: false
    },
    {
        id: 7,
        name: "T-shirts",
        description: "Everyday cap with adjustable strap",
        price: 15.0,
        image: "https://i.pinimg.com/1200x/f3/a7/af/f3a7af1fec5e88e67ef16ce1de224475.jpg",
        category: "T-shirts",
        inStock: true,
        relatedImg: [
            "https://i.pinimg.com/736x/cb/bc/91/cbbc91c8e54fb3c93728d277ff5bcf44.jpg",
            "https://i.pinimg.com/736x/cb/bc/91/cbbc91c8e54fb3c93728d277ff5bcf44.jpg",
            "https://i.pinimg.com/1200x/27/b5/a1/27b5a1602087a7113d58118e357bdc54.jpg",

        ],
        color: "gray",

        rating: 3,
        NewArrive: false
    },
    {
        id: 10,
        name: "Jackets",
        description: "Comfortable cotton tee with printed design",
        price: 20.0,
        image: "https://i.pinimg.com/736x/02/e9/1e/02e91ea0b099c8189aa66acaabc27428.jpg",
        inStock: true,
        category: "Jacket",
        relatedImg: [
            "https://i.pinimg.com/1200x/5a/9c/14/5a9c1426fd346cae6419a0695855ed5f.jpg",
            "https://i.pinimg.com/1200x/5a/9c/14/5a9c1426fd346cae6419a0695855ed5f.jpg",
            "https://i.pinimg.com/1200x/0b/99/2a/0b992ac7443c718a9307bc6f900ed3e1.jpg",
            "https://i.pinimg.com/1200x/0b/99/2a/0b992ac7443c718a9307bc6f900ed3e1.jpg"
        ],
        color: "black",
        rating: 4,
        NewArrive: true
    },
    {
        id: 11,
        name: "Weatherproof Jacket",
        description: "Lightweight jacket for unpredictable weather",
        price: 120.0,
        image: "https://i.pinimg.com/1200x/1c/be/68/1cbe6801097f8860e9b918410f5ea212.jpg",
        category: "Hoodie",
        color: "teal",
        relatedImg: [
            "https://i.pinimg.com/1200x/41/56/00/415600f0bd26c1a8b2b1056b912d2bf4.jpg",
            "https://i.pinimg.com/1200x/64/59/10/645910f0d195d924516892f462bad06c.jpg",
            "https://i.pinimg.com/736x/6d/fe/31/6dfe31c9521413235f53f2d99cf29c8a.jpg",
            "https://i.pinimg.com/1200x/8c/f2/8e/8cf28ea12b5ad5155525a0f9d8a8207b.jpg"
        ],
        rating: 5,
        NewArrive: true
    },
    {
        id: 12,
        name: "Pants",
        description: "Compact earbuds with long battery life",
        price: 55.0,
        image: "https://i.pinimg.com/736x/ce/fb/f3/cefbf34e9f8d94ac4c437bf121359f9a.jpg",
        category: "Pants",
        color: "black",
        relatedImg: [
            "https://i.pinimg.com/736x/10/65/ec/1065eceff01cf441aa89aaa13aaa7c26.jpg",
            "https://i.pinimg.com/736x/ba/1e/be/ba1ebe345dd6e94f7bf7137433e13d93.jpg",
            "https://i.pinimg.com/736x/ba/1e/be/ba1ebe345dd6e94f7bf7137433e13d93.jpg",
            "https://i.pinimg.com/1200x/96/f4/59/96f459e7552a577c93adc29ea7d6c150.jpg"
        ],
        rating: 4,
        NewArrive: true
    },
];

export default products;