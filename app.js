const express = require('express');
const connectDB = require('./config/db');
const comicRoutes = require('./routes/comicRoutes');
require('dotenv').config();

const app = express();
connectDB();

// Middleware
app.use(express.json());

// Routes
app.use('/api', comicRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
});
