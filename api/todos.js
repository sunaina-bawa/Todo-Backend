const express = require("express");
const connectDB = require("../config/db");
const todoRoutes = require("../routes/todoRoutes");

const app = express();
app.use(express.json());
connectDB();

app.use("/api/todos", todoRoutes);

module.exports = app;
