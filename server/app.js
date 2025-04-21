const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const contactRoutes = require("./routes/contactRoutes");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// ✅ CORS setup for your frontend
app.use(cors());

// Middleware
app.use(express.json());

// Routes
app.use("/api/contacts", contactRoutes);

// Root
app.get("/", (req, res) => {
  res.send("Contact API is running");
});

// DB Connection and Server
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB connected");
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((err) => {
    console.error("MongoDB connection failed:", err.message);
  });
