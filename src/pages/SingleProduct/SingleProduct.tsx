import {useContext} from "react";
import {Params, useParams} from "react-router-dom";
import styles from "./singleproduct.module.css"
import HalfRating from "../../components/Rating.tsx";
import {PageContext} from "../../Root.tsx";
import NotFoundPage from "../NotFoundPage/NotFoundPage.tsx";
import {ContextType, Product} from "../../types/types.ts";


export default function SingleProduct() {
    const { productId  }: Readonly<Params> = useParams();
    const { addToCart, products }: ContextType = useContext(PageContext)!;

    const singleProduct: Product | undefined = products.find((p: Product): boolean => p.id === parseInt(productId!, 10));
    
    function handleAddToCart(){
      if (singleProduct) addToCart(singleProduct)
    }
    
    if (!singleProduct) return <NotFoundPage/>;
    if (singleProduct?.id === 1) {singleProduct.description.concat(" utility backpack!")}

    return (
        <div className={styles.singleProduct}>
            {singleProduct && (
                <>
                    <img src={singleProduct.image} alt={singleProduct?.title} className={styles.productImg}/>
                    <div className={styles.infoContainer}>
                        <h2 className={styles.title}>{singleProduct.title}</h2>
                        <div className={styles.reviews}>
                            <HalfRating rate={singleProduct.rating.rate}/>
                            <p className={styles.reviewText}>{singleProduct.rating.count} reviews</p>
                        </div>
                        <hr />
                        <h2 className={styles.price}>{singleProduct.price} €</h2>
                        <p className={styles.description}>
                            {singleProduct.description}
                            {singleProduct?.id === 1 ? " utility backpack!" : ""}
                        </p>
                        <hr />
                        <h5 className={styles.category}>{singleProduct.category}</h5>
                        <div className={styles.checkoutWrapper}>
                            <button className={styles.cartBtn}
                                    onClick={handleAddToCart}
                            >Add to cart</button>
                        </div>
                        <p className={styles.info}>Standard delivery 3-5 working days</p>
                    </div>
                </>
            )}
        </div>
    )
}