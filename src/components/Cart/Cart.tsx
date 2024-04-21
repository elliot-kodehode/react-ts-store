import styles from "./cart.module.css"
import {useState, useEffect, useContext} from "react";
import {PageContext} from "../../Root.tsx";
import CartProduct from "./CartProduct/CartProduct.tsx";

export default function Cart() {
    const [totalPrice, setPrice] = useState<number>(0);
    const { cart, clearCart } = useContext(PageContext)!;

    useEffect(() => {
        let totalPrice = 0;
        cart.forEach((cartProduct) => {
            totalPrice += cartProduct.price * cartProduct.quantity;
        });
        setPrice(parseInt(totalPrice.toFixed(2)));
    }, [cart]);

    const handleClear = () => {
        clearCart()
    }
    

    return (
        <div className={ styles.showCart }>
            <div className={styles.header}>
            <h2 className={styles.title}>Your Cart:</h2>
            <button className={styles.clearCart} onClick={handleClear}>Clear Cart</button>
            </div>
            
            <div className={styles.cartItems}>
            {cart && cart.map((cartProduct) => (
                    <CartProduct cartProduct={cartProduct}></CartProduct>
            ))}
            </div>
            <h3 className={styles.totalPrice}>Total price: {totalPrice}€</h3>
        </div>
    )
}