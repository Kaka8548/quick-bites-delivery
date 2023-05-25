import {
  Shop,
  ShopLink,
  Shops,
  ShopsCont,
  ShopsTitle,
} from './ShopsList.styled';
import shopsData from 'data/shopsData.json';
import { nanoid } from 'nanoid';

export const ShopsList = () => {
  const data = shopsData.restaurants;

  return (
    <ShopsCont>
      <ShopsTitle>Shops:</ShopsTitle>
      <Shops>
        {data.map(restaurant => (
          <Shop key={nanoid()}>
            <ShopLink>{restaurant.name}</ShopLink>
          </Shop>
        ))}
      </Shops>
    </ShopsCont>
  );
};
