import "dotenv/config";
import express from "express";
import cors from "cors";
import { connectDB } from "./db/connectToDB.js";
import userRoutes from "./routes/userRoutes.js";
import productRoutes from "./routes/productRoutes.js";
import cartRoutes from "./routes/cartRoutes.js";


const app = express();
app.use(express.json());
app.use(cors());


const PORT = process.env.PORT || 3000;

app.use("/api/users", userRoutes)
app.use("/api/products", productRoutes)
app.use("/api/cart/", cartRoutes)

app.get("/", (req, res) => {
    res.send("WELcome to my life");
});



app.listen(PORT, () => {
    console.log("Server is running on", PORT);
    connectDB();
    
});
