// Backend/index.js
const connectToMongoose = require('./db');
const express = require('express');
const app = express();

const port = process.env.PORT || 5000;

// Connect to MongoDB
connectToMongoose();

// Middleware to parse JSON
app.use(express.json());

// Available routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/notes', require('./routes/notes'));

app.get('/', (req, res) => {
  res.send('Server is running!');
});

app.listen(port, () => {
  console.log(`The app listening on port http://localhost:${port}`);
});
