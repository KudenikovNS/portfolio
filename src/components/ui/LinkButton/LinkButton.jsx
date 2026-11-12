import styles from "./LinkButton.module.css";

// External link styled as a button; always opens in a new tab
export function LinkButton({href, children}) {
    return (
        <a href={href} className={styles.button} target="_blank" rel="noreferrer">
            {children}
        </a>
    );
}
