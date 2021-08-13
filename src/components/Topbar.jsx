import styles from "./Topbar.module.css";

export default function Topbar(params) {

    return  <div className={styles.topbar}>
                <ul>
                    <li><a href="/curriculum">Curriculum</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </div>
    
}