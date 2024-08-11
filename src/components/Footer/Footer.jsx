import React from 'react'
import './Footer.css'
import '../Hero/Hero.css'

const Footer = () => {
    return (
        <section className='footer-container'>
            <div className='footer-content'>
                <div>
                    <div className='tect-icon'>
                        <a href="#"><i className="fa-brands fa-facebook facebook"></i></a>
                    </div>
                    <div className='tect-icon'>
                        <a href=""><i className="fa-brands fa-instagram instagram"></i></a>
                    </div>
                    <div className='tect-icon'>
                        <a href=""><i className="fa-brands fa-line line"></i></a>
                    </div>
                    <div className='tect-icon'>
                        <a href=""><i className="fa-brands fa-x-twitter twitter"></i></a>
                    </div>
                </div>
                <button onClick={() => window.open("https://github.com/masternx7", "_blank")}>
                    GitHub <i className="fa-brands fa-github"></i>
                </button>
                <div className='txtfooter'>
                    <p>Developed With ❤️ by Nontapat Supkong</p>
                </div>
            </div>
        </section>
    )
}

export default Footer