import styles from "./homepage.module.css"
import {NavLink} from "react-router-dom";

export default function HomePage () {
    return (
        <div className={styles.header}>
            <div className={styles.headerContent}>
            <h1>React Mock Store</h1>
            <NavLink to={"./products"}>Browse Products</NavLink>
            </div>
        </div>
    )
}