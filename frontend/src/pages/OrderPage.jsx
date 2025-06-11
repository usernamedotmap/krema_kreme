import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const OrderPage = () => {
  const [orders, setOrders] = useState([]);

  const navigate = useNavigate()

  useEffect(() => {
    setTimeout(() => {
      const userOrders = [
        {
          _id: "12345",
          createdAt: new Date(),
          shippingAddress: {
            city: "Dito lang",
            country: "PELEPENS",
          },
          orderItems: [
            {
              name: "Product 1",
              image: "https://mgi-deliveryportal.s3.amazonaws.com/1418x1063%20MGCC%20KK%20Stitch.jpg",
            },
          ],
          totalPrice: 100,
          isPaid: true,
        },
        {
          _id: "67890",
          createdAt: new Date(),
          shippingAddress: {
            city: "Dito lang",
            country: "PELEPENS",
          },
          orderItems: [
            {
              name: "Product 1",
              image: "https://mgi-deliveryportal.s3.amazonaws.com/1418x1063%20MGCC%20KK%20Stitch.jpg",
            },
          ],
          totalPrice: 100,
          isPaid: false,
        },
      ];

      setOrders(userOrders);
    }, 1000);
  }, []);

  const handleRowClick = (orderId) => {
    navigate(`/order-details/${orderId}`)
  }

  return (
    <div className="max-w-7xl mx-auto p-4 sm:p-6">
      <h2 className="text-xl sm:text-2xl font-bold mb-6">My Orders</h2>
      <div className="relative shadow-md sm:rounded-lg overflow-hidden">
        <table className="min-w-full text-left text-gray-600">
          <thead className="bg-gray-100 text-xs uppercase text-gray-700">
            <tr>
              <th className="py-2 px-4 ms:py-3">Image</th>
              <th className="py-2 px-4 ms:py-3">Order ID</th>
              <th className="py-2 px-4 ms:py-3">Created</th>
              <th className="py-2 px-4 ms:py-3">Shipping Access</th>
              <th className="py-2 px-4 ms:py-3">Items</th>
              <th className="py-2 px-4 ms:py-3">Price</th>
              <th className="py-2 px-4 ms:py-3">Status</th>
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
                      src={order.orderItems[0].image}
                      alt={order.orderItems[0].name}
                      className="w-10 h-10 sm:w-14 sm:h-14  object-cover rounded-lg border-red-500 border-2"
                    />
                  </td>
                  <td className="p-2 sm:p-4 font-medium text-gray-900">
                    #{order._id}
                  </td>
                  <td className="p-2 sm:p-4 ">
                    {new Date(order.createdAt).toLocaleDateString()}
                  </td>
                  <td className="py-2 px-2 sm:py-4 sm:px-4">
                    {order.shippingAddress.city}{", "}
                    {order.shippingAddress.country}
                  </td>
                  <td className="py-2 px-2 sm:py-4 sm:px-4 text-center">
                    {order.orderItems.length}
                  </td>
                  <td className="py-2 px-2 sm:py-4 sm:px-4">
                    {order.totalPrice.toLocaleString("en-PH", {
                        currency: "PHP",
                        style: "currency"
                    })}
                  </td>
                  <td className="py-2 px-2 sm:py-4 sm:px-4 text-gray-">
                    <span className={`${order.isPaid ? "text-green-500 bg-green-100" : "text-red-700 bg-red-100"} px-2 py-1 rounded-lg font-medium`}>
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
