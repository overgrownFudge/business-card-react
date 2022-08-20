import React from 'react'
import git from '../images/github-icon.png'
import twitter from '../images/twitter-icon.png'
import fb from '../images/fb-icon.png'
import insta from '../images/insta-icon.png'

export default function Footer() {
    return <div className="footer">
            <img className = "icon" src={twitter}/>
            <img className = "icon" src={fb}/>
            <img className = "icon" src={insta}/>
            <img className = "icon" src={git}/>
    </div>
} 