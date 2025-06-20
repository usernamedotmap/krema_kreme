import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { loginUser, setGuestId } from "../redux/slices/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { clearCart, mergeCart } from "../redux/slices/cartSlice";
const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const { user, guestId } = useSelector((state) => state.auth);
  const { cart } = useSelector((state) => state.cart);

  const redirect = new URLSearchParams(location.search).get("redirect") || "/";
  const isCheckoutRedirect = redirect.includes("checkout");

    console.log("cart to:", cart);
  console.log("userid to", user);
  console.log("guestId to", guestId)


  useEffect(() => {
    if (user) {
     if (Array.isArray(cart?.products) && cart.products.length > 0 && guestId) {
        dispatch(mergeCart({guestId, user})).then(() => {
          navigate(isCheckoutRedirect ? "/checkout" : "/")
        })
      } else {
        navigate(isCheckoutRedirect ? "/checkout" : "/")
      }
    }
  }, [user, guestId, cart, navigate, isCheckoutRedirect, dispatch])

  // useEffect(() => {
  //   if (user) {
  //     if (cart?.products.length > 0 && guestId) {
  //       console.log("🧾 guestId:", guestId);
  //       console.log("🛒 cart from Redux:", cart);
  //       console.log("📦 cart in localStorage:", localStorage.getItem("cart"));

  //       dispatch(mergeCart({ guestId, user })).then(() =>
  //         navigate(isCheckoutRedirect ? "/checkout" : "/")
  //       );
  //     } else {
  //       navigate(isCheckoutRedirect ? "/checkout" : "/");
  //     }
  //   }
  // }, [user, guestId, cart, navigate, isCheckoutRedirect, dispatch]);

  // useEffect(() => {
  //   if (user) {
  //     if (cart?.products.length > 0 && guestId) {
  //       dispatch(mergeCart({ guestId, user })).then(() =>
  //         navigate(isCheckoutRedirect ? "/checkout" : "/")
  //       );
  //     } else {
  //       navigate(isCheckoutRedirect ? "/checkout" : "/");
  //     }
  //   }
  // }, [user, guestId, cart, navigate, isCheckoutRedirect, dispatch]);


  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser({ ...formData }));
  };
  return (
    <div className="flex">
      <div className="w-full md:w-1/2 flex flex-col items-center justify-center p-8 md:p-12">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-md bg-white p-8 rounded-lg  border-2  shadow-lg"
        >
          <div className="flex justify-center mb-6">
            <h2 className="text-xl font-medium">Krema Kreme</h2>
          </div>
          <h2 className="text-2xl font-bold text-center mb-6 ">HeeeLUU</h2>
          <p className="text-center mb-6">
            Enter your email and password to login
          </p>

          <div className="mb-4">
            <label className="block text-sm font-semibold mb-2">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, [e.target.name]: e.target.value })
              }
              className="w-full p-2 border rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-2">Password</label>
            <input
              type="password"
              name="password"
              autoComplete="true"
              placeholder="Enter your password"
              value={formData.password}
              onChange={(e) =>
                setFormData({ ...formData, [e.target.name]: e.target.value })
              }
              className="w-full p-2 border rounded"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-black text-white p-2 rounded-lg font-semibold hover:bg-gray-800 transition"
          >
            Login
          </button>
          <p className="mt-6 text-center text-md text-gray-700">
            Don{"'"}t have an account?{" "}
            <Link
              to={`/register?redirect=${encodeURIComponent("redirect")}`}
              className="text-blue-500"
            >
              Register
            </Link>
          </p>
        </form>
      </div>

      <div className="hidden md:block w-1/2 bg-gray-8000">
        <div className="w-full flex flex-col justify-center items-center">
          <img
            src="https://now.krispykreme.com.ph/dist/images/kk/kk-donut-og.png"
            alt=""
            className="h-[600px] w-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
