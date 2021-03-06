//get my requirements
const express = require("express");
const mongoose = require("mongoose");
const compression = require("compression")
const logger = require("morgan");


const app = express();
const PORT = process.env.PORT || 5000

app.use(logger("dev"));
app.use(compression());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
    useNewUrlParser: true,
    useFindAndModify:false
});

app.use(require("./routes/api"));

app.listen(PORT, () => {
    console.log(`App runnign on port ${PORT}`)
})
//need to connect to mongodb for heroku deployment
