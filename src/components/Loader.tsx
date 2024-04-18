import {ClipLoader} from "react-spinners";


export default function Loader  () {

    return (
        <div style={{
            display: "flex",
            height: "100vh",
            alignItems: "center",
        }}>
            <ClipLoader
                color={"grey"}
                size={150}
                aria-label="Loading Spinner"
                data-testid="loader"
            />
        </div>
    )}
