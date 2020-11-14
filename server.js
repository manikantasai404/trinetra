// We are using ES6 type because we "type": "module" did this in package.json
// import express from 'express'
const express = require("express");
const mongoose = require("mongoose");
const usersSchema = require("../trinetra-backend/schema/users");
const Cors = require("cors")

// App Configuration
const app = express();
const port = process.env.PORT || 8001;
const connection_url =
  "mongodb+srv://admin:ZUS9t8TwYT6lGMOS@cluster0.4fdqz.mongodb.net/trinetradb?retryWrites=true&w=majority";

// Middlewares connection
app.use(express.json())
app.use(Cors());

// DB configuration
mongoose.connect(connection_url, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

// API Endpoints
app.get("/", (req, res) =>
  res.status(200).send("Hello! Welcome to Trinetra!!")
);

app.post("/users", (req, res) => {
  const dbUsers = req.body;

  usersSchema.create(dbUsers, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send(data);
    }
  });
});


app.get("/getUsers", (req, res) => {
    usersSchema.find((err, data) => {
        if (err) {
          res.status(500).send(err);
        } else {
          res.status(200).send(data);
        }
      });
})

// Listener
app.listen(port, () => console.log(`Listening on localhost: ${port}`));
