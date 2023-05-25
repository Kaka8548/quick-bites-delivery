// import { useState } from 'react';
import {
  OrderCont,
  OrderCountInput,
  OrderImg,
  OrderItem,
  OrderLabel,
  OrderPrice,
  OrderTitle,
} from './CartOrder.styled';

export const CartOrder = () => {
  return (
    <OrderCont>
      <OrderItem>
        <OrderImg></OrderImg>
        <OrderLabel>
          <OrderTitle></OrderTitle>
          <OrderPrice></OrderPrice>
          <OrderCountInput
            type="number"
            name="items"
            min="1"
            max="100"
            step="1"
          />
        </OrderLabel>
      </OrderItem>
      <OrderItem>
        <OrderImg></OrderImg>
        <OrderLabel>
          <OrderTitle></OrderTitle>
          <OrderPrice></OrderPrice>
          <OrderCountInput
            type="number"
            name="items"
            min="1"
            max="100"
            step="1"
          />
        </OrderLabel>
      </OrderItem>
    </OrderCont>
  );
};
