import styles from "./ProjectCard.module.css";
import {LinkButton} from "../ui/LinkButton/LinkButton";

export function ProjectCard({project, showStackLabel}) {
    const {name, image, description, stack, liveUrl, repoUrl} = project;

    return (
        <article className={styles.card}>
            <div className={styles.preview} style={{backgroundImage: `url(${image})`}}>
                {liveUrl && <LinkButton href={liveUrl}>view project</LinkButton>}
                {repoUrl && <LinkButton href={repoUrl}>view code</LinkButton>}
            </div>
            <div>
                <h3 className={styles.name}>{name}</h3>
                {description && <p className={styles.description}>{description}</p>}
                {stack && <p className={styles.stack}>{showStackLabel ? `Stack: ${stack}` : stack}</p>}
            </div>
        </article>
    );
}
