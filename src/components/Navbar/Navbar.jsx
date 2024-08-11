import React, { useState } from 'react'
import './Navbar.css'
import Sidebar from './Sidebar/Sidebar';

const Navbar = () => {

    const [openMenu, setOpenMenu] = useState(false);

    const toggleMenuSidebar = () => {
        setOpenMenu(!openMenu);
    }

    return (
        <>
            <Sidebar isOpen={openMenu} toggleMenuSidebar={toggleMenuSidebar} />

            <nav className='nav-warpper'>
                <div className='nav-content'>
                    <a href="#" className='nav-logo'>Nontapat</a>

                    <ul className='menu-ul'>
                        <li><a href="#" className='menu-items'>Home</a></li>
                        <li><a href="#skills" className='menu-items'>Skills</a></li>
                        <li><a href="#projects" className='menu-items'>Project</a></li>
                        <li><a href="#contact" className='menu-items'>Contact</a></li>
                    </ul>

                    <button className='btn-contact' onClick={() => { }} >
                        Contact Me
                    </button>

                    <button className='menu-btn' onClick={toggleMenuSidebar}>
                        <i className={`fa-solid ${openMenu ? 'fa-x' : 'fa-bars'}`}></i>
                    </button>
                </div>
            </nav>
        </>
    )
}

export default Navbar;
