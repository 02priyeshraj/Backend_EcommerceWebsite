require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');

const adminAuthRoutes = require('./routes/admin/authRoutes');
const categoryRoutes = require('./routes/admin/categoryRoutes');
const productRoutes = require('./routes/admin/productRoutes');
const notificationRoutes = require('./routes/admin/notificationRoutes');
const homePageRoutes = require('./routes/admin/adminHomePageRoutes');
const orderRoutes = require('./routes/admin/orderRoutes');
const adminUserRoutes = require('./routes/admin/adminUserRoutes');
const profileRoutes = require('./routes/admin/profileRoutes');

const userRoutes = require('./routes/user/userRoutes');



const app = express();

// Middleware
app.use(express.json());

// Routes
app.use('/api/admin/home-page', homePageRoutes);
app.use('/api/admin/auth', adminAuthRoutes);
app.use('/api/admin/categories', categoryRoutes);
app.use('/api/admin/products', productRoutes);
app.use('/api/admin/notifications', notificationRoutes);
app.use('/api/admin/orders', orderRoutes);
app.use('/api/admin', adminUserRoutes);
app.use('/api/admin', profileRoutes);


app.use('/api/user', userRoutes);




// Connect to Database
connectDB();

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
