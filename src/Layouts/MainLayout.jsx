import { Outlet } from "react-router-dom";
import {Link} from "react-router-dom";
import styles from "./MainLayout.module.css"

export default function MainLayout(){
    return(
        <>
            <header className={styles.Header}>
                <Link to={"/"}>
                    <h1>Blog</h1>
                </Link>
                <Link to={"/create-post"}>
                    Create Post
                </Link>
            </header>

            <Outlet/>

        </>
    )
}