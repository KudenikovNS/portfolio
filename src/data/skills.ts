import {
    faCode,
    faLaptopCode,
    faServer,
    faPalette,
    faSitemap,
    faVial,
    faScrewdriverWrench,
    faRobot,
} from "@fortawesome/free-solid-svg-icons";
import type {SkillGroup} from "../types/content";

// Grouped from the CV. Each group renders as a card with its skills as chips.
export const SKILL_GROUPS: SkillGroup[] = [
    {
        icon: faCode,
        name: "Languages",
        skills: ["JavaScript", "TypeScript", "Python", "PHP"],
    },
    {
        icon: faServer,
        name: "Backend & Data",
        skills: ["Node.js", "Express.js", "Laravel", "PostgreSQL", "MySQL", "MongoDB", "REST API", "WebSocket"],
    },
    {
        icon: faLaptopCode,
        name: "Frontend",
        skills: [
            "React", "Next.js", "Vue 3", "React Native", "Redux Toolkit", "React Query", "Zustand",
            "React Hook Form", "React Router", "Three.js", "PixiJS", "GSAP", "Recharts", "i18n",
            "Bootstrap", "jQuery",
        ],
    },
    {
        icon: faRobot,
        name: "AI & LLM",
        skills: [
            "AI Agents & Tool Calling", "RAG", "LLM Evaluation", "Harness Development", "LLM Guardrails",
            "Prompt Engineering", "AI Data Extraction", "AI Workflow Automation", "AWS Bedrock",
            "Anthropic Claude API", "Claude Code", "Codex", "GitHub Copilot", "n8n",
        ],
    },
    {
        icon: faPalette,
        name: "Layout & UI",
        skills: [
            "HTML5", "CSS3", "SASS/SCSS", "CSS-in-JS", "Tailwind", "MUI", "Responsive Design",
            "Pixel Perfect", "UI/UX Best Practices",
        ],
    },
    {
        icon: faSitemap,
        name: "Architecture",
        skills: ["FSD", "SPA", "Microfrontend", "BEM", "Lazy Loading", "Component-Driven Development"],
    },
    {
        icon: faVial,
        name: "CI/CD & Testing",
        skills: ["GitHub Actions", "Docker", "Playwright", "Jest", "React Testing Library"],
    },
    {
        icon: faScrewdriverWrench,
        name: "Tools",
        skills: [
            "GitHub", "Jira", "Vite", "Webpack", "Babel", "Gulp", "ESLint", "Stylelint", "Prettier",
            "Husky", "Storybook", "Postman", "Figma",
        ],
    },
];
