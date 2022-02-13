import React , {useState, useEffect} from 'react';
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { Nav, NavLink, NavMenu, NavBtn, NavBtnLink } from './NavBarElements';

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
            <NavLink to='/'>
            <h1>Pranj Patel</h1>
            </NavLink>
            {/* <NavMenu>
                <NavLink to="/education" activeStyle>
                    Education
                </NavLink>
                <NavLink to="/experience" activeStyle>
                    Experience
                </NavLink>
                <NavLink to="/projects" activeStyle>
                    Projects
                </NavLink>
            </NavMenu> */}
            <NavMenu>
                <a href="https://github.com/Ppatel122" target="_blank">
                    <FaGithub size={40} color={"white"}/>
                </a>
                <a href="https://www.linkedin.com/in/pranj-patel-a1a4b81aa/" target="_blank">
                    <FaLinkedin size={40} color={"#0e76a8"} />
                </a>
                <a href="mailto:pranj@ualberta.ca" target="_blank">
                    <SiGmail size={40} color={"red"}/>
                </a>
            </NavMenu>
        </Nav>
        </>
    );
};

export default NavBar;

