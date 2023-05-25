import {
  ItemBtn,
  ItemImg,
  ItemPrice,
  ItemTitle,
  MenuCont,
  MenuItem,
  MenuList,
} from './ShopMenu.styled';
import shopsData from 'data/shopsData.json';
import { nanoid } from 'nanoid';

export const ShopMenu = () => {
  const data = shopsData.restaurants[0].menu;

  console.log(data);

  return (
    <MenuCont>
      <MenuList>
        {data.map(item => (
          <MenuItem key={nanoid()}>
            <ItemImg src={item.image}></ItemImg>
            <ItemTitle>{item.title}</ItemTitle>
            <ItemPrice>{item.price} UAH</ItemPrice>
            <ItemBtn>Add to cart</ItemBtn>
          </MenuItem>
        ))}
      </MenuList>
    </MenuCont>
  );
};
