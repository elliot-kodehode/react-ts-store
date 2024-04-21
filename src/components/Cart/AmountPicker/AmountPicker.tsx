import styles from "./amountpicker.module.css"
import {Product} from "../../../types/types.ts";
import {useContext} from "react";
import {PageContext} from "../../../Root.tsx";

interface Props {
    cartProduct: Product,
}
const AmountPicker = (props: Props) => {
    const { incrementAmount, decrementAmount } = useContext(PageContext)!;
    
    const handleIncrementAmount = () => {
        incrementAmount(props.cartProduct);
    }
    
    const handleDecrementAmount = () => {
        decrementAmount(props.cartProduct);
    }
    return (
        <div className={styles.amountPicker}>
            <button onClick={() => handleDecrementAmount()}>-</button>
            <input value={props.cartProduct.quantity} className={styles.amount}/>
            <button onClick={() => handleIncrementAmount()}>+</button>
        </div>
    )
}

export default AmountPicker;