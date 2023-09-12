import React from 'react'
import Typography from '@mui/material/Typography'
import Navbar from '../Navbar/Navbar'
import Typewriter from 'typewriter-effect';
import './Header.css'
//import profilePic.jpg

const Header = () => {
    return (
        <div className='element'>
           
            <div className='heading'>
                <Typography variant='h2' fontSize={60}>Hi! I'm </Typography>
                <div className='introHeading' >
                    <div className='introFont'>
                        <Typewriter
                            options={{
                                loop: true,
                            }}
                            onInit={(typewriter) => {
                                typewriter.typeString('Saksham Singh')
                                    .pauseFor(1500)
                                    .deleteAll()
                                    .typeString('A Full Stack Developer')
                                    .pauseFor(1500)
                                    .deleteAll()
                                    .typeString('Open Source Enthusiast')
                                    .pauseFor(1500)
                                    .deleteAll()
                                    .callFunction(() => {
                                    })
                                    .start();
                            }}
                        /></div>
                        
                </div>
              
            </div>
       
        </div>

    )
}

export default Header
