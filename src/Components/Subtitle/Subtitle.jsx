import styles from './Subtitle.module.css'

export default function Subtitle({ children }){
    return(
        <p className={styles.Subtitle}>{children}</p>
    )
}