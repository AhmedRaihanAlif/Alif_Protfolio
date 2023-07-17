import React from 'react'
import "../reset.css";
import "../styles/Services.css"

import "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import CarouselC from '../components/CarouselC'


function Services() {
    return (
        <div>
            <section id="services" className="service-section">
                <div className="container-xl">
                    <div className="row align-items-center">
                        <div className="service-title-container">
                            <div className="section_title">
                                <p>Projects</p>
                                <h2>I have completed 5+ projects with my full desire</h2>
                            </div>
                        </div>
                        <div className="services-cont">
                            <CarouselC />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Services