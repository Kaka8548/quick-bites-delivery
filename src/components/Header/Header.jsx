import { Link } from 'react-router-dom';
import { HeaderCont, NavItem, NavBtn, NavList } from './Header.styled';

export const Header = () => {
  return (
    <HeaderCont>
      <NavList>
        <NavItem>
          <NavBtn to={'/'}>Shop</NavBtn>
        </NavItem>
        <NavItem>
          <NavBtn to={'/cart'}>Shopping Cart</NavBtn>
        </NavItem>
      </NavList>
    </HeaderCont>
  );
};
