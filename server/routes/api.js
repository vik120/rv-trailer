const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
var nodemailer = require('nodemailer');


var User = require('../models/user');
var Admin = require('../models/admin');
var CmsPage = require('../models/cmspage');
var ListTrailer = require('../models/product');
var Favourite = require('../models/favourite');
var Package = require('../models/package');
var Message = require('../models/message');

router.post('/sendmail', (req, res) => {

  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'kirti.coderadobe@gmail.com',
      pass: 'coder4321'
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

router.get('/', (req, res) => {
  res.send('api works');
});

router.post('/message', (req, res) => {
  console.log(req.body);
  Message.create(req.body, function (err, post) {
    res.json(post);
  });
});

router.post('/filterSearch', (req, res) => {

    console.log(req.body);

    //let query = { '_id': { $in: req.body } };

    ListTrailer.find({}, function(err, trailers){

      res.json(trailers);
    }).limit(2);
  });

router.get('/fav/:user_id', (req, res) => {
  let user_id = req.params.user_id;
  let query = {'user_id': user_id}

  Favourite.find(query, { trailer_id : 1}, function(err, fav) {
    res.json(fav);
  });

});

router.delete('/deleteAllFav/:user_id', (req, res) => {
  let user_id = req.params.user_id;
  let query = {'user_id': user_id}

  Favourite.findByIdAndRemove(query, { trailer_id : 1}, req.body, function(err, fav) {
    res.json(fav);
  });

});

router.post('/trailersbyids', (req, res) => {

  console.log(req.body);

  let query = { '_id': { $in: req.body } };

  ListTrailer.find(query, function(err, trailers){

    res.json(trailers);
  });
});

router.get('/search', function(req, res, next) {

  location = req.query.location.split(',');
  from = req.query.from;
  to = req.query.to;

  //console.log(location);
  //var array = myString.split(',');

  city = location[0].trim();
  province = location[1].trim();

  console.log(city);
  console.log(province);
  console.log(from);
  console.log(to);

  // if(from !== undefined && to !== undefined) {
  //   dateRange = {}
  // }

  searchObject = {};
  searchObject.location_city = city;
  searchObject.location_province = province;

  if(from !== undefined && to !== undefined) {
    searchObject.pricing_highest_season_date_range_from = from;
    searchObject.pricing_highest_season_date_range_to = to;
  }


  query = {$and: [searchObject]}
  ListTrailer.find(query, function(err, trailers) {
    if(err) return err;

    res.json(trailers);
  })
});

router.get('/user', function(req, res, next) {
  User.find({}, function(err, users){
    if (err) return next(err);
    res.json(users);
  });
});

router.get('/user/:id', function(req, res, next) {
  User.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

router.get('/userbyemail/:email',function(req, res, next) {
  console.log('I am here');
  console.log(req.params.email);
  User.findOne({email : req.params.email }, function (err, user){
    if (err) return err;

    res.json(user);
  });
  //User.findOne()
})

router.post('/saveuser', function(req, res, next) {
  User.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

router.put('/user/:id', function(req, res, next) {
  User.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

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
  ListTrailer.find({}, function(err, list){
    if (err) return err;
    res.json(list);

  });
});


router.get('/trailersByUserId/:id', function(req, res, next) {
  ListTrailer.find({user_id: req.params.id}, function (err, listtrailers) {
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

router.post('/favourite', function(req, res, next) {
  Favourite.create(req.body, function (err, favourite) {
    if (err) return next(err);
    res.json(favourite);
  });
});

router.post('/getfavourite', function(req, res) {
  //console.log(req.body.user_id);

  Favourite.findOne({user_id: req.body.user_id, trailer_id: req.body.trailer_id} , function (err, favourite) {
    if (err) return next(err);
    res.json(favourite);
  });
});

router.delete('/delfavourite/:id', function(req, res) {
  Favourite.findByIdAndRemove(req.params.id, req.body, function (err, favourite) {
    if (err) return err;
    res.json(favourite);
  });
});

router.get('/favouritesByUserId/:id', function(req, res) {
  Favourite.find({user_id: req.params.id}, function (err, favourite) {
    if (err) return err;
    res.json(favourite);
  });
});

router.post('/list_trailersbyUserId/:FavTrailer_id', function(req, res) {
  query = {_id: {$in: req.body } };
  ListTrailer.find(query, function(err, trailers) {
    if (err) return err;
    res.json(trailers);
  });
});

// router.get('/allPackageDetail', function (req, res) {

//   Package.find({}, function(err, package) {
//     if (err) return err;
//     res.json(package);
//   });

//   });

router.get('/allPackageDetail', function(req, res, next) {
  Package.find({}, function(err, package){
    if (err) return next(err);
    res.json(package);
  });
});

router.get('/Packages', (req, res) => {
  Package.find({}, (err, package) => {
    if (err) return err;
    res.json(package);
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

module.exports = router;
