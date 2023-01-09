import { HashLink as Link } from 'react-router-hash-link';
import styled from 'styled-components';

export const Nav = styled.nav`
  position: fixed;
  top: 0;
  z-index: 5;
  fixed: top;
  width: 100%;
  background: #000;
  height: 75px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: all 0.3s ease-in-out;
`;

export const NavLink = styled(Link)`
  height: 100%;
  padding: 0 1.2rem;
  margin-left:30px;
  cursor: pointer;
  color: #eee;
  text-decoration: none;
  align-items: center;
  display: flex;
`;

export const NavMenu = styled.div`
  margin-right: 30px;
  display: flex;
  align-items: center;
`;
