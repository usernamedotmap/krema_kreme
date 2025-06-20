  import React, { useState } from "react";
  import { useNavigate } from "react-router-dom";
  import PaypalButton from "./PaypalButton";
  import { useDispatch, useSelector } from "react-redux";
  import { useEffect } from "react";
  import { createCheckout } from "../../redux/slices/checkoutSlice";
  import axios from "axios";
import api from "../common/ExpiredToken";

  const Checkout = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { cart, loading, error, } = useSelector((state) => state.cart);
    const { user } = useSelector((state) => state.auth);

    const [checkoutId, setCheckoutId] = useState(null);
    const [shippingAddress, setShippingAddress] = useState({
      firstName: "",
      lastName: "",
      address: "",
      city: "",
      phone: "",
    });

    const cities = [
      "Manila",
      "Quezon",
      "Makati",
      "Pasig",
      "Navotas",
      "Caloocan",
      "Marikina",
      "Pasay",
    ];

    useEffect(() => {
      if (!cart || !cart.products || cart.products.length === 0) {
        navigate("/");
      }
    }, [cart, navigate]);

    const handleSubmit = async (e) => {
      e.preventDefault();
      if (cart && cart.products.length > 0) {
        const res = await dispatch(
          createCheckout({
            checkoutItems: cart.products,
            shippingAddress,
            paymentMethod: "Paypal",
            totalPrice: cart.totalPrice,
          })
        );
        if (res.payload && res.payload._id) {
          setCheckoutId(res.payload._id);
        }
      }
    };

    const handlePaymentSuccess = async (details) => {
      try {
        const response = await axios.put(
          `${import.meta.env.VITE_BACKEND_URL}/checkout/${checkoutId}/pay`,
          {
            paymentStatus: "paid",
            paymentDetails: details,
          },
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("userToken")}`,
            },
          }
         
        );
         if (response.status === 200 && checkoutId) {
            await handleFinalizedCheckout(checkoutId)
          }
      
      } catch (error) {
        console.log(error);
      }

      navigate("/order-confirmation");
    };

    const handleFinalizedCheckout = async (checkoutId) => {
      try {
        const response = await api.post(
          `/checkout/${checkoutId}/finalize`,
          {},
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("userToken")}`,
            },
          }
        );
        if (response.status === 200) {
          navigate("/order-confirmation");
        } else {
          console.log(error)
        }
      } catch (error) {
        console.log(error);
      }
    };

    if (loading) return <p>Loading cart ...</p>
    if (error) return <p>Error: {error}</p>
    if (!cart || !cart.products || cart.products.length === 0) {
      return <p>Your cart is empty</p>
    }

    return (
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto py-10 px-6 tracking-tighter">
        {/* sa kaliwa */}
        <div className="bg-white rounded-lg p-6">
          <h2 className="text-2xl uppercase mb-6">Check me out</h2>
          <form onSubmit={handleSubmit}>
            <h3 className="text-lg mb-4">Contact Details</h3>
            <div className="mb-4">
              <label className="block text-gray-700">Email</label>
              <input
                type="email"
                value={user ? user.email : ""}
                className="w-full p-2 border rounded border-gray-400"
                disabled
              />
            </div>
            <h3 className="text-lg mb-4">Delivery</h3>
            <div className="mb-4 grid grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-700">First Name</label>
                <input
                  type="text"
                  value={shippingAddress.firstName}
                  onChange={(e) =>
                    setShippingAddress({
                      ...shippingAddress,
                      firstName: e.target.value,
                    })
                  }
                  className=" w-full p-2 border-gray-400 border   rounded"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700">Last Name</label>
                <input
                  type="text"
                  value={shippingAddress.lastName}
                  onChange={(e) =>
                    setShippingAddress({
                      ...shippingAddress,
                      lastName: e.target.value,
                    })
                  }
                  className=" w-full p-2 border rounded border-gray-400 "
                  required
                />
              </div>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Address</label>
              <input
                type="text"
                value={shippingAddress.address}
                onChange={(e) =>
                  setShippingAddress({
                    ...shippingAddress,
                    address: e.target.value,
                  })
                }
                className="w-full p-2 border border-gray-400 rounded"
                required
              />
            </div>

            <div className="mb-4 grid grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-700">City</label>
                <input
                  type="text"
                  list="city-list"
                  value={shippingAddress.city}
                  onChange={(e) =>
                    setShippingAddress({
                      ...shippingAddress,
                      city: e.target.value,
                    })
                  }
                  className=" w-full p-2 border rounded border-gray-400 "
                  required
                />
                <datalist id="city-list">
                  {cities.map((city) => (
                    <option key={city}>{city} City</option>
                  ))}
                </datalist>
              </div>
              <div>
                <label className="block text-gray-700">Phone Number</label>
                <input
                  type="tel"
                  value={shippingAddress.phone}
                  pattern="^\+639\d{9}$"
                  placeholder="example... +6399093847584"
                  onChange={(e) =>
                    setShippingAddress({
                      ...shippingAddress,
                      phone: e.target.value,
                    })
                  }
                  className=" w-full p-2 border rounded border-gray-400 "
                  required
                />
              </div>
            </div>

            <div className="mt-6">
              {!checkoutId ? (
                <button
                  type="submit"
                  className="w-full text-white bg-black py-3 px-6 rounded-md"
                >
                  Continue to Payment
                </button>
              ) : (
                <div>
                  <h3 className="text-lg mb-4">Pay with Paypal</h3>
                  <PaypalButton
                    amount={cart.totalPrice}
                    onSuccess={handlePaymentSuccess}
                    onError={() => alert("Payment Failed. Try Again")}
                  />
                </div>
              )}
            </div>
          </form>
        </div>

        <div className="bg-gray-50 p-6 rounded-lg">
          <h3 className="text-lg mb-4">Preview Order</h3>
          <div className="border-t py-4 mb-4">
            {cart.products.map((product, index) => (
              <div
                key={product.productId + index}
                className="flex items-start justify-between py-2 border-b"
              >
                <div className="flex items-start">
                  <img
                    src={product.images[0].url}
                    alt={product.name}
                    className="w-20 h-24 object-cover mr-4"
                  />
                  <div>
                    <h3 className="text-lg font-semibold">{product.name}</h3>
                    <p className="text-gray-500">Size: {product.size.label}</p>
                  </div>
                </div>
                <p className="text-xl">
                  {Number(product?.price).toLocaleString("en-PH", {
                    currency: "PHP",
                    style: "currency",
                  })}
                </p>
              </div>
            ))}
          </div>
          <div className="flex justify-between items-center text-lg mb-4">
            <p>Subtotal</p>
            <p>
              {cart.totalPrice.toLocaleString("en-PH", {
                currency: "PHP",
                style: "currency",
              })}
            </p>
          </div>
          <div className="flex justify-between items-center text-lg">
            <p>Shipping</p>
            <p>
              Free{" "}
              <span className="text-sm text-gray-400 tracking-tighter">
                (hidden charges)
              </span>
            </p>
          </div>
          <div className="flex justify-between items-center text-lg mt-4 border-t pt-4">
            <p>Total</p>
            <p className="text-rose-500">
              { cart.totalPrice.toLocaleString("en-PH", {
                currency: "PHP",
                style: "currency",
              })}
            </p>
          </div>
        </div>
      </div>
    );
  };

  export default Checkout;
