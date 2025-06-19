import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { clearCart } from "../redux/slices/cartSlice";

const OrderConfirmation = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { checkout } = useSelector((state) => state.checkout);
console.log("chekcout", checkout)
  useEffect(() => {
    if (checkout && checkout._id) {
      dispatch(clearCart());
      localStorage.removeItem("cart");
    } else {
      navigate("/my-orders");
    }
  }, [dispatch, navigate, checkout]);

  const estimatedDelivery = (createdAt) => {
    const orderDate = new Date(createdAt);

    orderDate.setHours(orderDate.getHours() + 100);

    return orderDate.toLocaleString("en-PH", {
      dateStyle: "medium",
      timeStyle: "short",
    });
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white ">
      <h1 className="text-4xl font-bold text-center text-emerald-700 mb-8 capitalize">
        Thank you for ordering! hihihi
      </h1>

      {checkout && (
        <div className="p-6 rounded-lg border">
          <div className="flex justify-between mb-20">
            {/* dito date */}
            <div>
              <h2 className="text-xl font-semibold">
                Order ID: {checkout._id}
              </h2>
              <p className="text-gray-500">
                Order Date: {new Date(checkout.createdAt).toLocaleDateString()}
              </p>
            </div>

            {/* delivery kkung gano siguro katagal */}
            <div>
              <p className="text-emeral-500 text-sm">
                Estimated Delivery: {estimatedDelivery(checkout.createdAt)}
              </p>
            </div>
          </div>
          <div className="mb-20">
            {checkout?.checkoutItems?.map((item) => (
              <div key={item.productId} className="flex items-center mb-4">
                <img
                  src={item?.images[0]?.url || "/fallback.jpg"}
                  alt={item.name}
                  className="w-16 h-16 object-cover rounded-md mr-4"
                />
                <div>
                  <h4 className="text-md font-semibold">{item.name}</h4>
                  <p className="text-gray-500 text-sm">
                    Size: {item.size?.label || item.size}
                  </p>
                </div>
                <div className="ml-auto text-right">
                  <p className="text-md">
                    {Number(item.price).toLocaleString("en-PH", {
                      style: "currency",
                      currency: "PHP",
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    })}
                  </p>
                  <p className="text-sm text-gray-500">QTY: {item.quantity}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-semibold mb-2">Payment</h4>
              <p className="text-gray-600">Paypal</p>
            </div>

            <div className="">
              <h4 className="text-lg font-semibold mb-2">Delivery</h4>
              <p className="text-gray-600">
                {checkout.shippingAddress.address}
              </p>
              <p className="text-gray-600">{checkout.shippingAddress.city}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default OrderConfirmation;
