import {Link} from "react-scroll";
import styles from "./CallToAction.module.css";
import {SCROLL_OPTIONS, SECTION_IDS} from "../../data/navigation";

export function CallToAction() {
    return (
        <section className={styles.banner}>
            <div className={styles.content}>
                <h2 className={styles.title}>Let's work together!</h2>
                <Link className={styles.button} to={SECTION_IDS.contact} {...SCROLL_OPTIONS}>
                    Hire me!
                </Link>
            </div>
        </section>
    );
}
