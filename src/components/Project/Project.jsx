import { Typography } from '@mui/material'
import React from 'react'
import olx from './olx.png'
import walletTracer from './walletTracer.png'
import AOS from 'aos';
import { useEffect } from 'react';
import 'aos/dist/aos.css'
import ProjectCard from '../ProjectCard/ProjectCard';
import './Project.css'


const Project = () => {
    useEffect(() => {
        AOS.init();
    })

    const arr = [{
        img: 'https://iili.io/H00BJxS.md.png',
        heading: 'Wallet Tracer',
        content: 'A tool to organise your expenses and track your wallet balance. Tools used: React,NodeJS,ExpressJS and MongoDB',
        repoLink: 'https://github.com/Saksham294/MoneyTracker'
    },
    {
        img: 'https://iili.io/H00B2s9.md.png'
        ,
        heading: 'Writers Zinga',
        content: 'Writers Zinga is a platform designed to help writers connect and collaborate to make amazing pieces of writing.Tools used: MongoDB,React,ExpressJS,NodeJS and Redux',
        repoLink: 'https://github.com/Saksham294/writers-zinga'
    },
    {
        img: 'https://iili.io/H00BdW7.md.png"',
        heading: 'OLX-Clone',
        content: 'A clone of the popular OLX website. Tools used: React,NodeJS,ExpressJS and MongoDB',
        repoLink: 'https://github.com/Saksham294/OLX-Clone'
    },
    {
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjO5fZLDuUQp9HZ9gH6rmgRxT3m9cfAIgc52Rv_ozLGQ&s',
        heading: 'Payroll Management System',
        content: 'Built a simple payroll management system to help employeers manage their employees using Python and MySQL',
        repoLink: 'https://github.com/Saksham294/Payroll_Management-System'
    },
    {
        img:'https://i.ibb.co/HdyRPcX/Screenshot-2023-08-25-at-10-07-54-AM.png',
        heading:'AI Ecommerce Platform',
        content:'This is an ecommerce platform built for users by users. One of the key features of this platform is the amazing recommendations it provides to users based on the products purchased by other users.',
        repoLink:'https://github.com/Saksham294/UrbanBazzar'
    }

    ]


    return (
        <div>

            <div data-aos="zoom-in-up" className="bigBox">
                {arr.map((item, index) => (
                <ProjectCard project={item} key={index}/>                    

                )
                )}

            </div>
        </div>
    )
}

export default Project
