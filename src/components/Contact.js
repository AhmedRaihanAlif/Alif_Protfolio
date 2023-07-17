import React from 'react'
import '../reset.css'
import '../styles/Contact.css'

import { Dribbble, Facebook,  Linkedin, Github , Mailbox} from 'react-bootstrap-icons';

function Contact() {
    return (
        <div>
            <section id="contact" className="contact-section">
                <div className="container-xl">
                    <div className="contact-info-cont">
                        <div className="contact-info">
                            <div className="section_title">
                                <h2>Let's Connect</h2>
                            </div>
                            <p>
                                Please fill out the form on this section to contact with me.
                            </p>
                            <ul className="contact-social">
                                <li>
                                    <a href="https://www.linkedin.com/in/ahmed-raihan-8a1004179/">
                                        <Linkedin />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://github.com/AhmedRaihanAlif">
                                        <Github />
                                    </a>
                                </li>
                                
                                <li>
                                    <a href="https://www.facebook.com/profile.php?id=100008207800585">
                                        <Facebook />
                                    </a>
                                </li>
                                <li>
                                    <a href="/">
                                        <Mailbox />
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <form className="contact-form">
                            <h3>Let's hire and create something together!</h3>
                            <input type="text" id='name' className="input-control" placeholder="Your Name" name="name" required/>
                            <input type="text" id='email' className="input-control" placeholder="Your Email" name="email" required/>
                            <textarea className="input-control" placeholder="Message" name="message" required/>
                            <div className="form-btn"><button className="btn primary-btn">Send Message</button></div>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Contact