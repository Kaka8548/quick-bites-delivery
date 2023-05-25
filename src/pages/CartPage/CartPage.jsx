import { CartInfo } from 'components/CartInfo/CartInfo';
import {
  CartPageCont,
  CartPageItem,
  CartPageList,
  OrderForm,
} from './CartPage.styled';
import { CartOrder } from 'components/CartOrder/CartOrder';

export const CartPage = () => {
  return (
    <CartPageCont>
      <OrderForm>
        <CartPageList>
          <CartPageItem>
            <CartInfo></CartInfo>
          </CartPageItem>
          <CartPageItem>
            <CartOrder></CartOrder>
          </CartPageItem>
        </CartPageList>
      </OrderForm>
    </CartPageCont>
  );
};
