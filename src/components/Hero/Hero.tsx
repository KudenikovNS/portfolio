import {useCallback} from "react";
import Particles from "react-particles";
import {loadFull} from "tsparticles";
import Fade from "react-reveal/Fade";
import ReactTypingEffect from "react-typing-effect";
import Tilt from "react-tilt";
import styles from "./Hero.module.css";
import {PARTICLES_CONFIG} from "./particlesConfig";
import {SECTION_IDS} from "../../data/navigation";

type ParticlesEngine = Parameters<typeof loadFull>[0];

export function Hero() {
    const initParticles = useCallback(async (engine: ParticlesEngine) => {
        await loadFull(engine);
    }, []);

    return (
        <section id={SECTION_IDS.hero} className={styles.hero}>
            <Particles
                init={initParticles}
                className={styles.particles}
                options={PARTICLES_CONFIG}
            />
            <Fade top>
                <div className={styles.content}>
                    <div className={styles.intro}>
                        <span>Hello, I am</span>
                        <h1 className={styles.name}>Nikita <span className={styles.lastName}>Kudenikov</span></h1>
                        <ReactTypingEffect text={"FullStack Developer"}/>
                    </div>
                    <div className={styles.portrait}>
                        <Tilt options={{max: 25}}>
                            <div className={styles.photo}/>
                        </Tilt>
                        <div className={styles.frame}/>
                    </div>
                </div>
            </Fade>
        </section>
    );
}
