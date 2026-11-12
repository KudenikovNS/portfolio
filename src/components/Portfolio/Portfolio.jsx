import Fade from "react-reveal/Fade";
import styles from "./Portfolio.module.css";
import {SectionHeading} from "../ui/SectionHeading/SectionHeading";
import {ProjectCarousel} from "../ProjectCarousel/ProjectCarousel";
import {PROJECTS} from "../../data/projects";
import {SECTION_IDS} from "../../data/navigation";

const commercialProjects = PROJECTS.filter(project => project.kind === "commercial");
const demoProjects = PROJECTS.filter(project => project.kind === "demo");

export function Portfolio() {
    return (
        <section id={SECTION_IDS.portfolio} className={styles.portfolio}>
            <div className={styles.container}>
                <Fade>
                    <SectionHeading caption={"Portfolio"} title={"My Projects"}/>
                </Fade>
                <Fade>
                    <p className={styles.ndaNote}>
                        * Since some of the commercial projects I participated in are covered by
                        non-disclosure agreements (NDA), my portfolio also includes demonstration
                        projects created to showcase my skills and development approach.
                    </p>
                </Fade>
                <ProjectCarousel projects={commercialProjects} showStackLabel/>

                <div className={styles.demoHeading}>
                    <Fade>
                        <SectionHeading caption={"Demo"} title={"Elements"}/>
                    </Fade>
                </div>
                <ProjectCarousel projects={demoProjects}/>
            </div>
        </section>
    );
}
