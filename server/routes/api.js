const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
var nodemailer = require('nodemailer');


var User = require('../models/user');
var Admin = require('../models/admin');
var CmsPage = require('../models/cmspage');
var ListTrailer = require('../models/product');



router.post('/sendmail', (req, res) => {

  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'brijeshmkt@gmail.com',
      pass: 'Mishra4321'
    }
  });
  
  
  var mailOptions = {
    from: 'brijeshmkt@gmail.com',
    to: req.body.to,
    subject: req.body.subject,
    text: req.body.text
  };
  
  console.log(mailOptions);
  // transporter.sendMail(mailOptions, function(error, info){
  //   if (error) {
  //     console.log(error);
  //   } else {
  //     console.log('Email sent: ' + info.response);
  //   }
  // });


});
/* GET api listing. */
router.get('/', (req, res) => {
  res.send('api works');
});

router.get('/search', function(req, res, next) {
  let location = req.query.location;

  
  //console.log(location);

  query = { location_city: {$where: location}};

  //query['$where'] = {location_city: location};
  console.log(query);

  ListTrailer.find(query
    
    , function(err, trailers) {
    if(err) return err;

    res.json(trailers);
  })
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

router.get('/viewPass', (req, res) => {
  User.findOne({_id: req.decoded.userId }).select('email password').exec((err, user) => {
    if(err) {
      res.json({ success: false});
    } else {
      if (!user) {
        res.json({ success: false});
      }else {
        res.json({ success: true, user: user});
      }
    }
  })
});

router.put('/changePass', function(req, res, next) {
  User.findOne(req.id, req.body, function (err, post) {
    console.log(req.id);
    if (err) return next(err);
    res.json(post);
  });
});


router.get('/cmspage', function(req, res, next) {
  CmsPage.find({}, function(err, cmspages){
    if (err) return next(err);
    res.json(cmspages);
  });
});

router.get('/cmspage/:id', function(req, res, next) {
  CmsPage.findById(req.params.id, function (err, cmspages) {
    if (err) return next(err);
    res.json(cmspages);
  });
});

router.put('/cmspage/:id', function(req, res, next) {
  CmsPage.findByIdAndUpdate(req.params.id, req.body, function (err, cmspages) {
    if (err) return next(err);
    res.json(cmspages);
  });
});

router.post('/savecmspage', function(req, res, next) {
  CmsPage.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

router.delete('/cmspage/:id', function(req, res, next) {
  CmsPage.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

router.get('/trailers', function(req, res, next) {
  ListTrailer.find({}, function(err, listtrailers){
    if (err) return next(err);
    res.json(listtrailers);
  });
});

router.post('/list_trailers', function(req, res, next) {
  ListTrailer.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

router.get('/list_trailers/:id', function(req, res, next) {
  ListTrailer.findById(req.params.id, function (err, listtrailers) {
    if (err) return next(err);
    res.json(listtrailers);
  });
});

router.put('/list_trailers/:id', function(req, res, next) {
  ListTrailer.findByIdAndUpdate(req.params.id, req.body, function (err, listtrailers) {
    if (err) return next(err);
    res.json(listtrailers);
  });
});

router.delete('/list_trailers/:id', function(req, res, next) {
  ListTrailer.findByIdAndRemove(req.params.id, req.body, function (err, listtrailers) {
    if (err) return next(err);
    res.json(listtrailers);
  });
});






router.post('/login', (req, res) => {
      User.findOne({ $and: [ {email: req.body.email}, {password: req.body.password}, {admin: true} ]}, (err, user) => {
        if(err) {
          res.json({success: false, message: err });
        } else {
          if(!user) {
            res.json({ success: false});
            } else {
                const token = jwt.sign({ userId: user._id },'secret', {expiresIn: '24h' });
                res.json({ success: true, token: token, user: { id: user._id } });
            }
        }
    });
});

router.post('/clientLogin', (req, res) => {
      User.findOne({ $and: [ {email: req.body.email}, {password: req.body.password} ]}, (err, user) => {
        if(err) {
          res.json({success: false, message: err });
        } else {
          if(!user) {
            res.json({ success: false});
            } else {
                const token = jwt.sign({ userId: user._id },'secret', {expiresIn: '24h' });
                res.json({ success: true, token: token, user: { id: user._id } });
            }
        }
    });
});


router.use((req, res, next) => {
  const token = req.headers['authorization'];
  if(!token) {
    res.json({ success: false });
  } else {
    jwt.verify(token, 'secret', (err, decoded) => {
      if(err) {
        res.json({success: false });
      } else {
        req.decoded = decoded;
        next();
      }
    });
  }
});

// router.post('/changePass', (req, res) => {
//   User.findOne({_id: req.decoded.userId }).update('password').exec((err, user) => {
//     if(err) {
//       res.json({ success: false});
//     } else {
//       if (!user) {
//         res.json({ success: false});
//       }else {
//         res.json({ success: true});
//       }
//     }
//   })
// });



module.exports = router;
