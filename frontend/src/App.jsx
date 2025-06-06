import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserLayout from "./components/layout/UserLayout";
import HomePage from "./pages/HomePage";
import { Toaster } from "sonner";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import ShopPage from "./pages/ShopPage";
import DetailsProduct from "./products/DetailsProduct";
import Checkout from "./components/cart/Checkout";
import OrderConfirmation from "./pages/OrderConfirmation";

function App() {
  return (
    <>
      <BrowserRouter>
        <Toaster position="bottom-right" />
        <Routes>
          <Route path="/" element={<UserLayout />}>
            <Route index element={<HomePage />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="profile" element={<Profile />} />
            <Route path="collections/:collection" element={<ShopPage />} />
            <Route path="product/:id" element={<DetailsProduct />} />
            <Route path="checkout" element={<Checkout />} />
            <Route path="order-confirmation" element={<OrderConfirmation />} />
          </Route>
          <Route></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
