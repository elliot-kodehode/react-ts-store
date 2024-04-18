import styles from "./cart.module.css"
import {useState, useEffect, useContext} from "react";
import {PageContext} from "../../Root.tsx";


interface Props {
    displayCart: boolean,
}

export default function Cart( props: Props) {
    const [totalPrice, setPrice] = useState<number>(0);
    const { cart } = useContext(PageContext)!;

    useEffect(() => {
        let totalPrice = 0;
        cart.forEach((product) => {
            totalPrice += product.price;
        });
        setPrice(parseInt(totalPrice.toFixed(2)));
    }, [cart]);

    return (
        <div className={ props.displayCart ? styles.showCart : styles.hideCart }>
            <h2 className={styles.header}>Your Cart:</h2>
            {cart.map((product) => (
                <div key={product.id} className={styles.product}>
                    <img src={product.image} alt={product.title} style={{
                        width: 50,
                    }}/>
                    <div className={styles.cartInfo}>
                        <h4>{product.title}</h4>
                        <h4>{product.price}€</h4>
                    </div>
                </div>
            ))}
            <h3 className={styles.totalPrice}>Total price: {totalPrice}€</h3>
        </div>
    )
}