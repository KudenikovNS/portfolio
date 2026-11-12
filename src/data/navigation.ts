import type {NavItem} from "../types/content";

export const SECTION_IDS = {
    hero: "home",
    expertise: "skills",
    portfolio: "projects",
    contact: "contact",
} as const;

export const NAV_ITEMS: NavItem[] = [
    {target: SECTION_IDS.hero, label: "Home"},
    {target: SECTION_IDS.expertise, label: "Expertises"},
    {target: SECTION_IDS.portfolio, label: "Projects"},
    {target: SECTION_IDS.contact, label: "Contact"},
];

// Shared react-scroll settings for every in-page link
export const SCROLL_OPTIONS = {
    duration: 500,
    spy: true,
    smooth: true,
} as const;
