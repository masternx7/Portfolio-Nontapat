import React from 'react'
import './Footer.css'
import '../Hero/Hero.css'

const Footer = () => {
    return (
        <section className='footer-container'>
            <div className='footer-content'>
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