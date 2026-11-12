import styles from "./SiteFooter.module.css";

export function SiteFooter() {
    const year = new Date().getFullYear();

    return (
        <footer className={styles.footer}>
            <p className={styles.copyright}>© Kudenikov Nikita {year} | All Rights Reserved</p>
        </footer>
    );
}
