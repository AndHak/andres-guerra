import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const ShowcaseSection = () => {
    const sectionRef = useRef(null);
    const project1Ref = useRef(null);
    const project2Ref = useRef(null);
    const project3Ref = useRef(null);

    useGSAP(() => {
        
        gsap.fromTo(
            sectionRef.current,
            {
                opacity: 0,
            },
            {
                opacity: 1,
                duration: 2,
            }
        );

        const projects = [
            project1Ref.current,
            project2Ref.current,
            project3Ref.current,
        ];
        projects.forEach((card, index) => {
            gsap.fromTo(
                card,
                {
                    y: 50,
                    opacity: 0,
                },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    delay: 0.5 * (index + 0.5),
                    scrollTrigger: {
                        trigger: card,
                        start: "top bottom-=100",
                    },
                }
            );
        });

    }, []);

    return (
        <div id="work" ref={sectionRef} className="app-showcase">
            <div className="w-full">
                <div className="showcaselayout">
                    {/* left */}
                    <div className="first-projects-wrapper" ref={project1Ref}>
                        <div className="image-wrapper">
                            <img src="/images/project1.png" alt="SafeCit" />
                        </div>
                        <div className="text-content">
                            <h2>
                                Drive safe around the city and locate your
                                vehicle wherever you are with SafeCit
                            </h2>
                            <p className="text-white-50 md:text-xl">
                                An app build with Flutter, Firebase and Mapbox
                                with a friendly design and fast experience
                            </p>
                        </div>
                    </div>

                    {/* right */}
                    <div className="project-list-wrapper overflow-hidden">
                        <div className="project" ref={project2Ref}>
                            <div className="image-wrapper bg-[#ffefdb]">
                                <img src="/images/project2.png" alt="" />
                            </div>
                            <h2>Start up</h2>
                        </div>

                        <div className="project" ref={project3Ref}>
                            <div className="image-wrapper bg-[#ffe7eb]">
                                <img src="/images/project3.png" alt="" />
                            </div>
                            <h2>Start up</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShowcaseSection;
