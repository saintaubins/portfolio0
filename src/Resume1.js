import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter,faLinkedin,faGithub } from '@fortawesome/free-brands-svg-icons';
import './App.css';
import Aos from 'aos';
import 'aos/dist/aos.css';


export const Resume = () => {

    useEffect(() => {
        Aos.init({duration: 2000}); 
     }, []); 

    return (
        <React.Fragment>
            <div>
            <div className="position-absolute w-200" style={{
                'padding':'5%',
                'background':'rgba(0,0,0,0.8)', 
                'margin':'0',
                'boxShadow': '10px 10px 10px black',
                'position': 'absolute',
                'height': 'auto'
            }}>
            <div  style={{
                    'borderRadius': '10px',
                    'boxShadow': '15px 15px 15px rgba(0,0,0,0.9)',
                    'backgroundColor': 'rgba(0,0,0,0.5)',
                    'color': 'lightgrey',
                    'margin': '0',
                    'border': '7vh solid transparent',
                    'borderImage': 'url(https://www.freepnglogos.com/uploads/border-png/double-line-border-png-10.png) 20% round',
        
                    //Social Follow Stuff
            }} >
                    <center>
                        <h3 data-aos="zoom-in-up">Sem Saint-Aubin</h3>
                        <h4 data-aos="zoom-in-up">Software Engineer</h4>
                        <p data-aos="zoom-in-up"><a href="mailto:saintaubins@gmail.com? subject='Lets Connect' " target='_blank' rel="noopener noreferrer" className='lG'>Email: saintaubins@gmail.com</a></p>
                        <p data-aos="zoom-in-up">Cell phone (516) 429-8578</p>
                        <div data-aos="zoom-in-up" className='social-container'>
                            <a href='https://www.linkedin.com/in/sem-saint-aubin/'
                            className='linkedin social' target='_blank'
                            rel="noopener noreferrer" >
                            <FontAwesomeIcon icon={faLinkedin} size='3x' />
                            </a>
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
                        <p data-aos="fade-up" >&emsp;I am a Software Engineer with over 10 years of engineering experience, who resolves complex problems with simple solutions. I am acquisitive to working with issues related with Frontend, or Backend development, and maintenance.</p>
                    <br></br>
                   
                    <h4>Skills:</h4>
                    <h5>Frontend:</h5>
                    <p data-aos="fade-up">&emsp;HTML5, CSS3, JavaScript, React, Bootstrap, Sass, NextJs, Gatsby, User Interface (UI), User Experience (UX).</p>
                    <h5>Backend:</h5>
                    <p data-aos="fade-up">&emsp;Python Django, NodeJs, Express, Firebase, Restful API's.</p>
                    <h5>Databases:</h5>
                    <p data-aos="fade-up">&emsp;MongoDb, PostgresqL, MySQL, JSON, XML.</p>
                    <h5>Testing:</h5>
                    <p data-aos="fade-up">&emsp;Jest, Enzyme, Mocha, Chai, Supertest.</p>
                    <h5>Deployment:</h5>
                    <p data-aos="fade-up">&emsp;Github Pages, Netlify, Heroku.</p>
                    <h5>I.T.:</h5>
                    <p data-aos="fade-up">&emsp;TCP/IP, DHCP, ARP, PING, FTP, IPCONFIG, TRACERT, TELNET, DOS, CLI, A+, Net+, MCP, CNA.</p>
                    <h5>Interpersonal:</h5>
                    <p data-aos="fade-up">&emsp;Marine Corps Veteran, Attention to detail, Courtesy, Fairness, Time management, Enthusiasm, Endurance.</p>
                    <br></br>
                    <h4>Work Experience:</h4>
                    <h5>&emsp;Howl For Change, Brooklyn, NY	&emsp;&emsp;&emsp;&emsp;&emsp; 3/20 - Present</h5>
                    <h5>&emsp;&emsp;Full Stack Developer</h5>
                        <ul data-aos="fade-up">
                            <li>&emsp;Helped debug both frontend and backend for cross browser consistency, including Safari, Chrome, Firefox for compliance.</li>
                            <li>&emsp;Skillfully re-designed website for better user experience, mobile responsiveness, and web flow.</li>
                            <li>&emsp;Worked with API's such as Twitter, Facebook, and Instagram.</li>
                        </ul>
                    <h5>&emsp;General Assembly, New York, NY	&emsp;&emsp;&emsp;&emsp;&emsp; 11/19 - 2/20</h5>
                    <h5>&emsp;&emsp;Software Engineering Immersive</h5>
                        <ul data-aos="fade-up">
                            <li>&emsp;14 weeks of full-stack web development Immersive training.</li>
                            <li>&emsp;Developed full-stack web application which processed, analyzed, and rendered with mobile responsiveness.</li>
                            <li>&emsp;Planned, wrote, and debugged web applications and software with attention to detail.</li>
                        </ul>
                    <h5>&emsp;Carl Zeiss Meditec Dublin, CA	&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; 7/10 - 10/19</h5>
                    <h5>&emsp;&emsp;Field Service Engineer</h5>
                        <ul data-aos="fade-up">
                            <li>&emsp;I worked in Hospitals, private practices, clinics, to trouble-shoot, electromechanical, electronic, and optical systems for ophthalmic instrumentation, where precision was a must, relating to surgery, and diagnosing disease.</li>
                            <li>&emsp;I did PM’s, upgrades, and installation of over 20 different types of instruments, some include, YAG laser, OCT, IOL Master, HFA II, HFA III, and also did Data transfers from old to new instruments.</li>
                            <li>&emsp;Documentation was a must, I have clear and understandable english, which informed both clients, and the company.</li>
                            <li>&emsp;Powerful computer skills with the ability to obtain specific certifications as required.</li>
                            <li>&emsp;Skillfully able to pass required training to service fine mechanics and optics. I have the ability to effectively service equipment once training is completed.</li>
                        </ul>
                    <h5>&emsp;Behlman Electronics Hauppauge, NY &emsp;&emsp;&emsp;&emsp;&emsp;&emsp; 8/08- 7/10</h5>
                    <h5>&emsp;&emsp;Electrical Engineer</h5>
                        <ul data-aos="fade-up">
                            <li>&emsp;Creative use of design and analysis with analog and digital circuits, with use of electrical engineering principles.</li>
                            <li>&emsp;Tactful, test and troubleshoot of AC, DC, and uninterruptible Power Supplies, inverters, Frequency converters used for commercial, industrial and military specifications.</li>
                        </ul>
                    <h5>&emsp;Cablevision  Melville, NY &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; 11/07- 8/08</h5>
                    <h5>&emsp;&emsp;Technical Support Group</h5>
                        <ul data-aos="fade-up">
                            <li>&emsp;Dependable trouble shooting skills including RF signal recognition and detection, TCP/IP,DHCP, ARP, PING, FTP, IPCONFIG, TRACERT, TELNET, including complex Knowledge of DOS, Win 95, 98, NT, 2000, XP, Apple/MAC, Internet communications, and protocols, and E-mail client Analysis for Microsoft, and Macintosh machines.</li>
                            <li>&emsp;Thorough documentation of trouble tickets, in competitive, fast paced, self staring, highly motivated and customer friendly Environment.</li>
                        </ul>
                    <h5>&emsp;Telephonics Corp. Melville, NY  &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; 1/07- 5/07</h5>
                    <h5>&emsp;&emsp;Hardware and Software Engineer</h5>
                        <ul data-aos="fade-up">
                            <li>Strong programming and design skills, Network Signal Frequency Detection Mechanism Design, with VHDL, Aldec, C++, and Spartan hardware.</li>
                            <li>Independent in-depth knowledge of computer architecture and components Microprocessor/Micro-controller Design/simulation of analog and digital circuits e.g. PSpice, Aldec</li>
                            <li>Knowledge of Xilinx, and the IEEE 1588 Protocol for network time synchronization and implementation.</li>
                        </ul>
                    <h5>&emsp;Pitney Bowes Brooklyn, NY  &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; 10/00 - 3/04</h5>
                    <h5>&emsp;&emsp;Customer Service Technician</h5>
                        <ul data-aos="fade-up">
                            <li>Intelligent troubleshooting and repairing skills, business machine installations, along with, computer network maintenance and support, PM’s.</li>
                            <li>Daily tasks were 30% Mechanical, 30% Electrical, 40% Software Driven environment.</li>
                        </ul>
                    <h4>Military Experience:</h4>
                    <h5>&emsp;U.S. Marine Corps.  Camp Pendleton, CA / Camp Fuji Japan  &emsp;&emsp;&emsp;&emsp;&emsp;&emsp; 8/96 - 8/00</h5>
                    <h5>&emsp;&emsp;Heavy Equipment Engineer</h5>
                        <ul data-aos="fade-up">
                            <li>Diesel Engine Maintenance and Repairs, Electronic Troubleshooting, Digital Analyst, and Multimedia Technologist.</li>
                            <li>Supervised and evaluated up to 20 engineers</li>
                            <li>Rank: Sergeant</li>
                        </ul>
                    <h4>Education:</h4> 
                    <p data-aos="fade-up"><strong>&emsp;General Assembly </strong>- Vocational Certificate - Feb 2020 - Software Engineering Immersive - New York, NY. </p>
                    <p data-aos="fade-up"><strong>&emsp;Hofstra University </strong>- Bachelor's Degree - May 2007 - Computer Engineering - Hempstead, NY. </p>
                    <p data-aos="fade-up"><strong>&emsp;SUNY Nassau </strong>Associates Degree - May 2003 - Computer Information Sysytems - Garden City, NY. </p>
                    <p data-aos="fade-up"><strong>&emsp;Suburban Tech </strong>- Vocational Certificate - Jan 2000 - Digital Electronics and Computer Technology Hempstead - NY. </p>
                    <br></br>

            </div>
                    <br></br><br></br>
        </div>
        </div>
        </React.Fragment>
    )   
}