import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const ShopsCont = styled.div`
  padding: 20px 40px 20px;
  border: 1px solid black;
  border-radius: 10px;
  text-align: center;
`;

export const ShopsTitle = styled.h2`
  margin-bottom: 15px;
`;

export const Shops = styled.ul``;

export const Shop = styled.li`
  padding: 20px 30px 20px;
  border: 1px solid black;
  border-radius: 10px;
  font-size: 24px;
  & + & {
    margin-top: 15px;
  }
`;

export const ShopLink = styled(NavLink)`
  color: black;
`;
