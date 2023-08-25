import React from 'react'
import './Navbar.css'

const Navbar = () => {
    return (
        <div>
            <ul className='navBar'>

                <li><a href='#aboutme'>About Me</a></li>
                <li><a href='#myprojects'>Projects</a></li>
                <li><a href='#beyondtech'>Beyond Tech</a></li>
                <li><a href='#contactme'>Contact Me</a></li>
            </ul>
        </div>
    )
}

export default Navbar
