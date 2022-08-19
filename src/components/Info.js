import React from 'react'
import linkedin from '../images/linkedin-icon.png'
import email from '../images/email-icon.png'

export default function Interests() {
    return  <div>
                <div className = "profile-pic">
                </div>
                <div className = "info">
                    <h1>Ismail Khan</h1>
                    <p>Frontend Dev</p>
                    <p><a href="#">website</a></p>
                    <button className = "btn-white"><img className = "info-icon" src={email}/>Email</button>
                    <button className = "btn-blue"><img className = "info-icon" src={linkedin}/>LinkedIn</button>
                </div>
            </div>
} 