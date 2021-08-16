import styles from "./Contact.module.css";

export default function Contact(params) {
    return  <div id="contact" className={styles.container}>
                <h1 className={styles.content}><a href="mailto:me@juanaragon.co">me@juanaragon.co</a></h1>
            </div>
}