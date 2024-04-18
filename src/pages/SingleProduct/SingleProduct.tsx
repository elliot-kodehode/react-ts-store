import {useContext, useEffect, useState} from "react";
import {Product} from "../../types/types.ts";
import {useParams} from "react-router-dom";
import styles from "./singleproduct.module.css"
import HalfRating from "../../components/Rating.tsx";
import NotFoundPage from "../NotFoundPage/NotFoundPage.tsx"
import {PageContext} from "../../Root.tsx";
import Loader from "../../components/Loader.tsx";


export default function SingleProduct() {
    const [error, setError]  = useState<boolean>();
    const [loading, setLoading] =useState<boolean>(false);
    const { productId  } = useParams();
    const { addToCart, products } = useContext(PageContext)!;

    const product = products.find((p) => p.id === parseInt(productId, 10));

    function handleAddToCart(){
        addToCart(product)
    }



    // if (product?.id === 1) {product.description.concat(" utility backpack!")}
    if (error) return <NotFoundPage />
    if (loading) return <Loader />

    return (
        <div className={styles.SingleProduct}>
            {product && (
                <>
                    <img src={product.image} alt={product?.title} className={styles.productImg}/>
                    <div className={styles.infoContainer}>
                        <h2 className={styles.title}>{product.title}</h2>
                        <div className={styles.reviews}>
                            <HalfRating rate={product.rating.rate}/>
                            <p className={styles.reviewText}>{product.rating.count} reviews</p>
                        </div>
                        <hr />
                        <h2 className={styles.price}>{product.price} €</h2>
                        <p className={styles.description}>
                            {product.description}
                            {product?.id === 1 ? " utility backpack!" : ""}
                        </p>
                        <hr />
                        <h5 className={styles.category}>{product.category}</h5>
                        <div className={styles.checkoutWrapper}>
                            <button className={styles.cartBtn}
                                    onClick={handleAddToCart}
                            >Add to cart</button>
                            <button className={styles.wishBtn}><span style={{fontSize: 34}}>♡</span><p>Add to wishlist</p></button>
                        </div>
                        <p className={styles.info}>Standard delivery 3-5 working days</p>
                    </div>
                </>
            )}
        </div>
    )
}