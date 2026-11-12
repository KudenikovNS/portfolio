import Fade from "react-reveal/Fade";
import {Swiper, SwiperSlide} from "swiper/react";
import {EffectCoverflow, Keyboard, Pagination} from "swiper";
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

// 3D coverflow carousel of project cards
export function ProjectCarousel({projects, showStackLabel = false}: ProjectCarouselProps) {
    return (
        <div className={styles.carousel}>
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
                >
                    {projects.map(project => (
                        <SwiperSlide key={project.name}>
                            <ProjectCard project={project} showStackLabel={showStackLabel}/>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </Fade>
        </div>
    );
}
