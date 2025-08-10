require('dotenv').config();
const express = require('express');
const path = require('path');
const connectDB = require('./config/db');
const cors = require('./config/cors');
const errorHandler = require('./middleware/errorHandler');

const app = express();
connectDB();
app.use(cors);
app.use(express.json());

// Health check endpoint
app.get('/api/health', (req, res) => res.json({ status: "ok" }));

// Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/users', require('./routes/users'));
app.use('/api/grades', require('./routes/grades'));
app.use('/api/assignments', require('./routes/assignments'));
app.use('/api/messages', require('./routes/messages'));
app.use('/api/candidates', require('./routes/candidates'));
app.use('/api/reports', require('./routes/reports'));
app.use('/api/forms', require('./routes/forms'));
app.use('/api', require('./routes/api'));

// Serve static frontend from /public (put Mine.html inside)
app.use(express.static('public'));

// Error handler
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));