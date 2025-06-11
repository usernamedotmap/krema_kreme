import "dotenv/config";
import mongoose from "mongoose";
import Product from "./model/Product.js";
import User from "./model/User.js";
import Cart from "./model/CartItem.js";
import products from "./lib/exampleProduct.js";

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("MongoDB connected successfully"))
  .catch((error) => console.log("MongoDB connection error:", error));
const seedData = async () => {
  try {
    await Product.deleteMany();
    await User.deleteMany();
    await Cart.deleteMany();

    const createdUser = await User.create({
      name: "Admin tayo yon",
      email: "Admin@test.com",
      password: "123456",
      role: "admin",
    });

    const userID = createdUser._id;

    const sampleProducts = products.map((product) => {
      return { ...product, user: userID };
    });

    await Product.insertMany(sampleProducts);

    console.log("Product data seeded successfully");
  } catch (error) {
    console.log("Error seeding the data", error);
    process.exit(1);
  }
};

seedData();
