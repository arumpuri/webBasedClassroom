const express = require("express");
const dotenv = require("dotenv");
const connectDB =require("./config/db.js")
const path = require("path");
const session = require("express-session");
const mongoose = require("mongoose");
const cors = require('cors')
const cookieParser = require("cookie-parser");
const createError = require("http-errors");
const userRoutes = require('./routes/userRoutes');
const courseRoutes = require('./routes/courseRoutes');
const enrollmentRoutes = require('./routes/enrollmentRoutes');

dotenv.config();
connectDB()
const app = express();

app.use(cors())
app.use(express.json());

app.use('/api/users', userRoutes);
app.use('/api/courses', courseRoutes);
app.use('/api/enrollments', enrollmentRoutes);


const PORT = process.env.PORT || 5000;

// // app.listen(PORT, () =>
//     console.log(`listening on port ${PORT}`)
//   );

  app.listen(5000, () =>
    console.log(`listening on port ${5000}`)
  );
