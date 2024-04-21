
import {NavLink} from "react-router-dom";
import styles from "./navbar.module.css"

interface Props {
    toggleCart: () => void
    displayCart: boolean
}
export default function Navbar (props : Props) {

    

    return (
        <div className={styles.Navbar}>

            <div className={styles.leftNav}>
                <div className={styles.logo}>
                <h3>Estore.</h3>
                </div>
                <nav className={styles.Links}>
                    <NavLink to={"/"} className={styles.Link}>Home</NavLink>
                    <NavLink to={"/products"} className={styles.Link}>Products</NavLink>
                </nav>
            </div>

            <div className={styles.rigthNav}>
                <button className={props.displayCart ? styles.closeCart : styles.openCart } onClick={props.toggleCart}>{props.displayCart ? "ⓧ" : "Cart"}</button>
            </div>
        </ div>
    )
}