import {Link} from "react-scroll";
import styles from "./Navbar.module.css";
import {NAV_ITEMS, SCROLL_OPTIONS, SECTION_IDS} from "../../data/navigation";

export function Navbar() {
    return (
        <header className={styles.navbar}>
            <Link className={styles.brand} to={SECTION_IDS.hero} {...SCROLL_OPTIONS}>
                Nikita Kudenikov
            </Link>
            <nav className={styles.links}>
                {NAV_ITEMS.map(item => (
                    <Link
                        key={item.target}
                        className={styles.link}
                        activeClass={styles.active}
                        to={item.target}
                        {...SCROLL_OPTIONS}
                    >
                        {item.label}
                    </Link>
                ))}
            </nav>
        </header>
    );
}
