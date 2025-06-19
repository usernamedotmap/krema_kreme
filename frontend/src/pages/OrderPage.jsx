import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchUserOrders } from "../redux/slices/orderSlice";

const OrderPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { orders, loading, error } = useSelector((state) => state.orders);

  useEffect(() => {
    dispatch(fetchUserOrders());
  }, [dispatch]);

  const handleRowClick = (orderId) => {
    navigate(`/order-details/${orderId}`);
  };

  if (loading) return <p>Loading</p>
  if (error) return <p>Error: {error}</p>

  return (
    <div className="max-w-7xl mx-auto p-4 sm:p-6">
      <h2 className="text-xl sm:text-2xl font-bold mb-6">My Orders</h2>
      <div className="relative shadow-md sm:rounded-lg overflow-x-auto">
        <table className="min-w-full text-left text-gray-600">
          <thead className="bg-gray-100 text-xs uppercase text-gray-700">
            <tr>
              <th className="py-2 px-4 sm:py-3 md:text-base">Image</th>
              <th className="py-2 px-4 sm:py-3 md:text-base">Order ID</th>
              <th className="py-2 px-4 sm:py-3 md:text-base">Created</th>
              <th className="py-2 px-4 sm:py-3 md:text-base">Shipping Address</th>
              <th className="py-2 px-4 sm:py-3 md:text-base">Items</th>
              <th className="py-2 px-4 sm:py-3 md:text-base">Price</th>
              <th className="py-2 px-4 sm:py-3 md:text-base">Status</th>
            </tr>
          </thead>
          <tbody>
            {orders.length > 0 ? (
              orders.map((order) => (
                <tr
                  onClick={() => handleRowClick(order._id)}
                  key={order._id}
                  className="border-b hover:border-gray-50 cursor-pointer"
                >
                  <td className=" p-2 sm:p-4">
                    <img
                      src={order.orderItems[0]?.images?.[0]?.url}
                      alt={order.orderItems[0].name}
                      className="w-12 h-12 sm:w-14 sm:h-14 md:w-14 md:h-14  object-cover rounded-lg border-red-500 border-2"
                    />
                  </td>
                  <td className="p-2 sm:p-4 font-medium text-gray-900">
                    #{order._id}
                  </td>
                  <td className="p-2 sm:p-4 ">
                    {new Date(order.createdAt).toLocaleDateString()}
                  </td>
                  <td className="py-2 px-2 sm:py-4 sm:px-4">
                    {order.shippingAddress.city}
                    {", "}
                    {order.shippingAddress.country}
                  </td>
                  <td className="py-2 px-2 sm:py-4 sm:px-4 text-center">
                    {order.orderItems.length}
                  </td>
                  <td className="py-2 px-2 sm:py-4 sm:px-4">
                    {order.totalPrice.toLocaleString("en-PH", {
                      currency: "PHP",
                      style: "currency",
                    })}
                  </td>
                  <td className="py-2 px-2 sm:py-4 sm:px-4 text-gray-">
                    <span
                      className={`${
                        order.isPaid
                          ? "text-green-500 bg-green-100"
                          : "text-red-700 bg-red-100"
                      } px-2 py-1 rounded-lg font-medium`}
                    >
                      {order.isPaid ? "Bayad na!" : "Bayaran mo na!!!!"}
                    </span>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={7} className="p-4 text-center text-gray-500">
                  You have no orders yet
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrderPage;
