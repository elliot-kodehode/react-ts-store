import React from 'react'
import ReactDOM from 'react-dom/client'
import './assets/styles.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Root from "./Root.tsx";
import HomePage from "./pages/homepage/HomePage.tsx";
import ProductsPage from "./pages/productspage/ProductsPage.tsx";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage.tsx";
import SingleProduct from "./pages/SingleProduct/SingleProduct.tsx";


const router = createBrowserRouter([

    {
        element: <Root />,
        errorElement: <NotFoundPage />,
        children: [
            {
                path: "/",
                element: <HomePage />
            },
            {
                path: "/products",
                element: <ProductsPage />,
            },
            {
                path: "/products/:productId",
                element: <SingleProduct />,
            }
        ]
    }
])


ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>,
)
