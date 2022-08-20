import React from 'react'
import git from '../images/github-icon.png'
import twitter from '../images/twitter-icon.png'
import fb from '../images/fb-icon.png'
import insta from '../images/insta-icon.png'

export default function Footer() {
    return <div className="footer">
            <img className = "icon" src={twitter} alt="Twitter icon"/>
            <img className = "icon" src={fb} alt="Facebook icon"/>
            <img className = "icon" src={insta} alt="Instagram icon"/>
            <img className = "icon" src={git} alt="GitHub icon"/>
    </div>
}