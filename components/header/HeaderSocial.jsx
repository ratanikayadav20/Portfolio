import React from 'react'
import { BsLinkedin, BsStackOverflow } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
import { Link } from 'react-router-dom';


const HeaderSocial = () => {
    return (
        <div className='header__socials'>
            <Link to="https://www.linkedin.com/in/ratanika-yadav-4a573a214" target='_blank'><BsLinkedin /></Link>
            <Link to="https://github.com/ratanikayadav20" target='_blank'><FaGithub /></Link>
            
        </div>
    )
}

export default HeaderSocial