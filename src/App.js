import React from 'react'
import Info from './components/Info'
import About from './components/About'
import Interests from './components/Interests'
import Footer from './components/Footer'

export default function App() {
    return (
        <div className="container">
            <div className= "main">
                <Info />
                    <div className= "article">
                        <About />
                        <Interests />
                    </div>
                <Footer />
            </div>
        </div>
    )
}
