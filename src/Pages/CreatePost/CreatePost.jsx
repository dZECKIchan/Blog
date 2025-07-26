import TextInput from "../../UI/TextInput/TextInput.jsx";
import TextArea from "../../UI/TextArea/TextArea.jsx";
import SuccessButton from "../../UI/SuccessButton/SuccessButton.jsx";
import styles from "./CreatePost.module.css"

export default function CreatePost(){
    return(
        <>
            <h1 className={styles.Headline}>Create Post</h1>
            <form>
                <h1>Enter a headline</h1>
                <TextInput/>
                <h1>Enter a description</h1>
                <TextArea/>
                <SuccessButton>Create</SuccessButton>

            </form>
        </>
    )
}