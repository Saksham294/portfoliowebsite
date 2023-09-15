import React from 'react'
import { Typography } from '@mui/material'
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import './Contact.css'
const Contact = () => {
    return (
        <div>
            <div className='contact'>
                <Typography variant='h3' sx={{ marginLeft: "33rem", marginTop: "4rem" }}>Connect with Me</Typography>
                <p>You making something interesting? I would love to collaborate with you. You can connect
                    with me on any of the platforms below.
                </p>
            </div>
            <div className="icons">
                <a href='https://twitter.com/sakshams294'><TwitterIcon className='twticon' sx={{ fontSize: "3rem" }} /></a>
                <a href='https://www.linkedin.com/in/sakshamsingh5001/'><LinkedInIcon className='linkedicon' sx={{ fontSize: "3rem", marginLeft: "1rem" }} /></a>
                <a href='https://github.com/Saksham294'><GitHubIcon className='ghicon' sx={{ fontSize: "3rem", marginLeft: "1rem" }} /></a>
            </div>


        </div>
    )
}

export default Contact
