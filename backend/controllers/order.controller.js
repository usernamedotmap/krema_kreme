import Order from "../model/Order.js";

export const getOrderController = async (req, res) => {
  try {
    const orders = await Order.find({ user: req.user._id }).sort({
      createdAt: -1,
    });

    res.json(orders);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Internal Server Error",
    });
  }
};

export const getOrderByIdController = async (req, res) => {
  try {
    const order = await Order.findById(req.params.id).populate("user", "name");

    if (!order) {
      return res.status(400).json({
        message: "Order not found",
      });
    }

    res.json(order);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Internal Server Error",
    });
  }
};
