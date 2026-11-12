import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import styles from "./SkillGroup.module.css";

// Card with an icon, group name and the skills rendered as chips
export function SkillGroup({icon, name, skills}) {
    return (
        <div className={styles.card}>
            <div className={styles.header}>
                <FontAwesomeIcon className={styles.icon} icon={icon}/>
                <h3 className={styles.name}>{name}</h3>
            </div>
            <ul className={styles.chips}>
                {skills.map(skill => <li key={skill} className={styles.chip}>{skill}</li>)}
            </ul>
        </div>
    );
}
