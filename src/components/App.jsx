import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout';
import { ShopPage } from 'pages/ShopPage';
import { CartPage } from 'pages/CartPage';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<ShopPage />}></Route>
        <Route path="/cart" element={<CartPage />} />
      </Route>
    </Routes>
  );
};
