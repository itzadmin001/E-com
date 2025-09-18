import { createContext, useState } from "react"
import products from "./Data/Product"
import { ToastContainer, toast } from 'react-toastify';

const Main = createContext()

function MainContext(props) {
    const [cartOpen, setCartOpen] = useState(false);
    const [Products, SetProducts] = useState([])
    const notify = (msg, flag) => toast(msg, { type: flag });



    const FetchProduct = () => {
        SetProducts(products)
    }


    return (
        <Main.Provider value={{ cartOpen, setCartOpen, Products, notify, FetchProduct }}>
            <ToastContainer />
            {props.children}
        </Main.Provider>
    )
}

export default MainContext
export { Main }
