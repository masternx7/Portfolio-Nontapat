import React, { useEffect } from 'react'
import './Project.css'
import p1 from './images/project-flutter.png'
import p2 from './images/project-tesla.png'
import p3 from './images/project-brandcurb.png'
import p4 from './images/project-fluffyworld.png'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Project = () => {
    useEffect(() => {
        AOS.init({ duration: 1200 });
    }, []);

    return (
        <section id='projects' className='project-container'>
            <div className='project-content'>
                <h2>MY PROJECTS</h2>
                <p className='txt-p'>My important projects include both my graduation project and course projects from when I was a student.</p>
                <div className='card-container' data-aos="fade-left">
                    <div className='card-project'>
                        <div className="banner-image">
                            <img src={p1} alt="" />
                            <h1>Stylelist - Flutter</h1>
                            <p>I use Flutter for this project and Firebase as the database.</p>
                        </div>
                    </div>
                    <div className='card-project'>
                        <div className="banner-image">
                            <img src={p2} alt="" />
                            <h1>Tesla - HTML CSS JS</h1>
                            <p>Tesla</p>
                        </div>
                    </div>
                    <div className='card-project'>
                        <div className="banner-image">
                            <img src={p3} alt="" />
                            <h1>Brand Curb - Webstie Clone</h1>
                            <p>Clone</p>
                        </div>
                    </div>
                    <div className='card-project'>
                        <div className="banner-image">
                            <a href="http://fluffyworld.online/fluffyweb/" target='_blank'><img src={p4} alt="" /></a>
                            <h1>Fluffyworld - HTML CSS</h1>
                            <p>fluffyworld</p>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    )
}

export default Project