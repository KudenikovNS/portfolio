import styles from "./ProjectCard.module.css";
import {LinkButton} from "../ui/LinkButton/LinkButton";
import type {Project} from "../../types/content";

interface ProjectCardProps {
    project: Project;
    /** Prefix the stack with "Stack:" (used for commercial projects) */
    showStackLabel?: boolean;
}

export function ProjectCard({project, showStackLabel = false}: ProjectCardProps) {
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
