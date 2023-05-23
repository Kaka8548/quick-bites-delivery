import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const HeaderCont = styled.header`
  background-color: #adb6c4;
`;

export const NavList = styled.ul`
  display: flex;
  gap: 20px;
  justify-content: left;
`;

export const NavItem = styled.li``;

export const NavBtn = styled(NavLink)`
  color: white;
`;
