const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

// Initialize Express app
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

// Root API route
app.get('/', (req, res) => {
  res.json({ message: 'Backend API is running successfully' });
});

// API endpoint
app.get('/api', (req, res) => {
  res.json({ 
    message: 'Backend API is running successfully',
    timestamp: new Date().toISOString(),
    kubernetes: process.env.KUBERNETES === 'true' ? 'Yes' : 'No'
  });
});

// Health check endpoint
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'healthy' });
});

// Start server
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on port ${PORT}`);
});
