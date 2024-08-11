import React, { useEffect, useState } from 'react';
import './Contact.css'
import pg from './images/graphic-p.png'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Contact = () => {
    useEffect(() => {
        AOS.init({ duration: 1200 });
    }, []);
    return (
        <section className='contact-container' id='contact'>
            <div className='contact-header'>
                <h2>CONTACT</h2>
                <div className='contact-content'>
                    <img src={pg} alt="" />
                    <div className='contact-form' data-aos="fade-left">
                        <form>
                            <input type='text' placeholder='Name' className='nameInput'></input>
                            <input type='email' placeholder='Email' className='emailInput' ></input>
                            <input type='text' placeholder='Message' className='mesInput'></input>
                            <a href="#" >Send</a>
                        </form>
                    </div>

                </div>

            </div>
        </section>
    )
}

export default Contact