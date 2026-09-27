import React from 'react'
import TitleHeader from '../component/TitleHeader'
import { expCards } from '../constants'
import './ES.css'
const ExperinceSection = () => {
  return (
    <section id="experience" className='w-full md:mt-40 mt-20 section-padding xl:px-0'>
        <div className="w-full h-full md:20px px-5">
            <TitleHeader title="My Experience" sub="Journey" />
            <div className="timeline mt-32 relative w-full ">
                {expCards.map((card,index )=> {
                    return (
                        <div key={index} className={`timeline-item ${index % 2 === 0 ? ' w-1/2 relative left-0 p-5  leftSide' : 'rSide p-5 w-1/2 relative left-1/2 m-1.5 '} `}>
                            <img src={card.logoPath} alt="logo" className='absolute'/>
                            <div className="timeline-content w-full bg-amber-50 rounded-2xl p-5 ">
                                <h3 className="title font-bold mb-1.5">{card.title}</h3>
                                <small className='mb-4'>{card.date}</small>
                                <p className="description mt-5">{card.responsibilities}</p>
                            </div>
                        </div>
                    )
                })}
            </div>


        </div>
    </section>
  )
}

export default ExperinceSection