const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');


var User = require('../models/user');
var Admin = require('../models/admin');



/* GET api listing. */
router.get('/', (req, res) => {
  res.send('api works');
});

/* GET ALL User */
router.get('/user', function(req, res, next) {
  User.find({}, function(err, users){
    if (err) return next(err);
    res.json(users);
  });
});

/* GET SINGLE User BY ID */
router.get('/user/:id', function(req, res, next) {
  User.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* SAVE User */
router.post('/saveuser', function(req, res, next) {
  User.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* UPDATE User */
router.put('/user/:id', function(req, res, next) {
  User.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE User */
router.delete('/user/:id', function(req, res, next) {
  User.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

router.post('/login', (req, res) => {
  if(!req.body.email) {
    res.json({ success: false, message: ' No Username Was Provided' });
  } else {
    if(!req.body.password) {
      res.json({ success: false, message: ' No Password Was Provided' });
    } else {
      User.findOne({ email: req.body.email.toLowerCase() }, (err, user) => {
        if(err) {
          res.json({success: false, message: err });
        } else {
          if(!user) {
            res.json({ success: false, message: 'Username not Found.'});
          } else {
              User.findOne({ password: req.body.password }, (err, password) => {
                if(err) {
                  res.json({success: false, message: err });
                } else {
                if(!password) {
                  res.json({ success: false, message: 'password not Found.'});
                } else {
                    const token = jwt.sign({ userId: user._id },'secret', {expiresIn: '24h' });
                    res.json({ success: true, message: 'Success', token: token, user: { email: user.email } });
                }
              }
            });
          }
        }
      });
    }
  }
});

module.exports = router;
