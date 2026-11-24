import React, { useRef } from 'react';
import { words } from '../constants/index.js';
import AnimatedCounter from '../component/AnimatedCounter/AnimatedCounter.jsx';
import Button from '../component/button.jsx';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const Hero = () => {
    const heroRef = useRef(null);
    const sceneRef = useRef(null);

    useGSAP(() => {
        gsap.fromTo('.hero-text h1', { y: 42, opacity: 0 }, {
            y: 0, opacity: 1, stagger: 0.16, duration: 0.9, ease: 'power3.out',
        });

        const scene = sceneRef.current;
        const canHover = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
        const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (!scene || !canHover || reducedMotion) return;

        const moveX = gsap.quickTo(scene, '--pointer-x', { duration: 0.8, ease: 'power3.out' });
        const moveY = gsap.quickTo(scene, '--pointer-y', { duration: 0.8, ease: 'power3.out' });
        const onMove = (event) => {
            const bounds = heroRef.current.getBoundingClientRect();
            moveX(((event.clientX - bounds.left) / bounds.width - 0.5) * 2);
            moveY(((event.clientY - bounds.top) / bounds.height - 0.5) * 2);
        };
        const onLeave = () => { moveX(0); moveY(0); };
        heroRef.current.addEventListener('pointermove', onMove);
        heroRef.current.addEventListener('pointerleave', onLeave);
        return () => {
            heroRef.current?.removeEventListener('pointermove', onMove);
            heroRef.current?.removeEventListener('pointerleave', onLeave);
        };
    }, { scope: heroRef });

    return (
        <section id="hero" ref={heroRef} className="hero-scene relative overflow-hidden">
            <div className="hero-atmosphere" aria-hidden="true" />
            <div className="hero-grid" aria-hidden="true" />
            <div className="hero-layout">
                <header className="hero-copy flex flex-col justify-center px-5 md:px-12 xl:px-20">
                    <div className="flex flex-col gap-7">
                        <p className="hero-kicker"><span /> Independent web developer <i>—</i> Zlín, CZ</p>
                        <div className="hero-text">
                            <h1 className="hero-title-line hero-title-rotating">
                                <span className="hero-static-word">Shaping</span>
                                <span className="slide">
                                    <span className="wrapper">
                                        {words.map((word, index) => (
                                            <span key={`${word.text}-${index}`} className="hero-word-line">
                                                <span className="hero-word-label">{word.text}</span>
                                                <img src={word.imgPath} alt="" aria-hidden="true" />
                                            </span>
                                        ))}
                                    </span>
                                </span>
                            </h1>
                            <h1 className="hero-title-line hero-title-indent">into online</h1>
                            <h1 className="hero-title-line hero-title-highlight">worlds that work<span className="hero-period">.</span></h1>
                        </div>
                        <p className="hero-intro">I’m Sahil Deep Singh. I shape ideas into expressive, useful web experiences.</p>
                        <Button className="md:w-80 md:h-16 w-60 h-12" onClick={(e) => e.preventDefault()} id="button" text="See my Work" />
                    </div>
                </header>

                <div ref={sceneRef} className="hero-visual" aria-label="Portrait of Sahil Deep Singh">
                    <div className="hero-depth-well" aria-hidden="true" />
                    <div className="hero-backdrop" aria-hidden="true" />
                    <div className="hero-platform" aria-hidden="true" />
                    <div className="hero-portrait-frame">
                        <div className="hero-portrait-glow" />
                        <img className="hero-portrait" src="/images/sahilP.png" alt="Sahil Deep Singh" />
                    </div>
                    <div className="hero-float-card hero-float-card-top" aria-hidden="true">
                        <span className="hero-status-dot" />
                        <span><strong>Creative developer</strong><small>Design · Code · Motion</small></span>
                    </div>
                    <div className="hero-float-card hero-float-card-bottom" aria-hidden="true">
                        <span className="hero-card-mark">✳</span><span><strong>Building for the web</strong><small>Interfaces with dimension</small></span>
                    </div>
                    <span className="hero-coordinate" aria-hidden="true">FIG. 01 — PORTFOLIO / 2026</span>
                </div>
            </div>
            <AnimatedCounter />
        </section>
    );
};

export default Hero;
