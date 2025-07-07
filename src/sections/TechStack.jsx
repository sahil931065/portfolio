import React from 'react'
import TitleHeader from '../component/TitleHeader'
import { techStackImgs } from '../constants'
import './ES.css'


const TechStack = () => {
  return (
    <div id="skills" className='flex-center section-padding mb-10'>
        <div className="w-full h-full md:px-10 px-5">
            <TitleHeader
            title="Tech Stack"
            sub="The Skills I Have"/>

            <div className="mytech-grid mt-7 mb-5 flex md:flex-row flex-col justify-around items-center gap-4  ">
                {techStackImgs.map((icon) => (
                    <div className='catds-M flex flex-col  items-center gap-5 w-full md:w-1/4 min-h-1/2 bg-black-200 rounded-xl p-5'>
                        {icon.name}
                        <img src={icon.imgPath} alt="stack" className=''/>
                    </div>

                ))}
            </div>
        </div>
    </div>
)}

export default TechStack