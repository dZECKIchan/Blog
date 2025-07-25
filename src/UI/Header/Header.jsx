import styles from './Header.module.css'
import { Link } from 'react-router-dom'

export default function Header({ children }){
    return(
        <header className={styles.Header}>
            <Link to={"/"}>
                <h1>{children}</h1>
            </Link>
            <Link to={"/create-post"}>
                Create Post
            </Link>
        </header>
    )
}
