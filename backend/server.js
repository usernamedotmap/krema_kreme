import "dotenv/config";
import path from "path";
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import { connectDB } from "./db/connectToDB.js";
import userRoutes from "./routes/userRoutes.js";
import productRoutes from "./routes/productRoutes.js";
import cartRoutes from "./routes/cartRoutes.js";
import checkoutRoutes from "./routes/CheckoutRoutes.js";
import orderRoutes from "./routes/orderRoutes.js";
import uploadRoutes from "./routes/uploadRoutes.js";
import feedbackRoutes from "./routes/feedbackRoutes.js";
import adminRoutes from "./routes/adminRoutes.js";
import productAdminRoutes from "./routes/productAdminRoutes.js";
import orderAdminRoutes from "./routes/adminOrderRoutes.js";

const app = express();

const __dirname = path.resolve();

app.use(express.json());
app.use(
  cors({
    origin: "https://hungerhalt-3j99nrv0t-usernamedotmaps-projects.vercel.app/",
    credentials: true,
  })
);
app.use(cookieParser());

const PORT = process.env.PORT || 3000;

app.use("/api/users", userRoutes);
app.use("/api/products", productRoutes);
app.use("/api/cart/", cartRoutes);
app.use("/api/checkout/", checkoutRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/upload", uploadRoutes);
app.use("/api/feedback", feedbackRoutes);

// admin na dito
app.use("/api/admin", adminRoutes);
app.use("/api/admin", productAdminRoutes);
app.use("/api/admin", orderAdminRoutes);

app.get("/", (req, res) => {
  res.send("WELcome to my life");
});

app.use(express.static(path.join(__dirname, "/frontend/dist")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"));
});

app.listen(PORT, () => {
  console.log("Server is running on", PORT);
  connectDB();
});
