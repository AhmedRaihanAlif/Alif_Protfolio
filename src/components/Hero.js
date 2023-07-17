import React from 'react'
import "../reset.css";
import '../styles/Hero.css'

import TypeWriterEffect from 'react-typewriter-effect';

const onButtonClick = () => {
    // using Java Script method to get PDF file
    fetch('SamplePDF.pdf').then(response => {
        response.blob().then(blob => {
            // Creating new object of PDF file
            const fileURL = window.URL.createObjectURL(blob);
            // Setting various property values
            let alink = document.createElement('a');
            alink.href = fileURL;
            alink.download = 'AhmedRaihanAlifCV(2).pdf';
            alink.click();
        })
    })
}
function Hero() {
    
    return (
        <div>
            <section className="hero-section" id="home">
                <div className="container-xl">
                    <div className="row">
                        <div className="col hero-text">
                            <span>Hi, I'm</span>
                            <TypeWriterEffect
                                textStyle={{ fontFamily: 'Segoe UI' }}
                                startDelay={100}
                                cursorColor="black"
                                text="Ahmed Raihan Alif"
                                typeSpeed={100}
                                hideCursorAfterText={true}
                            />
                            {/* <h1>Mohammed Salih</h1> */}
                            <h3>Full Stack Software Engineer</h3>
                            <p>Too much passionate about learning new things. Interested in discussing and implementing new things on software development.<br></br> I always look for the opportunity working with future technologies and improving the work process.<br></br> Hard-working, confident and always love to work in a friendly environments.</p>
                            <div className="hero-btn-container">
                          
   
                                <a onClick={onButtonClick} className="btn primary-btn">Download CV</a>
                                <a href="#contact" className="btn secondary-btn">Contact</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Hero