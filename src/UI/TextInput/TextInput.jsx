import styles from "./TextInput.module.css"

export default function TextInput({ size = 'large'}){
    return (
        <input
            placeholder={"Enter text"}
            maxLength={150}
            className={`${styles[size]} ${styles.TextInput}`}
            type="text"
        />
    )
}