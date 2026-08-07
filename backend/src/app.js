const express = require("express");
const cors = require("cors");

const applicationRoutes = require("./routes/applicationRoutes");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Health check
app.get("/", (req, res) => {
  res.send("Army Recruitment API is running...");
});

// Routes
app.use("/api/applications", applicationRoutes);

// 404 handler (route not found)
app.use((req, res) => {
  res.status(404).json({ success: false, message: "Route not found." });
});

// Global error handler (catches errors passed via next(err))
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(err.statusCode || 500).json({
    success: false,
    message: err.message || "Server error.",
  });
});

module.exports = app;