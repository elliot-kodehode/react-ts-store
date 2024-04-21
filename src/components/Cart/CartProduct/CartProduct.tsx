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
        <AmountPicker cartProduct={props.cartProduct} />
        <img src={props.cartProduct.image} alt={props.cartProduct.title} style={{
            width: 50,
        }}/>
        <div className={styles.cartInfo}>
            <Link className={styles.productName} to={`./products/${props.cartProduct.id}`}>{
                props.cartProduct.title.length > 30 
                    ? (props.cartProduct.title.slice(0, 30) + "...") 
                    : props.cartProduct.title
            }</Link>
            <h4>{props.cartProduct.price}€</h4>
        </div>
    </div>
        )
}

export default cartProduct;