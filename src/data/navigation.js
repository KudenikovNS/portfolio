// `target` is the id of the section the link scrolls to.
export const SECTION_IDS = {
    hero: "home",
    expertise: "skills",
    portfolio: "projects",
    contact: "contact",
};

export const NAV_ITEMS = [
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
};
