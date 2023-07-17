import React from 'react'
import { Clipboard2Check, Headset, PatchCheck } from 'react-bootstrap-icons';
import "../reset.css";
import '../styles/Overview.css'

function Overview() {
    return (
        <div>
            <section className="overview-section">
                <div className="container-xxl">
                    <div className="overview-items">
                        <div className="row">
                            {/* Item 1 */}
                            <div className="overview-item">
                                <div className="overview-icon">
                                    {/* verified icon */}
                                    <PatchCheck/>
                                </div>
                                <div className="overview-text">
                                    <h3>Fresher</h3>
                                    <p>Experience</p>
                                </div>
                            </div>
                            {/* Item 2 */}
                            <div className="overview-item">
                                <div className="overview-icon">
                                    {/* clipboard icon */}
                                    <Clipboard2Check/>
                                </div>
                                <div className="overview-text">
                                    <h3>5+ Projects</h3>
                                    <p>Completed</p>
                                </div>
                            </div>
                            {/* Item 3 */}
                            <div className="overview-item">
                                <div className="overview-icon">
                                    {/* verified icon */}
                                    <PatchCheck/>
                                </div>
                                <div className="overview-text">
                                    <h3>150+</h3>
                                    <p>Problem Solved</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Overview