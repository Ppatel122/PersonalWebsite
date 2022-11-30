import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.nav`
  position: fixed;
  top: 0;
  z-index: 10;
  fixed: top;
  width: 100%;
  background: transparent;
  height: 75px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: all 0.3s ease-in-out;
  &.active {
    transition: all 0.3s ease-in-out;  
    background: #000;
  }
`;



export const NavLink = styled(Link)`
  color: #eee;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  margin-left:30px;
  cursor: pointer;


`;



export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: 30px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 10px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtnLink = styled(Link)`
  border-radius: 4px;
  background: #15cdfc;
  padding: 10px 22px;
  color: #fff;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  text-decoration: none;
  
  &:hover {
    transition: all 0.3s ease-in-out;
    background: #fff;
    color: #010606;
  }
`;
