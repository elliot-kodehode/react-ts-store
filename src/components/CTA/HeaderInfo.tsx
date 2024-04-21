import styles from "./headerinfo.module.css"
export const HeaderInfo = () => {
    return (
        <div className={styles.container}>
            <h4 className={styles.title}>Check out the newest products in store!</h4>
            <button>Browse Products</button>
        </div>
    )
}