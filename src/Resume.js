import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faFacebook,
    faTwitter,
    faLinkedin,
    faGithub
} from '@fortawesome/free-brands-svg-icons';
import './App.css';


export const Resume = () => {
    return (
        <React.Fragment>
            <div>
            <div className="position-absolute w-200" style={{
                'padding':'5%',
                'background':'rgba(0,0,0,0.8)', 
                'margin':'0',
                'boxShadow': '10px 10px 10px black',
                'position': 'absolute',
                'height': '5300px'
                }}>
            <div  style={{
                    'borderRadius': '10px',
                    'boxShadow': '15px 15px 15px rgba(0,0,0,0.9)',
                    'background': 'rgba(0,0,0,0.5)',
                    //'padding': '5%',
                    'color': 'lightgrey',
                    'margin': '0',
                    'border': '60px solid transparent',
                    'border-image': 'url(https://www.freepnglogos.com/uploads/border-png/double-line-border-png-10.png) 20% round',
                    //'z-index':'-1',
                    // 'font-family': 'Shadows Into Light'
                    //Social Follow Stuff
            }} >
                    <center>
                        <h3>Sem Saint-Aubin</h3>
                        <p>saintaubins@gmail.com</p>
                        <p>Cell phone (516) 429-8578</p>
                        <div className='social-container'>
                            <a href='https://www.linkedin.com/in/sem-saint-aubin/'
                            className='linkedin social' target='_blank'
                            rel="noopener noreferrer" >
                            <FontAwesomeIcon icon={faLinkedin} size='3x' />
                            </a>
                            {/* <a href='https://www.facebook.com/sem.st.aubin'
                            className='facebook social' target='_blank'
                            rel="noopener noreferrer" >
                            <FontAwesomeIcon icon={faFacebook} size='3x' />
                            </a> */}
                            <a href='https://github.com/saintaubins/'
                            className='github social' target='_blank'
                            rel="noopener noreferrer" >
                            <FontAwesomeIcon icon={faGithub} size='3x' />
                            </a>
                            <a href='https://twitter.com/semsaintaubin'
                            className='twitter social' target='_blank'
                            rel="noopener noreferrer" >
                            <FontAwesomeIcon icon={faTwitter} size='3x' />
                            </a>
                        </div>
                        <br></br><br></br>
                    </center>
                    <h4>Brand Statement:</h4>
                        <p>&emsp;I am a SoftWare Engineer, I am resolving complex problems with simple solutions. I am excited to deal with issues related with, FrontEnd, or BackEnd development, and maintenance. My passion towards engineering highly motivates me to being a more successful person. I can design websites using, HTML5, CSS3, JavaScript, React, RESTful API's, Git, GitHub, Bootstrap, No SQL, MERN, Firebase, SQL, Python, and Django. Other skills are deployment with Git, Netlify, and Heroku. I can offer professionalism, enthusiasm, courtesy, fairness, and excellent time management.</p>
                    <br></br>
                    <h4>Education:</h4> 
                        <p><strong>&emsp;General Assembly </strong>Fellow, Feb 2020, Software Engineering Immersive, New York, NY. </p>
                        <p><strong>&emsp;Hofstra University </strong>B.S. May 2007, Computer Engineering, Hempstead, NY. </p>
                        <p><strong>&emsp;SUNY Nassau </strong>A.A.S May 2003, Computer Information Sysytems, Garden City, NY. </p>
                        <p><strong>&emsp;Suburban Tech </strong>Fellow, Jan 2000 Digital Electronics and Computer Technology Hempstead, NY. </p>
                        <br></br>
                    <h4>Related Courses:</h4>
                        <p>&emsp;Computer Science I,II,III, on a Unix platform, using Java and C++.</p>
                    <br></br>
                    <h4>Experience:</h4>
                    <h5>&emsp;General Assembly, New York, NY	&emsp;&emsp;&emsp;&emsp;&emsp; 11/19 - 2/20</h5>
                    <h5>&emsp;&emsp;Software Engineering Immersive</h5>
                        <ul>
                            <li>&emsp;14 weeks of full-stack web development Immersive training.</li>
                            <li>&emsp;Developed full-stack web application which processed, analyzed, and rendered with mobile responsiveness.</li>
                            <li>&emsp;Planned, wrote, and debugged web applications and software with attention to detail.</li>
                        </ul>
                    <h5>&emsp;Carl Zeiss Meditec Dublin, CA	&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; 7/10 - 10/19</h5>
                    <h5>&emsp;&emsp;Field Service Engineer</h5>
                        <ul>
                            <li>&emsp;Outstanding, understanding of basic electromechanical, electronic, and optical systems.</li>
                            <li>&emsp;Excellent understanding of medical laser, OCT, IOL Master techniques and methodologies.</li>
                            <li>&emsp;Successful verbal and written communication skills.</li>
                            <li>&emsp;Powerful computer skills with the ability to obtain specific certifications as required.</li>
                            <li>&emsp;Skillfully able to pass required training to service fine mechanics and optics. I have the ability to effectively service equipment once training is completed.</li>
                        </ul>
                    <h5>&emsp;Behlman Electronics Hauppauge, NY &emsp;&emsp;&emsp;&emsp;&emsp;&emsp; 8/08- 7/10</h5>
                    <h5>&emsp;&emsp;Electrical Engineer</h5>
                        <ul>
                            <li>&emsp;Creative use of design and analysis with analog and digital circuits, with use of electrical engineering principles.</li>
                            <li>&emsp;Tactful, test and troubleshoot of AC, DC, and uninterruptible Power Supplies, inverters, Frequency converters used for commercial, industrial and military specifications.</li>
                        </ul>
                    <h5>&emsp;Cablevision  Melville, NY &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; 11/07- 8/08</h5>
                    <h5>&emsp;&emsp;Technical Support Group</h5>
                        <ul>
                            <li>&emsp;Dependable trouble shooting skills including RF signal recognition and detection, TCP/IP,DHCP, ARP, PING, FTP, IPCONFIG, TRACERT, TELNET, including complex Knowledge of DOS, Win 95, 98, NT, 2000, XP, Apple/MAC, Internet communications, and protocols, and E-mail client Analysis for Microsoft, and Macintosh machines.</li>
                            <li>&emsp;Thorough documentation of trouble tickets, in competitive, fast paced, self staring, highly motivated and customer friendly Environment.</li>
                        </ul>
                    <h5>&emsp;Telephonics Corp. Melville, NY  &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; 1/07- 5/07</h5>
                    <h5>&emsp;&emsp;Hardware and Software Engineer</h5>
                        <ul>
                            <li>Strong programming and design skills, Network Signal Frequency Detection Mechanism Design, with VHDL, Aldec, C++, and Spartan hardware.</li>
                            <li>Independent in-depth knowledge of computer architecture and components Microprocessor/Micro-controller Design/simulation of analog and digital circuits e.g. PSpice, Aldec</li>
                            <li>Knowledge of Xilinx, and the IEEE 1588 Protocol for network time synchronization and implementation.</li>
                        </ul>
                    <h5>&emsp;Pitney Bowes Brooklyn, NY  &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; 10/00 - 3/04</h5>
                    <h5>&emsp;&emsp;Customer Service Technician</h5>
                        <ul>
                            <li>Intelligent troubleshooting and repairing skills, business machine installations, along with, computer network maintenance and support, PM’s.</li>
                            <li>Daily tasks were 30% Mechanical, 30% Electrical, 40% Software Driven environment.</li>
                        </ul>
                    <h4>Military Experience:</h4>
                    <h5>&emsp;U.S. Marine Corps.  Camp Pendleton, CA / Camp Fuji Japan  &emsp;&emsp;&emsp;&emsp;&emsp;&emsp; 8/96 - 8/00</h5>
                    <h5>&emsp;&emsp;Heavy Equipment Engineer</h5>
                        <ul>
                            <li>Diesel Engine Maintenance and Repairs, Electronic Troubleshooting, Digital Analyst, and Multimedia Technologist.</li>
                            <li>Supervised and evaluated up to 20 engineers</li>
                        </ul>
                        <h4>Activities/Certifications:</h4>
                            <ul>
                                <li>Member of IEEE.</li>
                                <li>Member of S.A.C. Society for Advancement of Computing.</li>
                                <li>A+, Network+, Microsoft MCP, Novell CNA Certifications.</li>
                            </ul>

            </div>
                    <br></br><br></br>
        </div>
        </div>
        </React.Fragment>
    )   
}