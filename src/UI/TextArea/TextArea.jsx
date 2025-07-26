import styles from "./TextArea.module.css"

export default function TextArea({ maxLength }){
    return(
        <>
            <textarea
                className={styles.TextArea}
                placeholder={"Enter text"}
                maxLength={maxLength}
            />
            <br/>
        </>
    )
}