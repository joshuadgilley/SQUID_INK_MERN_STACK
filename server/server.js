const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");
const multer = require("multer");
const crypto = require("crypto");
const path = require("path");
const router = express.Router();
const users = require("./src/api/users");
const { mongo, connection } = require('mongoose');
const Grid = require('gridfs-stream');
const GridFsStorage = require('multer-gridfs-storage');
const GridFs = require('gridfs-stream');
Grid.mongo = mongo;
const mongoDriver = mongoose.mongo;
const methodOverride = require('method-override');
const app = express();


//MIDDLEWARE 
// will redirect all the non-api routes to react frontend
router.use(function (req, res) {
  res.sendFile(path.join(__dirname, '../client', 'build', 'index.html'));
});

const CLIENT_BUILD_PATH = path.join(__dirname, "../client/build");

// Static files
app.use(express.static(CLIENT_BUILD_PATH));

// Server React Client
app.get("/", function (req, res) {
  res.sendFile(path.join(CLIENT_BUILD_PATH, "index.html"));
});



//CORS
app.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Methods", "POST, PUT, OPTIONS, DELETE, GET");
  res.header("Access-Control-Allow-Origin", "http://localhost:3000", "http://localhost:5000");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Credentials", true);
  next();
});


// Bodyparser middleware
app.use(
  bodyParser.urlencoded({
    extended: false
  })

);
app.use(bodyParser.json({ limit: '50mb', extended: true },));
app.use(methodOverride('_method'));
app.set('view engine', 'ejs');

// DB Config
const db = require("./config/keys").mongoURI;

// Connect to MongoDB
const conn = mongoose
  .connect(
    db,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true
    }
  )
  .then(() => console.log("MongoDB successfully connected"))
  .catch(err => console.log(err));


const gfs = new GridFs("upload_db.useruploads", mongoDriver);


// Passport middleware
app.use(passport.initialize());

// Passport config
require("./config/passport")(passport);


//API routes
// URLs for testing on postman 
// http://localhost:5000/api/users/upload
// http://localhost:5000/api/users/login
app.use("/api/users", users);


const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`The server is running on port ${port} !`));