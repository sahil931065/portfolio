import React from 'react'
import { words } from '../constants/index.js';
import AnimatedCounter from '../component/AnimatedCounter/AnimatedCounter.jsx';
import Button from '../component/button.jsx';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const Hero = () => {
    useGSAP(() => {
        gsap.fromTo('.hero-text h1',{
            y:50,
            opacity:0
        },{
            y:0,
            opacity:1,
            stagger:0.2,
            duration:1,
            ease:"power2.inout"
        })
    })


  return (
    <>
    <section id="hero" className="relative overflow-hidden">
        <div className="absolute top-0 left-0 z-10">
            <img src="/images/bg.png" alt="backgound" />
        </div>

        <div className="hero-layout top-20 md:top-0">
            {/*LEFT : Content*/}
            <header className="flex flex-col justify-center ml-0px md:w-full w-screen md:px-20 px-5">
                <div className="flex flex-col gap-7">
                    <div className="hero-text">
                        <h1>Shaping 
                            <span className='slide'>
                                <span className='wrapper'>
                                    {words.map((word)=>(
                                        <span key={word.text} className="flex items-center md:gap3 gap:1 pb-2" >
                                        <img
                                         src={word.imgPath} 
                                         alt={word.text} 
                                         className="xl:size-12 md:size-10  size-7 md:p-2 p-1 rounded-full bg-white-50"/>
                                        </span>
                                    ))}
                                </span>
                            </span>
                            
                        </h1>
                        <h1>into Online Solutions</h1>
                        <h1>that Boost Your Business</h1>
                        
                    </div>
                    <p className='text-white-50 md:text-xl relative z-10 pointer-events-none'>Hi, I'm Sahil Deep Singh, a Web Developer</p>
                        <Button className="md:w-80 md:h-16 w-60 h-12"
                        onClick={(e)=>{
                            e.preventDefault();

                            


                        }}
                        id="button"
                        text="See my Work"
                        />
                </div>
            </header>
            {/*3D*/ }
            <figure className= "hidden md:flex md:items-center md:justify-center h-full">
                <div className="bg-[url(/images/bg-sahil.png)] bg-center ml-20px rounded-b-full h-fit ">
                    <img className=' rounded-b-full' src="/images/sahilP.png" alt="" />
                </div>
            </figure>
        </div>
        {<AnimatedCounter />}
    </section>
    </>
  )
}

export default Hero