import styles from "./cartproduct.module.css";
import {Link} from "react-router-dom";
import {Product} from "../../../types/types.ts";
import AmountPicker from "../AmountPicker/AmountPicker.tsx";

interface Props {
    cartProduct: Product,
}
const cartProduct = (props : Props) => {
    
    return (
    <div key={props.cartProduct.id} className={styles.product}>
        <img src={props.cartProduct.image} alt={props.cartProduct.title} style={{
            width: 50, height: 50, objectFit: "contain"
        }}/>
        <div className={styles.cartInfo}>
            <Link className={styles.productName} to={`./products/${props.cartProduct.id}`}>{
                props.cartProduct.title.length > 26 
                    ? (props.cartProduct.title.slice(0, 26) + "...") 
                    : props.cartProduct.title
            }</Link>
            <h4><span style={{
                // color: "grey",
                fontSize: 14,
                fontWeight: 600
            }}>{props.cartProduct.quantity}x</span> {props.cartProduct.price}€</h4>
        </div>
        <AmountPicker cartProduct={props.cartProduct} />
    </div>
        )
}

export default cartProduct;