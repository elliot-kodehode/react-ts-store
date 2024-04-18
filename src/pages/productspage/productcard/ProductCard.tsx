import {Product} from "../../../types/types.ts";
import styles from "./productcard.module.css"
import HalfRating from "../../../components/Rating.tsx"
import {Link} from "react-router-dom";
import {useContext} from "react";
import {PageContext} from "../../../Root.tsx";

interface Props {
    product: Product,
    sale?: boolean,
}

export const ProductCard = (props: Props) => {
    const { addToCart } = useContext(PageContext)!;

    const handleAddToCart = () => {
        addToCart(props.product)
    }


    return (
        <div key={props.product.id} className={styles.productWrapper}>
            <div className={styles.imageWrapper}>
                <Link to={`./${props.product.id}`} className={styles.productLink}>
                    <img src={props.product.image} alt={props.product.title} style={{
                        width: 280,
                        height: 280,
                        objectFit: "contain"
                    }} className={styles.productImage}/>
                </Link>
                <button className={styles.favouriteBtn}>♡</button>
            </div>
            <Link to={`./${props.product.id}`} className={styles.productLink}>
                <h3>{props.product.title}</h3>
            </Link>
            <div className={styles.rating}>
                <HalfRating rate={props.product.rating.rate}/>
                <p style={{textDecoration: "underline"}}>{props.product.rating.count} reviews</p>
            </div>
            <Link to={`./${props.product.category.replace(" ", "-").replace("'", "")}`}
                  className={styles.category}>{props.product.category}</Link>
            <h2>{props.product.price + " €"}</h2>
            <button className={styles.cartBtn} onClick={handleAddToCart}>Add to Cart</button>
        </div>
    )
}