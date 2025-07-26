import styles from "./TextInput.module.css"

export default function TextInput({ size = 'larg' }){
    return (
        <input className={`${styles[size]} ${styles.TextInput}`} type="text"/>
    )
}