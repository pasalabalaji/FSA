import React, { useState } from 'react';
import "../assets/Navbar.css"
import Cookies from 'js-cookie';
import {useNavigate} from 'react-router-dom';
import { Link } from 'react-router-dom';

export const Navbar = () => {
    const navigate = useNavigate();
    const handleLogout = (event) => {
        event.preventDefault(); 
        Cookies.remove('username'); 
        Cookies.remove('email');
        Cookies.remove('UID');
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
                        <Link to="/profile" style={{ textDecoration: 'none' }} className="nav-links">Profile</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/Userfiles" style={{ textDecoration: 'none' }} className="nav-links">Received Files</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/" style={{ textDecoration: 'none' }} className="nav-links" onClick={handleLogout}>Logout</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};


