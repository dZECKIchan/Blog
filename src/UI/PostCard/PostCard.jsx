import styles from "./PostCard.module.css"

export default function PostCard({headlineText, descriptionText}){
    return(
        <div className={styles.PostCard}>
            <h1>{headlineText || 'Headline'}</h1>
            <p className={styles.description}>{descriptionText || 'Description'}</p>
        </div>
    )
}