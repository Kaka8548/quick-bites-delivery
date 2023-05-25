import { ShopMenu } from 'components/ShopMenu/ShopMenu';
import { ShopsList } from 'components/ShopsList/ShopsList';
import { ShopPageCont, ShopPageItem, ShopPageList } from './ShopPage.styled';

export const ShopPage = () => {
  return (
    <ShopPageCont>
      <ShopPageList>
        <ShopPageItem>
          <ShopsList />
        </ShopPageItem>

        <ShopPageItem>
          <ShopMenu />
        </ShopPageItem>
      </ShopPageList>
    </ShopPageCont>
  );
};
