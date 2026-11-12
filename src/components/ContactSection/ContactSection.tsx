import Fade from "react-reveal/Fade";
import styles from "./ContactSection.module.css";
import {CONTACTS} from "../../data/contacts";
import {SECTION_IDS} from "../../data/navigation";

export function ContactSection() {
    return (
        <section id={SECTION_IDS.contact} className={styles.contact}>
            <div className={styles.container}>
                <Fade bottom>
                    <span className={styles.caption}>say Hello</span>
                    <h2 className={styles.title}>Contact</h2>
                </Fade>
                <Fade bottom>
                    <ul className={styles.list}>
                        {CONTACTS.map(contact => (
                            <li key={contact.label} className={styles.item}>
                                <h3 className={styles.label}>{contact.label}</h3>
                                {contact.href
                                    ? <a className={styles.value} href={contact.href} target="_blank" rel="noreferrer">{contact.value}</a>
                                    : <p className={styles.value}>{contact.value}</p>}
                            </li>
                        ))}
                    </ul>
                </Fade>
            </div>
        </section>
    );
}
