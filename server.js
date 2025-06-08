const express = require('express');
const cors = require('cors');
require('dotenv').config();
const db = require('./models');

// Importing routes
const movieRoutes = require('./routes/movie.router');

const app = express();
const APP_PORT = process.env.PORT || 3000;

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
  console.log(req.method, req.url);
  next();
});

// Routes
app.use('/api/movies', movieRoutes);

// Connecting to the database and starting the server
db.sequelize
  .sync()
  .then(() => {
    console.log('Database connected successfully');
    app.listen(APP_PORT, () => {
      console.log(`Server is running on http://localhost:${APP_PORT}`);
    });
  })
.catch((err) => {
    console.error('Database connection failed:', err);
});