import React, { useEffect } from 'react'
import './Skills.css'
import htmlimg from './images/imghtml.png'
import cssimg from './images/imgcss.png'
import jsimg from './images/imgjs.png'
import viteimg from './images/vite.png'
import figmaimg from './images/figma.png'
import firebaseimg from './images/firebase.webp'
import dartimg from './images/dart.png'
import rsimg from './images/logoreact.webp'
import flutterimg from './images/flutter.png'
import mssql from './images/mssql.png'
import AOS from 'aos';
import 'aos/dist/aos.css';


const Skills = () => {
    useEffect(() => {
        AOS.init({ duration: 1200 });
    }, []);

    return (
        <section id="skills" className='skills-container'>
            <div className='skills-content'>
                <h2>MY SKILLS</h2>
                <p>I like simplicity, modern style, and creativity in making the user experience easy and<br></br> impressive for the users</p>
            </div>
            <div className='skills-tools'>
                <h3>LANGUAGES AND TOOLS</h3>
                <div className='skills-img-l' data-aos="fade-right">
                    <div>
                        <img src={htmlimg} alt="" />
                    </div>
                    <div>
                        <img src={cssimg} alt="" />
                    </div>
                    <div>
                        <img src={jsimg} alt="" />
                    </div>
                    <div>
                        <img src={viteimg} alt="" />
                    </div>
                    <div className='figma-img'>
                        <img src={figmaimg} alt="" />
                    </div>
                    <div>
                        <img src={firebaseimg} alt="" />
                    </div>
                    <div>
                        <img src={dartimg} alt="" />
                    </div>
                </div>
            </div>

            <div className='skills-con-lib-db'>
                <div className='skills-lib'>
                    <h3>LIBRARIES AND FRAMEWORKS</h3>
                    <div className='skills-img' data-aos="fade-right">
                        <div>
                            <img src={rsimg} alt="" />
                        </div>
                        <div className='flutter-img'>
                            <img src={flutterimg} alt="" />
                        </div>
                    </div>
                </div>

                <div className='skills-db'>
                    <h3>DATABASES</h3>
                    <div className='skills-img' data-aos="fade-right">
                        <div>
                            <img src={mssql} alt="" />
                        </div>
                        <div>
                            <img src={firebaseimg} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills