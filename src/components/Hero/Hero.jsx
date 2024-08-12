import React, { useEffect, useState } from 'react';
import './Hero.css';
import imgMe from './images/myphoto.png';
import { useTypewriter, Cursor } from 'react-simple-typewriter';

const Hero = () => {

    const [text] = useTypewriter({
        words: ['Fronted Developer', 'Timely Worker', 'Reliable Partner'],
        loop: true,
        typeSpeed: 120,
        deleteSpeed: 80,
        delaySpeed: 1000,
    });


    return (
        <section className='hero-container'>
            <div className='hero-content'>
                <h2>I'm Nontapat, <br></br><span>{text}<Cursor /></span></h2>
                <p>Passion for Frontend Developer | Creating easy-to-use and beautiful digital Experiences</p>
                <a href="https://github.com/masternx7" target='_blank'>GitHub <i class="fa-brands fa-github"></i></a>
            </div>

            <div className='hero-img'>
                <div>
                    <img className="img-me" src={imgMe} alt="" />
                </div>

                <div>
                    <div className='tect-icon'>
                        <a href="https://www.facebook.com/nontapatxnon" target='_blank'><i className="fa-brands fa-facebook facebook"></i></a>
                    </div>
                    <div className='tect-icon'>
                        <a href="https://www.instagram.com/ntpp.non?igsh=MTVkbzJtY2x0ajN1eQ%3D%3D&utm_source=qr" target='_blank'><i className="fa-brands fa-instagram instagram"></i></a>
                    </div>
                    <div className='tect-icon'>
                        <a href="https://line.me/ti/p/R4egOlavxP" target='_blank'><i className="fa-brands fa-line line"></i></a>
                    </div>
                    <div className='tect-icon'>
                        <a href=""><i className="fa-brands fa-x-twitter twitter"></i></a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;
