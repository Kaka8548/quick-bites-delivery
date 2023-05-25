import styled from 'styled-components';

export const MenuCont = styled.div`
  padding: 0 40px;
`;

export const MenuList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 35px;
`;

export const MenuItem = styled.li`
  width: calc((100% - 99px) / 2);
  border: 1px solid black;
  border-radius: 10px;
  padding: 15px;
`;

export const ItemImg = styled.img`
  height: 150px;
  width: 100%;
  object-fit: cover;
  margin-bottom: 15px;
`;

export const ItemTitle = styled.p`
  font-size: 24px;
  font-weight: 500;
  margin-bottom: 10px;
`;

export const ItemPrice = styled.p`
  font-size: 18px;
  margin-bottom: 10px;
`;

export const ItemBtn = styled.button`
  text-align: center;
  padding: 15px 30px;
  background-color: gray;
  border-radius: 10px;
  border: 1px solid transparent;
  font-size: 18px;
  color: white;
  font-weight: 500;
`;
