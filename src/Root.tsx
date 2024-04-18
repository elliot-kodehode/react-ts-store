import { Outlet } from "react-router-dom";
import Navbar from "./components/NavBar/NavBar.tsx";
import {createContext, useEffect, useState} from "react";
import {Product, ContextType} from "./types/types.ts";
import Loader from "./components/Loader.tsx";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage.tsx";
import Cart from "./components/Cart/Cart.tsx";
import axios from "axios";


const PageContext = createContext<ContextType>({
    products: [],
    addToCart: () => {},
    cart: []
});

export default function Root() {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [displayCart, setDisplayCart] = useState<boolean>(false);
    const [cart, setCart] = useState<Product[]>(JSON.parse(localStorage.getItem("storedCart") || "[]"));

    useEffect(() => {

        const fetchData = async () => {

            try {
                setLoading(true)
                const response = await axios("https://fakestoreapi.com/products");
                const data = await response.data;
                setProducts(data);
                setLoading(false)

            } catch (error) {
                setError(true)
            }
        }
        fetchData()
    }, [])

    const addToCart = (product: Product) => {
        // Checks if the product id matches an id already in the cart (Need to change this so it adds switches to x2 of product or something)
        cart.some(newProduct => newProduct.id === product.id)
            ? console.log("Product already added.")
            : setCart(prevCart => [...prevCart, product]);
    };

    useEffect(() => {
        localStorage.setItem("storedCart", JSON.stringify(cart));
    }, [cart]);

    const toggleCart = () => {
        setDisplayCart(!displayCart);
    }

    if (error) return <NotFoundPage />
    if (loading) return <Loader />

    return (
        <PageContext.Provider value={{ products, addToCart, cart }}>
            <Navbar toggleCart={toggleCart} />
            <Outlet />
            <Cart displayCart={displayCart} />
        </PageContext.Provider>
    )
}

export { PageContext };