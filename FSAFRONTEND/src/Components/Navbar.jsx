import React, { useState } from 'react';
import "../assets/Navbar.css"
import Cookies from 'js-cookie';
import {useNavigate} from 'react-router-dom';

export const Navbar = () => {
    const navigate = useNavigate();
    const handleLogout = (event) => {
        event.preventDefault(); 
        Cookies.remove('username'); 
        navigate('/'); 
      };
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <div className="navbar-logo">
                    FileSharingApp
                </div>
                <div className="menu-icon" onClick={toggleMenu}>
                    <i className={isOpen ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
                <ul className={isOpen ? 'nav-menu active' : 'nav-menu'}>
                    <li className="nav-item">
                        <a href="/profile" className="nav-links">Profile</a>
                    </li>
                    <li className="nav-item">
                        <a href="/Userfiles" className="nav-links">Received Files</a>
                    </li>
                    <li className="nav-item">
                        <a href="/" className="nav-links" onClick={handleLogout}>Logout</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};


