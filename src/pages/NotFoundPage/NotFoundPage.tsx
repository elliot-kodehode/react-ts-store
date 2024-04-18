import styles from "./notfoundpage.module.css"
import {Link} from "react-router-dom";


export default function NotFoundPage () {

    const refreshPage = () => {
        location.reload();
    }

    return (
        <div className={styles.wrapper}>
            <h1>Oops, looks like something went wrong! :(</h1>
            <h2 onClick={ refreshPage } style={{cursor: "pointer", color: "#ef3030"}}>Try again?</h2>
            <Link to={"/"} style={{color: "black"}}>Or take me back to main page.</Link>
        </div>
    )
}