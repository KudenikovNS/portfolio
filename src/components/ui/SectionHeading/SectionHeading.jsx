import styles from "./SectionHeading.module.css";

// Small caption above a large uppercase section title
export function SectionHeading({caption, title}) {
    return (
        <div className={styles.heading}>
            <span className={styles.caption}>{caption}</span>
            <h2 className={styles.title}>{title}</h2>
        </div>
    );
}
