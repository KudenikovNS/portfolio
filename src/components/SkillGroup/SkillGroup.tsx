import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import styles from "./SkillGroup.module.css";
import type {SkillGroup as SkillGroupData} from "../../types/content";

type SkillGroupProps = SkillGroupData;

// Card with an icon, group name and the skills rendered as chips
export function SkillGroup({icon, name, skills}: SkillGroupProps) {
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
