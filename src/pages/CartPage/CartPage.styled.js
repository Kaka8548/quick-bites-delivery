import styled from 'styled-components';

export const CartPageCont = styled.main`
  padding: 20px 20px 0;
`;

export const OrderForm = styled.form``;

export const CartPageList = styled.ul`
  display: flex;
  gap: 20px;
`;

export const CartPageItem = styled.li`
  width: calc((100% - 24px) / 2);
  border: 1px solid black;
  border-radius: 10px;
  padding: 15px;
  padding-bottom: 40px;
`;
