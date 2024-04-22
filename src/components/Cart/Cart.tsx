import styles from "./cart.module.css"
import {useState, useEffect, useContext} from "react";
import {PageContext} from "../../Root.tsx";
import CartProduct from "./CartProduct/CartProduct.tsx";

export default function Cart() {
    const [totalPrice, setPrice] = useState<number>(0);
    const { cart, clearCart, toggleCart } = useContext(PageContext)!;

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
    
    const handleDisplay = () => {
        toggleCart()
    }

    return (
        <div className={ styles.showCart }>
            <div className={styles.header}>
                <h3>Items in your cart</h3>
                <button className={styles.clearCart} onClick={handleClear}>Empty Cart</button>
            </div>
            <hr/>
            <div className={styles.cartItems}>
                {cart && cart.map((cartProduct) => (
                    <CartProduct cartProduct={cartProduct}></CartProduct>
            ))}
                {cart.length === 0 && <p>Cart is empty, add some products!</p>}
            </div>
            <hr/>
            <div className={styles.price}>
                <h4 className={styles.totalPrice}>Total price</h4>
                <h4>{totalPrice}€</h4>
            </div>
            <p className={styles.shipping}>Shipping will be calculated at checkout.</p>
            <div className={styles.cartActions}>
                <button className={styles.checkout} onClick={handleClear}>Checkout</button>
                <button className={styles.clearCart} onClick={handleDisplay}>Continue shopping</button>
            </div>
        </div>
    )
}