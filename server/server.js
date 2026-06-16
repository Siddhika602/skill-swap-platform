import authRoutes from "./routes/authRoutes.js";
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import swapRoutes from "./routes/swapRoutes.js";

dotenv.config();

connectDB();

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/auth", authRoutes);
app.use("/api/swap", swapRoutes);

app.get("/", (req, res) => {
  res.send("🚀 SkillSwap Backend Running");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});