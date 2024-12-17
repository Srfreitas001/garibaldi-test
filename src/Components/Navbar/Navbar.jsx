import React, { useState, useEffect } from 'react';
import './Navbar.css';
import logo from '../../assets/logo.png';
import menu_icon from '../../assets/menu-icon.svg';
import { Link } from 'react-scroll';



const Navbar = () => {


    const [mobileMenu, setMobileMenu] = useState(false);

    const toggleMenu = () => {

        mobileMenu ? setMobileMenu(false) : setMobileMenu(true);

    }

    const [sticky, setSticky] = useState(false);

    useEffect(() => {

        window.addEventListener('scroll', () => {

            window.scrollY > 500 ? setSticky(true) : setSticky(false);

        })

    }, [])

    const [isCopyrightsOpen] = useState(false);




    return (

        <nav className={`container-nav ${sticky ? 'dark-nav' : ''}`}>
            <Link to='hero' duration={500} smooth='true' offset={0}>
                <img src={logo} alt="main-logo" className='logo' /></Link>

            <ul className={mobileMenu ? '' : 'hide-mobile-menu'}>

                <img src={logo} alt="" className='main-logo-hide' onClick={toggleMenu} />
                <li><Link to='hero' offset={0} smooth='true' duration={500}>Início</Link> </li>
                <li><Link to='about' offset={-72} smooth='true' duration={500}>História</Link></li>
                <li><Link to='highlights' offset={-40} smooth='true' duration={500}>Destaques</Link></li>
                <li><Link to='gallery-box' offset={-310} smooth='true' duration={500}>Galeria</Link></li>
                <li>Agende</li>
                <li><button className='btn'>Contate</button></li>

            </ul>

            <img src={menu_icon} alt="main-logo-hide" className={`menu-icon ${isCopyrightsOpen ? 'hide' : ''}`} onClick={toggleMenu} />
        </nav>

    )
};

export default Navbar;