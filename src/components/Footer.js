import React from 'react'
import git from '../images/github-icon.png'
import twitter from '../images/twitter-icon.png'
import fb from '../images/fb-icon.png'
import insta from '../images/insta-icon.png'

export default function Footer() {
    return <div className="footer">
        <footer>
            <img src={twitter}/>
            <img src={fb}/>
            <img src={insta}/>
            <img src={git}/>
        </footer>
    </div>
} 