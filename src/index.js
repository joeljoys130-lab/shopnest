require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
// Load environment variables from .env file
// Import necessary modules: dotenv for environment variables, express for the web framework, and mongoose for MongoDB interactions.
const app = express();
app.use(express.json());

app.get('/', (req, res) => {
  res.json({ message: 'Shopnest API is running.' });
});

mongoose
  .connect(process.env.DATABASE_URL)
  .then(() => {
    console.log('Successfully connected to MongoDB Atlas');
    app.listen(process.env.PORT, () => {
      console.log(`Server running on port ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.error('Connection failed:', err.message);
  });
  // This is the main entry point of the Shopnest API server. It sets up an Express application, connects to MongoDB Atlas using Mongoose, and starts the server on the specified port. The root route ("/") returns a simple JSON message to confirm that the API is running.