import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import PaypalButton from "./PaypalButton";

const cartItems = [
  {
    productId: 1,
    name: "Eahcakes",
    price: "100",
    size: "M",
    quantity: 2,
    image:
      "https://mgi-deliveryportal.s3.amazonaws.com/1418x1063px-MGCC-KK-Bites-Bucket.jpg",
  },
  {
    productId: 2,
    name: "Eahcakes",
    price: "200",
    size: "L",
    quantity: 2,
    image:
      "https://mgi-deliveryportal.s3.amazonaws.com/1418x1063px-MGCC-KK-Bites-Bucket.jpg",
  },
];
const Checkout = () => {
  const navigate = useNavigate();
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

  const totalAmount = cartItems.reduce(
    (sum, item) => sum + Number(item.price) * item.quantity,
    0
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    setCheckoutId(123);
  };

  const handlePaymentSuccess = (details) => {
    console.log("Payment Success", details);
    navigate("/order-confirmation");
  };

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
              value="testinglang@test.com"
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
                  amount={100}
                  onSuccess={handlePaymentSuccess}
                  onError={(err) => alert("Payment Failed. Try Again")}
                />
              </div>
            )}
          </div>
        </form>
      </div>

      <div className="bg-gray-50 p-6 rounded-lg">
        <h3 className="text-lg mb-4">Preview Order</h3>
        <div className="border-t py-4 mb-4">
          {cartItems.map((product) => (
            <div
              key={product.productId}
              className="flex items-start justify-between py-2 border-b"
            >
              <div className="flex items-start">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-20 h-24 object-cover mr-4"
                />
                <div>
                  <h3 className="text-lg font-semibold">{product.name}</h3>
                  <p className="text-gray-500">Size: {product.size}</p>
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
            {totalAmount.toLocaleString("en-PH", {
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
            {totalAmount.toLocaleString("en-PH", {
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
