import { Typography } from '@mui/material'
import React from 'react'
import './Middle.css'

const Middle = () => {
    return (
        <div className='middleBox'>
            <Typography variant='h3' className='abtmeHeading'> About Me</Typography>
            <Typography className='abtmeContent' fontSize={20}> I am an undergrad at NIT Kurukshetra and a Full Stack Developer. Below you will find
            </Typography>
            <div className="list">
                <ul>
                    <li>My Tech Stack</li>
                    <li>My Projects</li>
                    <li>Me Beyond Tech</li>
                </ul>
            </div>
        </div>
    )
}

export default Middle
