import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { fetchOrderDetails } from "../redux/slices/orderSlice";

const OrderDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { orderDetails, error, loading } = useSelector((state) => state.orders);

  console.log("orderDetails:", orderDetails);
  useEffect(() => {
    dispatch(fetchOrderDetails(id));
  }, [dispatch, id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  return (
    <div className="max-w-7xl mx-auto p-4 sm:p-6">
      <h2 className="text-2xl md:text-3xl font-bold mb-6">Order Details</h2>
      {!orderDetails ? (
        <p>No Order Details Found</p>
      ) : (
        <div className="p-4 sm:p-6 rounded-lg border">
          <div className="flex flex-col sm:flex-row justify-between mb-8">
            <div>
              <h3 className="text-lg md:text-xl font-semibold">
                Order ID: #{orderDetails._id}
                <p className="text-gray-600">
                  {new Date(orderDetails.createdAt).toLocaleDateString()}
                </p>
              </h3>
            </div>

            <div className="flex flex-col items-start sm:items-end mt-4 sm:mt-0">
              <span
                className={`${
                  orderDetails.isPaid
                    ? "bg-green-100 text-green-700"
                    : "bg-red-100 text-red-700"
                } px-3 py-1 rounded-full text-sm font-medium mb-2`}
              >
                {orderDetails.isPaid ? "Approved" : "Pending"}
              </span>
              <span
                className={`${
                  orderDetails.isDelivered
                    ? "bg-green-100 text-green-700"
                    : "bg-yellow-100 text-yellow-700"
                } px-3 py-1 rounded-full text-sm font-medium mb-2`}
              >
                {orderDetails.isDelivered ? "Delived" : "Pending"}
              </span>
            </div>
          </div>

          {/*  */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h4 className="text-lg font-semibold mb-2">Payment Info</h4>
              <p>Payment Method: {orderDetails.paymentMethod}</p>
              <p>Status: {orderDetails.isPaid ? "Paid" : "Unpaid"}</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-2">Shipping Info</h4>
              <p>Address: {`${orderDetails.shippingAddress.city}`} </p>
            </div>
          </div>

          <div className="overflow-x-auto">
            <h4 className="text-lg font-semibold mb-4">Products:</h4>
            <table className="min-w-full text-gray-600 mb-4">
              <thead className="bg-gray-100">
                <tr>
                  <th className="py-3 px-4 text-left">Image</th>
                  <th className="py-3 px-4 text-left">Name</th>
                  <th className="py-3 px-4 text-left">Price</th>
                  <th className="py-3 px-4 text-left">Quantity</th>
                  <th className="py-3 px-4 text-left">Total</th>
                </tr>
              </thead>
              <tbody>
                {orderDetails.orderItems.map((item) => (
                  <tr key={item.productId} className="border-b  ">
                    <td className="py-2 px-4  ">
                      <img
                        src={item?.images[0]?.url}
                        alt={item.name}
                        className="w-12 h-12 object-cover rounded-lg mr-4"
                      />
                    </td>
                    <td>
                      <Link
                        to={`/product/${item.productId}`}
                        className="py-2 text-blue-500 hover:underline"
                      >
                        {item.name}
                      </Link>
                    </td>

                    <td className="py-2 px-4">
                      {parseFloat(item.price)
                        .toFixed(2)
                        .toLocaleString("en-PH", {
                          style: "currency",
                          currency: "PHP",
                        })}
                    </td>
                    <td className="py-2 px-4">{item.quantity}</td>
                    <td className="py-2 px-2">
                      {(item.quantity * item.price).toLocaleString("en-PH", {
                        currency: "PHP",
                        style: "currency",
                      })}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <Link to="/my-orders" className="text-blue-500 hover:underline">
            Back to my Orders
          </Link>
        </div>
      )}
    </div>
  );
};
export default OrderDetails;
