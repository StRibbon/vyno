var router = module.exports = require('express').Router();
var User = require('../models/user');
var bcrypt = require('bcrypt');
var SALT_WORK_FACTOR = 10;
var jwt = require('jsonwebtoken');


router.use(function(req, res, next) {

  // check header or url parameters or post parameters for token
  var token = req.body.token || req.query.token || req.headers['x-access-token'];

  // decode token
  if (token) {

    // verifies secret and checks exp
    jwt.verify(token, process.env.SECRET, function(err, decoded) {      
      if (err) {
        return res.json({ success: false, message: 'Failed to authenticate token.' });    
      } else {
        // if everything is good, save to request for use in other routes
        req.decoded = decoded;    
        next();
      }
    });

  } else {

    // if there is no token
    // return an error
    return res.status(403).send({ 
        success: false, 
        message: 'No token provided.' 
    });
    
  }
});


// INDEX Users
router.get('/', function(req, res) {
  User
    .select(User.star())
    .from(User)
    .exec(function(err, rows) {
      res.json(rows);
    });
});
// FIND User
router.get('/:id', function(req, res) {
  User
    .select(User.star())
    .from(User)
    .where(User.id.equals(req.params.id))
    .exec(function(err, rows) {
      res.json(rows[0]);
    });
});
// CREATE User
router.post('/', function(req, res) {
  user = req.body;
  bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt) {
    if (err) {
      return next(err);
    }
    bcrypt.hash(user.password, salt, function(err, hash) {
      if (err) {
        return next(err);
      }
      user.password = hash;
      User
        .insert(user)
        .returning(User.star())
        .exec(function(err, rows) {
          res.json(rows[0]);
      });
    });
  });  
});
router.post('/authenticate', function(req, res) {
  User
    .select(User.star())
    .from(User)
    .where(User.email.equals(req.body.email))
    .exec(function(err, rows) {
      console.log('FOUND EMAIL');
      var user = rows[0];
      var password = rows[0].password;
      bcrypt.compare(req.body.password, password, function (err, isMatch) {
          if (isMatch) {
            var token = jwt.sign({id: user.id}, process.env.SECRET, {
              expiresInMinutes: 1440 // expires in 24 hours
            });
            res.json({
              success: true,
              message: 'Enjoy your token!',
              token: token,
              email: user.email
            });
          } else {
            res.status(401).end();
          }
        });
      console.log(err);
    });

});
// UPDATE User
router.put('/:id', function(req, res) {
  res.send('authenticated');
  // User
  //   .update(req.body)
  //   .where(User.id.equals(req.params.id))
  //   .exec(function(err, rows) {
  //     res.status(204).end();
  //   });
});
// DELETE User
router.delete('/:id', function(req, res) {
  User
    .delete()
    .from(User)
    .where(User.id.equals(req.params.id))
    .exec(function(err, rows) {
      res.status(204).end();
    });
});
