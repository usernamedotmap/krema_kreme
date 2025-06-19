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
import OrderDetails from "./pages/OrderDetails";
import OrderPage from "./pages/OrderPage";
import AdminLayout from "./components/admin/AdminLayout";
import AdminHomePage from "./pages/admin/AdminHomePage";
import UserManagement from "./components/admin/UserManagement";
import ProductsManagement from "./components/admin/ProductsManagement";
import EditProduct from "./components/admin/EditProduct";
import OrderManagement from "./components/admin/OrderManagement";

import { Provider } from "react-redux";
import store from "./redux/store";
import ProtectedRoute from "./components/common/ProtectedRoute";

function App() {
  return (
    <>
      <Provider store={store}>
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
              <Route
                path="order-confirmation"
                element={<OrderConfirmation />}
              />
              <Route path="order-details/:id" element={<OrderDetails />} />
              <Route path="/my-orders" element={<OrderPage />} />
            </Route>

            {/* for admin dito */}
            <Route
              path="/admin"
              element={
                <ProtectedRoute role="admin">
                  <AdminLayout />
                </ProtectedRoute>
              }
            >
              <Route index element={<AdminHomePage />} />
              <Route path="users" element={<UserManagement />} />
              <Route path="products" element={<ProductsManagement />} />
              <Route path="products/:id/edit" element={<EditProduct />} />
              <Route path="orders" element={<OrderManagement />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
