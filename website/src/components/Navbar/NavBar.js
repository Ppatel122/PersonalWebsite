import React , {useState, useEffect} from 'react';
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { Nav, NavLink, NavMenu, NavBtn, NavBtnLink } from './NavBarElements';
import {HashLink as Link} from "react-router-hash-link"

const NavBar = () => {
    const[navbar, setNavbar] = useState(false);

    const changeBackground = () => {
        if(window.scrollY >= 80){
            setNavbar(true);
        } else {
            setNavbar(false);
        }
    }

    window.addEventListener('scroll', changeBackground);

    return (
        <>
        <Nav className={navbar ? 'navbar active': 'navbar'}>
            <NavLink to='/' className="left">
                <h1>Pranj Patel</h1>
            </NavLink>
            <NavMenu className='right'>
                <NavLink to="#education" activeStyle>
                    <b>Education</b>
                </NavLink>
                <NavLink to="#skills" activeStyle>
                    <b>Skills</b>
                </NavLink>
                <NavLink to="#experience" activeStyle>
                    <b>Experience</b>
                </NavLink>
                <NavLink to="#projects" activeStyle>
                    <b>Projects</b>
                </NavLink>
                <NavLink to="#contact" activeStyle>
                    <b>Contact</b>
                </NavLink>
            </NavMenu>
            {/* <NavMenu>
                <a href="https://github.com/Ppatel122" class="link-buttons">
                    <FaGithub size={40} color={"white"}/>
                </a>
                <a href="https://www.linkedin.com/in/pranj-patel-a1a4b81aa/"  class="link-buttons">
                    <FaLinkedin size={40} color={"#0e76a8"} />
                </a>
                <a href="mailto:pranj@ualberta.ca" class="link-buttons">
                    <SiGmail size={40} color={"red"}/>
                </a>
            </NavMenu> */}
        </Nav>
        </>
    );
};

export default NavBar;

