// External imports
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();

// port declaration and app instantiation with express
const port = process.env.PORT;
const app = express();

// We make use of the method app.use() to tell our app to use express in json format
app.use(express.json());
app.use(express.urlencoded({ exteded: true }))
// We use this method to prevent CORS errors from browsers
app.use(cors());

app.get('/', (req, res) => {
  res.json({ message: 'Welcome to movies favorites app' });
})

// Asign port and listen to server
app.listen(port, (error) => {
  if(error) {
    process.exit(1);
  }
  console.log(`Server running on port ${port}`);
});
