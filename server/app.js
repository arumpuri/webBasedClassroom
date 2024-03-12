const express = require("express");
const path = require("path");
const session = require("express-session");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const cors = require('cors')
const cookieParser = require("cookie-parser");
const createError = require("http-errors");

const app = express();

app.use(cors())



module.exports = app;