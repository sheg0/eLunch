// frameworks
const express = require('express');

// .env
require('dotenv').config();

// database
const mongoose = require('mongoose');

// routes
const mealRoutes = require('./routes/meals');

// express app
const app = express();

// for using req.body
app.use(express.json());

// global middleware
app.use((req,res,next) => {
    console.log(req.path, req.method);
    next();
})

app.use('/api/meals', mealRoutes);

//connect to db
mongoose.connect(process.env.MONG_URI)
    .then(() => {
         // listen for requests only if we are connected
        app.listen(process.env.PORT , () => {
        console.log('connected to db and Listening on port : ' + process.env.PORT);
});
    })
    .catch((error) => {
        console.log(error);
    })