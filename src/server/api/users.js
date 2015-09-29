var router = module.exports = require('express').Router();
var User = require('../models/user');
var bcrypt = require('bcrypt');
var SALT_WORK_FACTOR = 10;

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
// UPDATE User
router.put('/:id', function(req, res) {
  User
    .update(req.body)
    .where(User.id.equals(req.params.id))
    .exec(function(err, rows) {
      res.status(204).end();
    });
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
