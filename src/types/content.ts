import type {IconDefinition} from "@fortawesome/fontawesome-svg-core";

export type ProjectKind = "commercial" | "demo";

export interface Project {
    /** "commercial" goes to "My Projects", "demo" goes to "Elements" */
    kind: ProjectKind;
    name: string;
    /** Screenshot URL (imported image) */
    image: string;
    /** One paragraph, phrased as "<Name> is ..." */
    description?: string;
    /** Comma-separated technologies */
    stack?: string;
    liveUrl?: string;
    repoUrl?: string;
}

export interface SkillGroup {
    icon: IconDefinition;
    name: string;
    skills: string[];
}

export interface Contact {
    label: string;
    value: string;
    /** Without href the value renders as plain text */
    href?: string;
}

export interface NavItem {
    /** Id of the section the link scrolls to */
    target: string;
    label: string;
}
