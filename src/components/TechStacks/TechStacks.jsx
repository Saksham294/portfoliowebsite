import { Typography } from '@mui/material'
import React from 'react'
import { DiReact, DiPython, DiJavascript1, DiHtml5, DiCss3 } from "react-icons/di"
import { SiNextdotjs, SiMongodb, SiExpress,SiRedux,SiDocker,SiKubernetes } from 'react-icons/si'
import { FaNodeJs, FaReact,FaJava } from 'react-icons/fa';
import { SiSolidity  } from 'react-icons/si'
import AOS from 'aos';
import { useEffect } from 'react';
import 'aos/dist/aos.css'
import './TechStacks.css'


const TechStacks = () => {
    useEffect(() => {
        AOS.init();
    })
    return (
        <div>
            <div className='techStack' data-aos="zoom-in-up"
            
            data-aos-offset="150"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            
            >
                <Typography variant='h3'>Tech Stack</Typography>
                <div className="stackContainer">
                    <SiMongodb className='logo' size={150} />
                    <SiExpress className='logo' size={150} />
                    <FaReact className='logo' size={150} />
                    <FaNodeJs className='logo' size={150} />
                    <SiRedux className='logo' size={150} />
                </div>
                <div className="langsBox">

                    <div className="languages">
<SiSolidity className='logo2' size={120} />
                        <DiPython className='logo2' size={150} />
                        <FaJava className='logo2' size={150} />
                        <DiJavascript1 className='logo2' size={150} />
                        <DiCss3 className='logo2' size={150} />
                        <DiHtml5 className='logo2' size={150} />
                    </div>
                </div>
                <div className="current">
                    <Typography variant='h4'>Currently Learning</Typography>
                    <div className="currentLearning">
                        <SiKubernetes size={200} />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default TechStacks
