import { createBrowserRouter, RouterProvider } from "react-router-dom"
import WebsiteMain from "./Pages/WebsiteMain"
import Home from "./Pages/Home"
import About from "./Pages/About"
import Store from "./Pages/Store"
import Contact from "./Pages/Contact"
import Login from "./Pages/Login"
import Signup from "./Pages/SignUp"
import { useContext, useEffect } from "react"
import { useDispatch } from "react-redux"
import { lsToState } from "./Reducers/UserSlice"
import { Main } from "./MainContext"
import { lsToCart } from "./Reducers/CartSlice"
import WishList from "./Pages/Wishlist"
import { WishlistToState } from "./Reducers/WishlistSlice"
import ProductDetails from "./Pages/ProductDetails"
import Shiping from "./Pages/Shiping"

const router = createBrowserRouter([
  {
    path: "/",
    element: <WebsiteMain />,
    children: [
      {
        path: "",
        element: <Home />
      },
      {
        path: "about",
        element: <About />
      },
      {
        path: "store",
        element: <Store />
      },
      {
        path: "contact",
        element: <Contact />
      },
      {
        path: "wishlist",
        element: <WishList />
      },
      {
        path: "/product-details/:id",
        element: <ProductDetails />
      },
      {
        path: "/check-out",
        element: <Shiping />
      }
    ]
  },
  {
    path: "*",
    element: <div>404 Not Found</div>
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/sign-up",
    element: <Signup />
  }

])







function App() {
  const { FetchProduct } = useContext(Main)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(lsToState())
    dispatch(lsToCart())
    dispatch(WishlistToState())

    FetchProduct()



  }, [])

  return (
    <RouterProvider router={router} />
  )
}

export default App
