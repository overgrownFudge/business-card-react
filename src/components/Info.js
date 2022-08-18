import React from 'react'
import linkedin from '../images/linkedin-icon.png'

export default function Interests() {
    return  <div>
                <div className = "profile-pic">
                </div>
                <div className = "info">
                    <h1>Ismail Khan</h1>
                    <p>Frontend Dev</p>
                    <p>website</p>
                    <button className = "btn-white">Email</button>
                    <button className = "btn-blue"><img src={linkedin}/>LinkedIn</button>
                </div>
            </div>
} 