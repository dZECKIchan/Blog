import styles from './Header.module.css'

export default function Header({ children }){
    return(
        <header className={styles.Header}>
            <h1>{children}</h1>
        </header>
    )
}
