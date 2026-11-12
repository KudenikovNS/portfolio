import styles from "./SectionHeading.module.css";

interface SectionHeadingProps {
    caption: string;
    title: string;
}

// Small caption above a large uppercase section title
export function SectionHeading({caption, title}: SectionHeadingProps) {
    return (
        <div className={styles.heading}>
            <span className={styles.caption}>{caption}</span>
            <h2 className={styles.title}>{title}</h2>
        </div>
    );
}
