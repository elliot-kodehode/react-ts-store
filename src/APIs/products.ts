// import {useEffect, useState} from "react";
// import {Product} from "../types/types.ts";
//
//
// export default function Root() {
//     const [products, setProducts] = useState<Product[]>([]);
//     const [loading, setLoading] = useState(false);
//     const [error, setError] = useState(false);
//     const [displayCart, setDisplayCart] = useState<boolean>(false);
//
//
//
//     useEffect(() => {
//
//         const fetchData = async () => {
//
//             try {
//                 setLoading(true)
//                 const response = await fetch("https://fakestoreapi.com/products");
//                 const json = await response.json();
//                 setProducts(json);
//                 setLoading(false)
//
//             } catch (error) {
//                 setError(true)
//             }
//         }
//         fetchData()
//     }, [])
//     return ( <>
//         <Navbar toggleCart={toggleCart} />
//     <Outlet />
//     <CartComponent displayCart={displayCart}/>
//     </>)
// }