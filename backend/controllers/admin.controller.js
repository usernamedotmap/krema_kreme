import User from "../model/User.js";
import Product from "../model/Product.js";
import Order from "../model/Order.js";

export const getUserByAdminController = async (req, res) => {
  try {
    const users = await User.find({});
    res.json(users);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Internal  Server Error",
    });
  }
};

export const addUserByAdminController = async (req, res) => {
  const { name, email, password, role } = req.body;

  try {
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({
        message: "User already exist",
      });
    }

    user = new User({
      name,
      email,
      password,
      role: role || "customer",
    });

    await user.save();

    res.status(201).json({
      messsage: "User created successfully",
      user,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Internal Server Error",
    });
  }
};

export const putUserByAdminController = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (user) {
      user.name = req.body.name || user.name;
      user.email = req.body.email || user.email;
      user.role = req.body.role || user.role;
    }
    const updatedUser = await user.save();
    res.json({
      message: "User updated successfully",
      user: updatedUser,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Internal Server Error",
    });
  }
};

export const deleteUserByAdminController = async (req, res) => {
  const { id } = req.params;

  try {
    const user = await User.findById(id);

    if (user) {
      await user.deleteOne();
      res.status(200).json({
        message: "User deleted successfully",
      });
    } else {
      res.status(404).json({
        message: "User not found",
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Internal Server Error",
    });
  }
};

// for products

export const getProductByAdminController = async (req, res) => {
  try {
    const products = await Product.find({});

    res.json(products);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Internal Server Error",
    });
  }
};

export const addProductByAdminController = async (req, res) => {

  const products = await Product.findOne()
}

export const deleteProductByAdminController = async (req, res) => {
  const { id } = req.params;
  
    try {
      const product = await Product.findById(id);
  
      if (product) {
        await product.deleteOne();
        res.json({ message: "Product deleted" });
      } else {
        res.status(404).json({
          message: "Product not found",
        });
      }
    } catch (error) {
      console.log(error);
      res.status(500).json({
        message: "Internal Server Error",
      });
    }
}

// for orders

export const getOrderByAdminController = async (req, res) => {
  try {
    const orders = await Order.find({}).populate("user","name email");
    res.json(orders);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Internal Server Error ",
    });
  }
};

export const postProductByAdmin = async (req, res) => {
  try {
  } catch (error) {
    console.log(error);
    res.status(500).jso({
      mesage: "Internal Server Error",
    });
  }
};

export const pushOrderByAdminController = async (req, res) => {};

export const putOrderByAdminController = async (req, res) => {
  const { id } = req.params;

  try {
    const order = await Order.findById(id).populate("user", "name email");

    if (order) {
      order.status =   req.body.status || order.status;
      order.isDelivered =
        req.body.status === "Delivered" ? true : order.isDelivered;
      order.deliveredAt =
        req.body.status === "Delivered" ? Date.now() : order.deliveredAt;

      const updatedOrder = await order.save();
      res.json(updatedOrder);
    } else
      [
        res.status(404).json({
          message: "Order not found",
        }),
      ];
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Internal Server Error",
    });
  }
};

export const deleteOrderByAdminController = async (req, res) => {
  try {
    const order = await Order.findById(req.params.id);

    if (order) {
      await order.deleteOne();
      res.json({
        message: "Order removed",
      });
    } else {
      res.status(400).json({
        message: "Order not found",
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Internal Server Error",
    });
  }
};
