import { Outlet, useLocation } from "react-router-dom";
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
    clearCart: () => {},
    incrementAmount: () => {},
    decrementAmount: () => {},
    cart: [],
    error: false,
    loading: false,
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
                const updatedData = data?.map(p => ({...p, quantity: 0}))
                setProducts(updatedData);
                console.log(updatedData)
                setLoading(false)

            } catch (error) {
                setError(true)
            }
        }
        fetchData()
    }, [])
    
    const addToCart = (product: Product) => {
        const productId = cart.some(newProduct => newProduct.id === product.id);
            productId 
                ? incrementAmount(product)
                : setCart(prevCart => [...prevCart, { ...product, quantity: 1 }]);
    };
    
    const incrementAmount = (product: Product) => {
        setCart(prevCart => prevCart.map(e => (
                e.id === product.id 
                    ? { ...e, quantity: e.quantity + 1 } 
                    : e
        )))
    }
    
    const decrementAmount = (product: Product) => {
        // 
        setCart(prevCart => prevCart.map(e => (
            e.id === product.id
                ? { ...e, quantity: e.quantity - 1 }
                : e
        )))
        
        setCart(prevCart =>
                product.quantity <= 1 
                    ? prevCart.filter(p => p.id !== product.id) 
                    : prevCart
            );
    }
    
    const clearCart = () => {
        localStorage.clear();
        setCart([])
    }

    useEffect(() => {
        localStorage.setItem("storedCart", JSON.stringify(cart));
    }, [cart]);

    const toggleCart = () => {
        
        setDisplayCart(!displayCart);
    }


    const location = useLocation();

    useEffect(() => {
        setDisplayCart(false)
        }, [location]);


        if (error) return <NotFoundPage />
    if (loading) return <Loader />

    return (
        <PageContext.Provider value={{ products, addToCart, cart, clearCart, error, loading, incrementAmount, decrementAmount }}>
            <Navbar toggleCart={toggleCart} displayCart={displayCart}/>
            {/*<HeaderInfo />*/}
            <Outlet />
            {displayCart && <Cart />}
        </PageContext.Provider>
    )
}

export { PageContext };