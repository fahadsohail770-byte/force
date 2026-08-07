/**
 * Add these lines to your existing src/app.js
 * (adjust paths if your app.js is not directly inside src/)
 */

const express = require("express");
const cors = require("cors");
const applicationRoutes = require("./routes/applicationRoutes");

const app = express();

app.use(cors());
app.use(express.json());

// Mount the applications API
app.use("/api/applications", applicationRoutes);

module.exports = app;
