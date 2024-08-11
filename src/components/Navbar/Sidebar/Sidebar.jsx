import React from 'react'
import './Sidebar.css'

const Sidebar = ({ isOpen, toggleMenuSidebar }) => {
    return (
        <>
            <div className={`sidebar-menu ${isOpen ? "active" : ""}`} onClick={toggleMenuSidebar}>
                <div className='sidebar-menu-warpper'>
                    <a href="#" className='nav-logo'>Nonthaphat</a>
                    <ul className='menu-ul-sidebar'>
                        <li><a href="#" className='menu-items'>Home</a></li>
                        <li><a href="#skills" className='menu-items'>Skills</a></li>
                        <li><a href="#projects" className='menu-items'>Project</a></li>
                        <li><a href="#contact" className='menu-items'>Contact</a></li>
                        <button className='btn-contact-side' onClick={() => { }} >
                            Contact Me
                        </button>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Sidebar