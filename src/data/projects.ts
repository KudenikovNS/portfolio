import aiDatalens from "../assets/projects/ai-datalens.png";
import climatiseGlobal from "../assets/projects/climatise-global.png";
import virinTradeOutlook from "../assets/projects/virin-tradeoutlook.png";
import wowhunt from "../assets/projects/wowhunt.jpg";
import kingboost from "../assets/projects/kingboost.jpg";
import boostDealers from "../assets/projects/boostdealers.jpg";
import wheelOfFortune from "../assets/projects/wheel-of-fortune.jpg";
import climatiseSlovenia from "../assets/projects/climatise-slovenia.png";
import myCircus from "../assets/projects/mycircus.jpg";
import virin from "../assets/projects/virin.jpg";
import driveClickBank from "../assets/projects/drive-click-bank.jpg";
import dashboard from "../assets/projects/dashboard.jpg";
import fairyForest from "../assets/projects/fairy-forest-parallax.jpg";
import lemurrr from "../assets/projects/lemurrr.jpg";
import weather from "../assets/projects/weather.jpg";
import gameOfCircles from "../assets/projects/game-of-circles.jpg";
import miniGame from "../assets/projects/mini-game.jpg";
import type {Project} from "../types/content";

// Ordered newest first. Field meanings are documented on the Project type.
export const PROJECTS: Project[] = [
    {
        kind: "demo",
        name: "AI DataLens",
        image: aiDatalens,
        stack: "NestJS, PostgreSQL, Drizzle, AWS, TypeScript, Next.js, React",
        repoUrl: "https://github.com/KudenikovNS/datalens-ai",
    },
    {
        kind: "commercial",
        name: "Climatise Global",
        image: climatiseGlobal,
        description: "Climatise is a carbon accounting platform that automates data collection, emissions calculations and regulatory reporting (SECR, CSRD, ISSB).",
        stack: "Node.js, Python, PostgreSQL, GraphQL, AWS, React, TypeScript, AG Grid, AG Charts, pdfmake",
        liveUrl: "https://climatise.com/",
    },
    {
        kind: "commercial",
        name: "Virin TradeOutlook",
        image: virinTradeOutlook,
        description: "TradeOutlook is an analytics platform that reads global import and export data as an asset class and turns it into benchmark sensitivity, volatility and tariff analytics.",
        stack: "Node.js, PostgreSQL, REST API, AI Agents, AWS Bedrock, Tool Calling, TypeScript, React, Next.js",
        liveUrl: "https://virin-tradeoutlook.com/",
    },
    {
        kind: "commercial",
        name: "WoWHunt",
        image: wowhunt,
        description: "WoWHunt is an online boosting service focused on World of Warcraft (Retail and Classic) and several other popular online games.",
        stack: "Node.js, PostgreSQL, Next.js, TypeScript",
        liveUrl: "https://wowhunt.com/",
    },
    {
        kind: "commercial",
        name: "Kingboost",
        image: kingboost,
        description: "Kingboost is an international online marketplace and boosting service offering paid assistance to players in more than 100 video games.",
        stack: "PHP, Laravel, Node.js, React, TypeScript",
        liveUrl: "https://kingboost.net/",
    },
    {
        kind: "commercial",
        name: "BoostDealers",
        image: boostDealers,
        description: "BoostDealers is an online gaming boosting service and marketplace that connects players directly with boosters.",
        stack: "PHP, Laravel, Blade",
        liveUrl: "https://boostdealers.gg/",
    },
    {
        kind: "demo",
        name: "Wheel of Fortune!",
        image: wheelOfFortune,
        stack: "PixiJS, TypeScript, Vite",
        liveUrl: "https://wheel-of-fortune-delta.vercel.app/",
    },
    {
        kind: "commercial",
        name: "Climatise Slovenia",
        image: climatiseSlovenia,
        description: "Climatise Slovenia is a cloud-based B2B platform for automated carbon accounting and ESG reporting on the Slovenian market, a localized branch of the international Climatise platform.",
        stack: "Next.js, React, TypeScript, Vite",
        liveUrl: "https://climatise.si/",
    },
    {
        kind: "commercial",
        name: "MyCircus",
        image: myCircus,
        description: "MyCircus is a free-to-play social casino platform where users play casino-style games with virtual currency, without any financial investment.",
        stack: "React, TypeScript, JavaScript, Redux Toolkit",
        liveUrl: "https://www.mycircus.net/fr",
    },
    {
        kind: "commercial",
        name: "Virin",
        image: virin,
        description: "Virin is the website of the Slovenian consulting and investment company Virin, svetovanje in investiranje, d.o.o., specializing in building energy efficiency and digital property management.",
        liveUrl: "https://virin.si/",
    },
    {
        kind: "commercial",
        name: "Drive Click Bank",
        image: driveClickBank,
        description: "Drive Click Bank is the official website of the Russian Drive Click Bank LLC (formerly Cetelem Bank), a Sberbank subsidiary specializing in auto loans and consumer lending. Its banking license was revoked in October 2025.",
        stack: "Vue, Swiper, JavaScript",
        liveUrl: "https://www.driveclickbank.ru/",
    },
    {
        kind: "demo",
        name: "Dashboard",
        image: dashboard,
        stack: "React, TypeScript, Redux Toolkit, Recharts, MUI, Vite, Express, Node.js, MongoDB, Render, Vercel",
        liveUrl: "https://dashboardmain-seven.vercel.app/",
        repoUrl: "https://github.com/KudenikovNS/dashboard",
    },
    {
        kind: "demo",
        name: "Fairy Forest Parallax",
        image: fairyForest,
        stack: "JavaScript, GSAP",
        liveUrl: "https://kudenikovns.github.io/fairy-forest-parallax/",
        repoUrl: "https://github.com/KudenikovNS/fairy-forest-parallax",
    },
    {
        kind: "commercial",
        name: "Le'Murrr",
        image: lemurrr,
        description: "Le'Murrr is the official online store of the Russian federal pet supermarket chain of the same name, operating since 1997.",
        stack: "JavaScript, HTML, CSS",
        liveUrl: "https://lemurrr.ru/",
    },
    {
        kind: "demo",
        name: "Weather",
        image: weather,
        stack: "Vue 3",
        liveUrl: "https://kudenikovns.github.io/weather_vue3/",
        repoUrl: "https://github.com/KudenikovNS/weather_vue3",
    },
    {
        kind: "demo",
        name: "Game of Circles",
        image: gameOfCircles,
        stack: "JavaScript, HTML, CSS",
        liveUrl: "https://kudenikovns.github.io/game-of-circles/",
        repoUrl: "https://github.com/KudenikovNS/game-of-circles",
    },
    {
        kind: "demo",
        name: "Mini Game",
        image: miniGame,
        stack: "JavaScript, HTML, CSS",
        liveUrl: "https://kudenikovns.github.io/mini-game/",
        repoUrl: "https://github.com/KudenikovNS/mini-game",
    },
];
