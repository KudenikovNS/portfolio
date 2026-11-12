import Fade from "react-reveal/Fade";
import styles from "./Expertise.module.css";
import {SectionHeading} from "../ui/SectionHeading/SectionHeading";
import {SkillGroup} from "../SkillGroup/SkillGroup";
import {SKILL_GROUPS} from "../../data/skills";
import {SECTION_IDS} from "../../data/navigation";

export function Expertise() {
    return (
        <section id={SECTION_IDS.expertise} className={styles.expertise}>
            <div className={styles.container}>
                <Fade>
                    <SectionHeading caption={"My resume"} title={"My expertises"}/>
                </Fade>
                <div className={styles.grid}>
                    {SKILL_GROUPS.map(group => (
                        <div key={group.name} className={styles.cell}>
                            <Fade bottom>
                                <SkillGroup icon={group.icon} name={group.name} skills={group.skills}/>
                            </Fade>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
