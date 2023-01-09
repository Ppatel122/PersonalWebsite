import React , {useState} from 'react';
import { Nav, NavLink, NavMenu } from './NavBarElements';

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
        </Nav>
        </>
    );
};

export default NavBar;

