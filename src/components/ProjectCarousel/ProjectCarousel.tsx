import {useState} from "react";
import Fade from "react-reveal/Fade";
import {Swiper, SwiperSlide} from "swiper/react";
import {EffectCoverflow, Keyboard, Pagination} from "swiper";
import type SwiperCore from "swiper";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronLeft, faChevronRight} from "@fortawesome/free-solid-svg-icons";
import "swiper/css";
import "swiper/css/pagination";
import styles from "./ProjectCarousel.module.css";
import {ProjectCard} from "../ProjectCard/ProjectCard";
import type {Project} from "../../types/content";

interface ProjectCarouselProps {
    projects: Project[];
    showStackLabel?: boolean;
}

const COVERFLOW_EFFECT = {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: false,
};

// 3D coverflow carousel of project cards with round prev/next buttons outside the track
export function ProjectCarousel({projects, showStackLabel = false}: ProjectCarouselProps) {
    const [swiper, setSwiper] = useState<SwiperCore | null>(null);
    const [edges, setEdges] = useState({atStart: true, atEnd: false});

    const updateEdges = (instance: SwiperCore) => {
        setEdges({atStart: instance.isBeginning, atEnd: instance.isEnd});
    };

    const handleInit = (instance: SwiperCore) => {
        setSwiper(instance);
        updateEdges(instance);
    };

    return (
        <div className={styles.carousel}>
            <button
                type="button"
                className={styles.arrow}
                onClick={() => swiper?.slidePrev()}
                disabled={edges.atStart}
                aria-label="Previous project"
            >
                <FontAwesomeIcon icon={faChevronLeft}/>
            </button>

            <div className={styles.track}>
                <Fade bottom>
                    <Swiper
                        effect={"coverflow"}
                        grabCursor={true}
                        slidesPerView={"auto"}
                        centeredSlides={true}
                        keyboard={{enabled: true}}
                        coverflowEffect={COVERFLOW_EFFECT}
                        pagination={{clickable: true}}
                        modules={[EffectCoverflow, Keyboard, Pagination]}
                        onSwiper={handleInit}
                        onSlideChange={updateEdges}
                    >
                        {projects.map(project => (
                            <SwiperSlide key={project.name}>
                                <ProjectCard project={project} showStackLabel={showStackLabel}/>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </Fade>
            </div>

            <button
                type="button"
                className={styles.arrow}
                onClick={() => swiper?.slideNext()}
                disabled={edges.atEnd}
                aria-label="Next project"
            >
                <FontAwesomeIcon icon={faChevronRight}/>
            </button>
        </div>
    );
}
