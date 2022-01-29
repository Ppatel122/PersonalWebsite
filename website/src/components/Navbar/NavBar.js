import React from 'react';
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { Nav, NavLink, NavMenu, NavBtn, NavBtnLink } from './NavBarElements';

const NavBar = () => {
  return (
    <>
      <Nav>
        <NavLink to='/'>
          <h1>Pranj Patel</h1>
        </NavLink>
        <NavMenu>
            <NavLink to="/education" activeStyle>
                Education
            </NavLink>
            <NavLink to="/experience" activeStyle>
                Experience
            </NavLink>
            <NavLink to="/projects" activeStyle>
                Projects
            </NavLink>
        </NavMenu>
        <NavMenu>
            <NavBtn>
                <NavBtnLink to="/contact"><a href="https://github.com/Ppatel122" class="social-link"><FaGithub/></a></NavBtnLink>
            </NavBtn>
            <NavBtn>
                <NavBtnLink to="/contact"><a href="https://www.linkedin.com/in/pranj-patel-a1a4b81aa/" class="social-link"><FaLinkedin/></a></NavBtnLink>
            </NavBtn>
            <NavBtn>    
                <NavBtnLink to="/contact"><a href="mailto:pranj@ualberta.ca" class="social-link"><SiGmail/></a></NavBtnLink>
            </NavBtn>
        </NavMenu>
      </Nav>
    </>
  );
};

export default NavBar;

