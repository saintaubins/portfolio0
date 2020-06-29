import React from 'react';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import './App.css';

const front = [
    {name: 'Photo 1',
        url: 'https://w7.pngwing.com/pngs/840/443/png-transparent-html-5-logo-web-development-html-css3-canvas-element-web-design-w3c-html5-logo-miscellaneous-text-orange-thumbnail.png'},
    {name: 'Photo 2',
        url: 'https://b1.pngbarn.com/png/326/868/css3-badge-blue-and-white-css-icon-png-clip-art.png'},
    {name: 'Photo 3',
        url: 'https://w7.pngwing.com/pngs/1007/564/png-transparent-java-script-logo-javascript-web-development-logo-script-text-computer-programming-internet.png'},
    {name: 'Photo 4',
        url: 'https://banner2.cleanpng.com/20180820/pql/kisspng-react-logo-redux-webpack-babel--5b7b7258327b51.9184659615348168562068.jpg'},
    {name: 'Photo 5',
        url: 'https://www.drupal.org/files/project-images/bootstrap-stack.png'},
    {name: 'Photo 6',
        url: 'https://img.pngio.com/60-sass-png-cliparts-for-free-download-uihere-sass-png-310_162.jpg'},
    {name: 'Photo 7',
        url: 'https://auth0-community-s3.s3.dualstack.us-west-1.amazonaws.com/original/2X/a/ae35edce19e64c53e5d455b22e8a2c82d093d4c9.png'},
    {name: 'Photo 8',
        url: 'https://stevencotterill.com/static/a8c8c75ea310f6d3f91c681946646114/bc8e0/website-rebuilt-in-gatsbyjs.png'},
    {name: 'Photo 9',
        url: 'https://w0.pngwave.com/png/687/111/responsive-web-design-web-development-user-interface-design-user-experience-responsive-ui-png-clip-art.png'},
    {name: 'Photo 10',
        url: 'https://img.favpng.com/18/13/24/user-experience-design-user-interface-design-r-sum-usability-png-favpng-wZY8qcbk4MURLyZGKcwGMyvu3.jpg'}
]
const back = [
    {name: 'Photo 1',
        url: 'https://pluspng.com/img-png/python-logo-png-download-python-logo-png-images-transparent-gallery-advertisement-360.png'},
    {name: 'Photo 2',
        url: 'https://www.vhv.rs/dpng/d/208-2081416_django-development-png-transparent-django-logo-png-download.png'},
    {name: 'Photo 3',
        url: 'https://img.favpng.com/20/4/0/node-js-javascript-react-mean-angularjs-png-favpng-9jx9sihXGEqtr5xCmpXZtGFjQ.jpg'},
    {name: 'Photo 4',
        url: 'https://i.morioh.com/8c8203b86e.png'},
    {name: 'Photo 5',
        url: 'https://firebase.google.com/images/brand-guidelines/logo-built_white.png'},
    {name: 'Photo 6',
        url: 'https://img.pngio.com/api-used-with-sendeasy-sendeasy-apis-png-722_449.png'}
]
const db = [
    {name: 'Photo 1',
        url: 'https://www.pngkit.com/png/detail/383-3838914_mongo-db-design-mongodb-logo-mongodb.png'},
    {name: 'Photo 2',
        url: 'https://e7.pngegg.com/pngimages/582/361/png-clipart-postgre-sql-logo-postgresql-relational-database-management-system-object-relational-database-database-blue-text.png'},
    {name: 'Photo 3',
        url: 'https://img.favpng.com/10/21/25/mysql-workbench-database-mysql-cluster-png-favpng-JXPrXzVCsNk999fDgV98kh1u0.jpg'},
    {name: 'Photo 4',
        url: 'https://www.mathworks.com/matlabcentral/mlc-downloads/downloads/submissions/50965/versions/1/screenshot.jpg'},
    {name: 'Photo 5',
        url: 'https://png.pngtree.com/png-clipart/20190705/original/pngtree-xml-file-document-icon-png-image_4187769.jpg'}
]
const testing = [
    {name: 'Photo 1',
        url: 'https://miro.medium.com/max/796/1*Q26gw-kNzOXUqZKRr04T-g.png'},
    {name: 'Photo 2',
        url: 'https://miro.medium.com/max/400/1*WzkQwnaa5DdPNYy4mZWeOg.png'},
    {name: 'Photo 3',
        url: 'https://img.favpng.com/24/7/18/mocha-node-js-javascript-software-testing-npm-png-favpng-4PDZL9hF6jqxRgSYhg9VDxeUE.jpg'},
    {name: 'Photo 4',
        url: 'https://w0.pngwave.com/png/626/247/mocha-javascript-node-js-test-driven-development-assertion-chai-sheng-png-clip-art.png'},
    {name: 'Photo 5',
        url: 'https://s3.amazonaws.com/media-p.slid.es/uploads/338958/images/1496345/supertest.png'}
]
const deployment = [
    {name: 'Photo 1',
        url: 'https://img.pngio.com/pywbem-projects-github-pages-png-488_293.png'},
    {name: 'Photo 2',
        url: 'https://www.netlify.com/img/global/meta-image.jpg'},
    {name: 'Photo 3',
        url: 'https://www.fullstackpython.com/img/logos/heroku.png'}
]
const iT = [
    {name: 'Photo 1',
        url: 'https://wiki.dragino.com/images/0/08/TCP.png'},
    {name: 'Photo 2',
        url: 'https://www.multapplied.net/wp-content/uploads/2019/10/features-DHCP.png'},
    {name: 'Photo 3',
        url: 'https://documentation.help/Microchip-TCP.IP-Stack/ARP%20Flow.png'},
    {name: 'Photo 4',
        url: 'https://w7.pngwing.com/pngs/196/846/png-transparent-file-transfer-protocol-ftp-server-computer-servers-android-computer-software-android-text-rectangle-computer.png'},
    {name: 'Photo 5',
        url: 'https://images.squarespace-cdn.com/content/v1/58978c3ad2b857905a6dfb47/1514337793921-Y27B6U09W4TYG132Y4QK/ke17ZwdGBToddI8pDm48kL6GahiC0pRIKsaA_L2Qe_t7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UYy2cOLpH5BKbMBQNAwvLssUxXkbfYd84KpegaKhJ05GJvwGh1qtNWvMhYKnvaKhbA/compTIA.png'},
    {name: 'Photo 6',
        url: 'https://www.thiep.com.sa/images/training/network.png'},
    {name: 'Photo 7',
        url: 'https://www.evolve-it.net/wp-content/uploads/2018/07/MCP-e1531815746201.png'},
]
const interpersonal = [
    {name: 'Photo 1',
        url: 'https://www.freepnglogos.com/uploads/marine-corps-png-logo/u-s-marine-corps-birthday-png-logo-1.png'},
    {name: 'Photo 2',
        url: 'https://mcgannfacialdesign.com/wp-content/uploads/2014/02/Details-Matter.png'},
    {name: 'Photo 3',
        url: 'https://www.pngitem.com/pimgs/m/60-608920_acts-of-kindness-clipart-hd-png-download.png'},
    {name: 'Photo 4',
        url: 'https://www.pinclipart.com/picdir/middle/245-2454671_right-clipart-fairness-png-download.png'},
    {name: 'Photo 5',
        url: 'https://png.pngtree.com/png-vector/20200131/ourlarge/pngtree-deadline-time-management-business-concept-png-image_2138573.jpg'},
    {name: 'Photo 6',
        url: 'https://www.clipartmax.com/png/middle/347-3470004_enthusiastic-png-transparent-images-symbol-of-enthusiasm.png'},
    {name: 'Photo 7',
        url: 'https://w7.pngwing.com/pngs/623/256/png-transparent-vo2-max-endurance-training-athlete-sport-others-angle-hand-sport.png'}
]

export const Skills = () => {
    const settings = {
        dots: false,
        fade: true,
        centerMode: true,
        adaptiveHeight: true,
        infinite: true,
        useCSS: true,
        //dotsClass: "slick-dots",
        swipeToSlide: true,
        swipe: true,
        pauseOnHover: false,
        autoplaySpeed: 1150,
        autoplay: true,
        slidesToShow: 1,
        arrows: false,
        slidesToScroll: 1,
        //className: "slides2"
    }
    
    //get settings from => https://react-slick.neostack.com/
    return (
        <React.Fragment>
            <div style={{
                'padding':'5%',
                'backgroundColor':'rgba(0,0,0,0.8)', 
                'margin':'0',
                'boxShadow': '10px 10px 10px black',
                'position': 'absolute',
                'height': 'auto',
                //'width': '50%'
                }} className="position-absolute w-100">
                <div style={{
                    'borderRadius': '7px',
                    'boxShadow': '10px 10px 10px darkgrey',
                    'padding': '5%',
                    'margin':'0', 
                    'backgroundColor': 'rgba(0, 0, 0, 0.6)',
                    'color': 'darkgrey'
                }} >
                    <center>
                    <h4>Skills:</h4><br />
                    <h5>Frontend:</h5><br />
                    <Slider {...settings}>
                        {front.map((photo) => {
                            return(
                                    <div key={photo.name}>
                                            <img style={{
                                            'borderRadius': '5px',
                                            'boxShadow': '10px 10px 10px darkgrey'
                                            }} width='157px' height='175px' src={photo.url} alt='pictures of Skills'/>
                                    </div>
                                )
                            })}
                    </Slider><br />
                    <p>&emsp;HTML5, CSS3, JavaScript, React, Bootstrap, Sass, NextJs, Gatsby, User Interface (UI), User Experience (UX).</p>
                    <h5>Backend:</h5><br />
                    <Slider {...settings}>
                        {back.map((photo) => {
                            return(
                                    <div key={photo.name}>
                                            <img style={{
                                            'borderRadius': '5px',
                                            'boxShadow': '10px 10px 10px darkgrey'
                                            }} width='157px' height='175px' src={photo.url} alt='pictures of Skills'/>
                                    </div>
                                )
                            })}
                    </Slider><br />
                    <p>&emsp;Python, Django, NodeJs, Express, Firebase, Restful API's.</p>
                    <h5>Databases:</h5><br />
                    <Slider {...settings}>
                        {db.map((photo) => {
                            return(
                                    <div key={photo.name}>
                                            <img style={{
                                            'borderRadius': '5px',
                                            'boxShadow': '10px 10px 10px darkgrey'
                                            }} width='157px' height='175px' src={photo.url} alt='pictures of Skills'/>
                                    </div>
                                )
                            })}
                    </Slider><br />
                    <p>&emsp;MongoDb, PostgresqL, MySQL, JSON, XML.</p>
                    <h5>Testing:</h5><br />
                    <Slider {...settings}>
                        {testing.map((photo) => {
                            return(
                                    <div key={photo.name}>
                                            <img style={{
                                            'borderRadius': '5px',
                                            'boxShadow': '10px 10px 10px darkgrey'
                                            }} width='157px' height='175px' src={photo.url} alt='pictures of Skills'/>
                                    </div>
                                )
                            })}
                    </Slider><br />
                    <p>&emsp;Jest, Enzyme, Mocha, Chai, Supertest.</p>
                    <h5>Deployment:</h5><br />
                    <Slider {...settings}>
                        {deployment.map((photo) => {
                            return(
                                    <div key={photo.name}>
                                            <img style={{
                                            'borderRadius': '5px',
                                            'boxShadow': '10px 10px 10px darkgrey'
                                            }} width='157px' height='175px' src={photo.url} alt='pictures of Skills'/>
                                    </div>
                                )
                            })}
                    </Slider><br />
                    <p>&emsp;Github Pages, Netlify, Heroku.</p>
                    <h5>Information Technology:</h5><br />
                    <Slider {...settings}>
                        {iT.map((photo) => {
                            return(
                                    <div key={photo.name}>
                                            <img style={{
                                            'borderRadius': '5px',
                                            'boxShadow': '10px 10px 10px darkgrey'
                                            }} width='157px' height='175px' src={photo.url} alt='pictures of Skills'/>
                                    </div>
                                )
                            })}
                    </Slider><br />
                    <p>&emsp;TCP/IP, DHCP, ARP, PING, FTP, IPCONFIG, TRACERT, TELNET, DOS, CLI, A+, Net+, MCP, CNA.</p>
                    <h5>Interpersonal:</h5><br />
                    <Slider {...settings}>
                        {interpersonal.map((photo) => {
                            return(
                                    <div key={photo.name}>
                                            <img style={{
                                            'borderRadius': '5px',
                                            'boxShadow': '10px 10px 10px darkgrey'
                                            }} width='157px' height='175px' src={photo.url} alt='pictures of Skills'/>
                                    </div>
                                )
                            })}
                    </Slider><br />
                    <p>&emsp;Marine Corps Veteran, Attention to detail, Courtesy, Fairness, Time management, Enthusiasm, Endurance.</p>
                    <br />
                    </center>
                </div> 
            </div>
        </React.Fragment>
    )
}