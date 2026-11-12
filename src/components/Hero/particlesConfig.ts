import type {ComponentProps} from "react";
import type Particles from "react-particles";

type ParticlesOptions = ComponentProps<typeof Particles>["options"];

// Floating connected dots behind the hero section (tsparticles options)
export const PARTICLES_CONFIG: ParticlesOptions = {
    fullScreen: {enable: true},
    fpsLimit: 120,
    interactivity: {
        modes: {
            push: {quantity: 4},
            repulse: {distance: 200, duration: 0.4},
        },
    },
    particles: {
        color: {value: "#ffffff"},
        links: {
            color: "#ffffff",
            distance: 150,
            enable: true,
            opacity: 0.2,
            width: 1,
        },
        collisions: {enable: true},
        move: {
            direction: "none",
            enable: true,
            outModes: {default: "bounce"},
            random: false,
            speed: 1,
            straight: false,
        },
        number: {
            density: {enable: true, area: 800},
            value: 80,
        },
        opacity: {value: 0.2},
        shape: {type: "circle"},
        size: {value: {min: 1, max: 5}},
    },
    detectRetina: true,
};
