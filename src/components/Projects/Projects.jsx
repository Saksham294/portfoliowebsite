import React from 'react'
import { Typography } from '@mui/material'
import Project from '../Project/Project'
import './Projects.css'

const Projects = ({img,heading,content}) => {
    return (
        <div className='projectsBox'>
            <div className='inprojectBox'>
            <Typography sx={{marginRight:"12rem"}} variant='h2'>My Projects</Typography>
            <div className="projectsContainer">
                <Project/>
            </div>
            </div>
        </div>
    )
}

export default Projects
