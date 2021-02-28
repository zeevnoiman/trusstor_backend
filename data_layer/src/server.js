const path = require('path');
const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const mongoose = require("mongoose");

const routes = require('./routes');

const app = express();

// Connect to Mongo
const db = `mongodb://${process.env.MONGO_INITDB_ROOT_USERNAME}:${process.env.MONGO_INITDB_ROOT_PASSWORD}@db_todos:27017/?retryWrites=true&w=majority`;

mongoose
  .connect(db, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
  }) // Adding new mongo url parser
  .then(() => console.log("MongoDB Connected..."))
  .catch(err => console.log(err));

app.use(express.json());
app.use(routes);

const PORT = 3333;
app.listen(PORT, () => console.log(`Listening on ${PORT}`));