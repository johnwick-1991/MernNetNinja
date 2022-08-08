require("dotenv").config();
const mongoose = require("mongoose");
const express = require("express");
const workoutRoutes = require("./routes/workouts");

//express App
const app = express();

//middleware
app.use(express.json());

app.use((req, res, next) => {
  next();
});
const port = process.env.PORTV || 3001;

//routes
app.use("/api/workouts", workoutRoutes);

//connect to db
mongoose
  .connect(process.env.DATA_BASE)
  .then(() => {
    //listen for requests
    app.listen(port, () =>
      console.log(`connected to db and listening on port ${port}!`)
    );
  })
  .catch((error) => {
    console.log(error);
  });
