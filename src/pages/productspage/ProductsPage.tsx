import {useContext} from "react";
import {ProductCard} from "./productcard/ProductCard.tsx";
import styles from "./productspage.module.css"
import { PageContext } from "../../Root.tsx"


export default function Products() {

    const { products} = useContext(PageContext)!;

    return (
        <>
            <div className={styles.productsContainer}>
                {products.map((product) => (
                    <ProductCard product={product} key={product.id}/>
                ))}
            </div>
        </>
    )
}