const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("./server/config/keys");
const passport = require("passport");
const multer = require("multer");
const mongoose  = require("mongoose");
var conn = mongoose.connection;
const { mongo, connection } = require('mongoose');
const Grid = require('gridfs-stream');
const GridFsStorage = require('multer-gridfs-storage');
Grid.mongo = mongo;
const mongoDriver = mongoose.mongo;
const crypto = require('crypto'); 
const path = require('path');
const app = express();


// Load input validation
const validateRegisterInput = require("/../validation/register");
const validateLoginInput = require("/../validation/login");

// Load User model
const User = require("/../../models/User");

//Load Upload model
const Upload = require("/../../models/Upload");

app.set('view engine', 'ejs');

// @route POST api/users/register
// @desc Register user
// @access Public
router.post("/register", (req, res) => {
  // Form validation

  const { errors, isValid } = validateRegisterInput(req.body);

  // Check validation
  if (!isValid) {
    return res.status(400).json(errors);
  }

  User.findOne({ email: req.body.email }).then(user => {
    if (user) {
      return res.status(400).json({ email: "Email already exists" });
    } else {
      const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
      });

      // Hash password before saving in database
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err;
          newUser.password = hash;
          newUser
            .save()
            .then(user => res.json(user))
            .catch(err => console.log(err));
        });
      });
    }
  });
});

// @route POST api/users/login
// @desc Login user and return JWT token
// @access Public
router.post("/login", (req, res) => {
  // Form validation

  const { errors, isValid } = validateLoginInput(req.body);

  // Check validation
  if (!isValid) {
    return res.status(400).json(errors);
  }

  const email = req.body.email;
  const password = req.body.password;

  // Find user by email
  User.findOne({ email }).then(user => {
    // Check if user exists
    if (!user) {
      return res.status(404).json({ emailnotfound: "Email not found" });
    }

    // Check password
    bcrypt.compare(password, user.password).then(isMatch => {
      if (isMatch) {
        // User matched
        // Create JWT Payload
        const payload = {
          id: user.id,
          name: user.name
        };

        // get token
        jwt.sign(
          payload,
          keys.secretOrKey,
          {
            // 1 year, in seconds
            expiresIn: 31556926 
          },
          (err, token) => {
            res.json({
              success: true,
              token: "Bearer " + token
            });
          }
        );
      } else {
        return res
          .status(400)
          .json({ passwordincorrect: "Password is incorrect" });
      }
    });
  });
});



const db = require("../../../../config/keys").mongoURI;

const gfs = new Grid("upload_db", mongoDriver);


//gfs.collection('uploads');
// @route http://localhost:5000/api/users/upload
// @desc create storange engine 

const storage = new GridFsStorage({
  url: db,
  file: (req, file) => {
    return new Promise((resolve, reject) => {
      crypto.randomBytes(16, (err, buf) => {
        if (err) {
          return reject(err);
        }
        const filename = buf.toString('hex') + path.extname(file.originalname);
        const fileInfo = {
          filename: filename,
          bucketName: 'useruploads'
        };
        resolve(fileInfo);
      });
    });
  }
});

const upload = multer({ storage });

const singleUpload = multer({ storage: storage }).single('file');
//const files = new GridStore(db, new ObjectID(':filename'), 'r');


router.get('/files/:filename', (req, res) => {
  gfs.files.find({ filename: req.params.filename }).toArray((err, files) => {
    if(!files || files.length === 0){
      return res.status(404).json({
        message: "Could not find file"
      });
    }
    var readstream = gfs.createReadStream({
      filename: files[0].filename
    })
    res.set('Content-Type', files[0].contentType);
    return readstream.pipe(res);
  });
});

 router.get('/files', (req, res) => {
  //const files = new GridStore(db, new ObjectID(':filename'), 'r');

  gfs.files.find().toArray((err, files) => {
   // const gridstore = new GridStore(db, new ObjectID(':filename'), 'r');

    if(!files || files.length === 0){
      return res.status(404).json({
        message: "Could not find files"
      });
    }
    return res.json(files);
});
}); 


router.post('/files', singleUpload, (req, res) => {
  if (req.file) {
    return res.json({
      success: true,
      file: req.file
    });
  }
  res.send({ success: false });
});

router.delete('/files/:id', (req, res) => {
  gfs.remove({ _id: req.params.id }, (err) => {
    if (err) return res.status(500).json({ success: false })
      return res.json({ success: true });
    });
});


// @route GET http://localhost:5000/api/users/upload
// @desc get files
/* router.get("/upload", (req, res) => {


    gfs.files.find().toArray((err, files) => {
      // Check for files
      if (!files || files.length === 0) {
        res.render('index', { files: false });
      } else {
        files.map(file => {
          if (
            file.contentType === 'image/jpeg' ||
            file.contentType === 'image/png'
          ) {
            file.isImage = true;
          } else {
            file.isImage = false;
          }
        });
        res.render('index', { files: files });
      }
    });
});

//http://localhost:5000/api/users/upload
router.post('/upload', upload.single('file'), (req, res) => {
  res.json({ file: req.file });
  res.redirect('/');
}); */


module.exports = router;