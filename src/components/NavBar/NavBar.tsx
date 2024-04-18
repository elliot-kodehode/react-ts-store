
import {NavLink} from "react-router-dom";
import styles from "./navbar.module.css"

interface Props {
    toggleCart: () => void
}
export default function Navbar (props : Props) {


    return (
        <div className={styles.Navbar}>

            <div className={styles.leftNav}>
                <h3>react.store</h3>
                <nav className={styles.Links}>
                    <NavLink to={"/"} className={styles.Link}>Home</NavLink>
                    <NavLink to={"/products"} className={styles.Link}>Products</NavLink>
                </nav>
            </div>

            <div className={styles.rigthNav}>
                <button className={styles.cart} onClick={props.toggleCart}>Cart</button>
            </div>
        </ div>
    )
}