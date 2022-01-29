import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.nav`
  background: #000;
  height: 75px;
  display: flex;
  justify-content: space-between;
  padding: 0.25rem calc((100vw - 1000px) / 2);
`;

export const NavLink = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  height: 100%;
  cursor: pointer;

  &.active {
      color: #15cdfc;
  }
`;



export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -30px;
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
