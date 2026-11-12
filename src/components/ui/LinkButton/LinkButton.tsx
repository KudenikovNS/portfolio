import type {ReactNode} from "react";
import styles from "./LinkButton.module.css";

interface LinkButtonProps {
    href: string;
    children: ReactNode;
}

// External link styled as a button; always opens in a new tab
export function LinkButton({href, children}: LinkButtonProps) {
    return (
        <a href={href} className={styles.button} target="_blank" rel="noreferrer">
            {children}
        </a>
    );
}
