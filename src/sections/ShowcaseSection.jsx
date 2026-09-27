import React from 'react'
import { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from '@gsap/react';


gsap.registerPlugin(ScrollTrigger);

const ShowcaseSection = () => {
    const sectionRef = useRef(null);
    const project1Ref = useRef(null);
    const project2Ref = useRef(null);
    const project3Ref = useRef(null);
    useGSAP(() => {
        const projects = [project1Ref.current,project2Ref.current,project3Ref.current];
        projects.forEach((card, index) => {
        gsap.fromTo(card, { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 1, delay:   0.3 *(index + 1) , scrollTrigger:{
            trigger: card,
            start: "top bottom-=100",
        }})})
        gsap.fromTo(sectionRef.current ,
            {opacity:0},
            {opacity:1},
            {duration:1.5},
        )
    },[])
  return (
    <section id="work" ref={sectionRef} className='app-showcase'>
        <div className="w-full">
            <div className="showcaselayout">
                {/*Left*/}
                <div className="first-project-wrapper" ref={project1Ref}>
                    <a href="https://obys-wine.vercel.app/" target="_blank" rel="noopener noreferrer">
                        <div className="image-wrapper">
                            <img src="images/reales(2).png" alt="Machine Anyalsis" />
                        </div>
                    </a>
                    <div className="text-content">
                        <h2>Obys Mini Frontend  </h2>
                        <p className='text-white-50 md:text-xl'>
                            CasaDirect is a sleek real estate app designed for seamless property browsing and short-term rentals in Italy. It offers a clean user interface, real-time listings, and location-based search for effortless booking.
                        </p>
                    </div>
                </div>
                {/*Right*/}

                <div className="project-list-wrapper overflow-hidden" >
                    <a href="https://bizora-frontend-one.vercel.app/" target="_blank" rel="noopener noreferrer">
                        <div className="project" ref={project2Ref}>
                            <div className="image-wrapper bg-[#f0f0e5]">
                                <img src="/images/Bizora.png" alt="Machine Anaylsis" />
                            </div>
                            <h2>Bizora - Business Platform (Under Development)</h2>
                        </div>
                    </a>


                    <a href="https://simple-image-editor-black.vercel.app/" target="_blank" rel="noopener noreferrer">
                        <div className="project" ref={project3Ref}>
                            <div className="image-wrapper bg-[#fdfafe] ">
                                <img src="/images/imageEditor.png"  alt="Simple Image Editor" />
                            </div>
                            <h2>Simple Image Editor</h2>
                        </div>
                    </a>




                </div>
            </div>
        </div>
    </section>
  )
}

export default ShowcaseSection