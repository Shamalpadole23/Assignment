import React from 'react';
import { useState } from 'react';
import 'https://kit.fontawesome.com/a076d05399.js'
import '../styles/header.css';
import HeroImg from '../Images/Blue.png'
import Archslate from '../Images/Archslate.png'
import Image1 from '../Images/image 1.png'
import Profile from '../Images/2CCCA2E6-BCB7-47BE-8DF3-073347686B17 1.png'
import ReorderIcon from "@mui/icons-material/Reorder";
import { Link } from "react-router-dom";
import {IconButton } from "@mui/material";

function Header() {
    const [openLinks, setOpenLinks] = useState(false);

    const toggleNavbar = () => {
        setOpenLinks(!openLinks);
    };

    return (
        <div>
            <div className='container'>
                <div className="navbar">
                    <div className="leftside" id={openLinks ? "open" : "close"}>
                        <img src={HeroImg} alt="" />
                        <img className='arch' src={Archslate} alt="" />
                        <div className="hiddenLinks">
                            <Link to="/">Candidates</Link>
                            <Link to="componies">Componies</Link>
                            <Link to="jobs">Jobs</Link>
                            <Link to="notification">Notification</Link>
                            <Link to="username">UserName</Link>
                        </div>
                    </div>
                    <div className="rightside">
                        <Link to="/">Candidates</Link>
                        <Link to="componies">Componies</Link>
                        <Link to="jobs">Jobs</Link>
                        <Link to="notification">Notification</Link>
                        <Link to="username">UserName</Link>

                        <IconButton onClick={toggleNavbar}>
                            <ReorderIcon />
                        </IconButton>
                    </div>
                </div>
            </div>
            <div className='back'>
                <div><p> <i fa fa-bars></i> Back to jobs</p></div>

                {/* //Banner-Section */}
                <div className='banner-section'>
                    <div className='section-1'>
                        <div className='img-heading'>
                            <div>
                                <img src={Image1} alt="" />
                            </div>
                            <div className='heading-content'>
                                <h2>Architechtural Design</h2>
                                <p>Black Maountain Architechture</p>
                                <p> Posted 07/27/2022</p>
                            </div>
                        </div>
                        <div className='tagContainer'>
                            <button className='tag1'>Architecture</button>
                            <button className='tag2'>Freelance</button>
                            <button className='tag3'>Long-term</button>
                        </div>
                    </div>
                    <div className='right-container'>
                        <div className='icon-container'>
                            <i className="fa fa-share-alt"></i><i className="fa fa-bookmark"></i>
                        </div>
                        <div className='btn-container'>
                            <p className='stat1'>Status: Accepting Applications</p>
                            <button type="submit" className="btn2">Apply on Archslate</button>
                        </div>
                    </div>
                </div>


                <div className="skillSection">
                    <div className="card">
                        <div className="cardTitleContainer">
                            <p className="fa fa-bolt"></p>
                            <p className="title">Software Skills</p>
                        </div>
                        <div className="cardContent">
                            <div className="btnContainer">
                                <div className="cardButton">
                                    <span className='fa fa-bolt' style={{ fontSize: "14px", padding: '0.5rem' }}>Rhino</span>
                                </div>
                                <div className="cardButton">
                                    <span className='fa fa-bolt' style={{ fontSize: "14px", padding: '0.5rem' }}>Rhino</span>
                                </div>
                            </div>
                            <div className="cardButton">
                                <span className='fa fa-bolt' style={{ fontSize: "14px", padding: '0.5rem' }}>Rhino</span>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="cardTitleContainer">
                            <p className="fa fa-star"></p>
                            <p className="title">Experience</p>
                        </div>
                        <div className="cardContent">
                            <div className="btnContainer">
                                <div className="cardButton">
                                    <span className='fa fa-bolt' style={{ fontSize: "14px", padding: '0.5rem' }}>Rhino</span>
                                </div>
                                <div className="cardButton">
                                    <span className='fa fa-bolt' style={{ fontSize: "14px", padding: '0.5rem' }}>Rhino</span>
                                </div>
                            </div>
                            <div className="cardButton">
                                <span className='fa fa-bolt' style={{ fontSize: "14px", padding: '0.5rem' }}>Rhino</span>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="cardTitleContainer">
                            <p className="fa fa-bars"></p>
                            <p className="title">Rate</p>
                        </div>
                        <div className="cardContent">
                            <div className="btnContainer">
                                <div className="cardButton">
                                    <span className='fa fa-bolt' style={{ fontSize: "14px", padding: '0.5rem' }}>Rhino</span>
                                </div>
                                <div className="cardButton">
                                    <span className='fa fa-bolt' style={{ fontSize: "14px", padding: '0.5rem' }}>Rhino</span>
                                </div>
                            </div>
                            <div className="cardButton">
                                <span className='fa fa-bolt' style={{ fontSize: "14px", padding: '0.5rem' }}>Rhino</span>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="cardTitleContainer">
                            <p className="fa fa-map-marker"></p>
                            <p className="title">Location</p>
                        </div>
                        <div className="cardContent">
                            <div className="btnContainer">
                                <div className="cardButton">
                                    <span className='fa fa-bolt' style={{ fontSize: "14px", padding: '0.5rem' }}>Rhino</span>
                                </div>
                                <div className="cardButton">
                                    <span className='fa fa-bolt' style={{ fontSize: "14px", padding: '0.5rem' }}>Rhino</span>
                                </div>
                            </div>
                            <div className="cardButton">
                                <span className='fa fa-bolt' style={{ fontSize: "14px", padding: '0.5rem' }}>Rhino</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='discr'>
                    <div className="left-side">
                        <h3 className='about'>About This Role</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati maxime voluptas amet in, quidem harum aperiam quisquam explicabo inventore accusamus quos asperiores quibusdam necessitatibus rerum officiis corrupti doloribus odit architecto.</p>
                        <div>
                            <h4 className='resp'>Responsiblities</h4>
                            <li className='links'>specific day to day task</li>
                            <li className='links'>deliverables</li>
                            <li className='links'>work environment requirements</li>
                            <li className='links'>role within the current team</li>
                            <li className='links'>etc.</li>
                        </div>
                        <div>
                            <h4 className='resp'>Skills</h4>
                            <li className='links'>software skills</li>
                            <li className='links'>technical skills</li>
                            <li className='links'>soft skills</li>
                            <li className='links'>other</li>
                        </div>
                        <div>
                            <h4 className='resp'>Qualifications</h4>
                            <p>Required</p>
                            <li className='links'>education</li>
                            <li className='links'>licences and certifications</li>
                            <li className='links'>experience needed</li>

                            <p>Bonus</p>
                            <li className='links'>education</li>
                            <li className='links'>licences and certifications</li>
                            <li className='links'>experience needed</li>

                        </div>
                        <div>
                            <h4 className='resp'>Rate</h4>
                            <li className='links'>If available</li>

                        </div>
                        <div>
                            <h4 className='resp'>Time Estimate</h4>
                            <li className='links'>If available</li>

                        </div>
                        <div>
                            <h4 className='resp'>Work Autoriation</h4>
                            <li className='links'>tbd</li>

                        </div>
                        <h3 className='about'>About Compony</h3>
                        <p>Descriptio of Compony with any uniform info or desclaimers - equal hiring opportunity, etc.</p>
                        <div className='footer'>
                            <button type="submit" className="submit-btn5">Apply on Archslate</button>
                            <button type="submit" className="submit-btn6">Save</button>
                            <button type="submit" className="submit-btn7">Share & refer</button>
                        </div>
                    </div>
                    <div className="right-side">
                        <h4>Job Seeker</h4>

                        <div className='profile'><img src={Profile} alt="" /></div>
                        <div className='john'><p>John Carlos </p> <h4>Project Manager</h4></div>
                        <button type="submit" className="submit-btn3"> <i class="fa fa-envelope"></i> Message</button>
                    </div>

                </div>
            </div>
        </div>
    );
}
export default Header;
