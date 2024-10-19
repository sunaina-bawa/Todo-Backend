const express = require('express');
const connectDB = require('../config/db');
const authRoutes = require('../routes/auth');

const app = express();
app.use(express.json());
connectDB();

app.use('/api/auth', authRoutes);

module.exports = app;