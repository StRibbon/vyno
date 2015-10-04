var router = module.exports = require('express').Router();
var Order = require('../models/order');
// var auth = require('./users.js').auth;

// INDEX ITEMS
router.get('/', function(req, res) {
  Order
    .select(Order.star())
    .from(Order)
    .exec(function(err, rows) {
      res.json(rows);
    });
});
// FIND Order
router.get('/:id', function(req, res) {
  Order
    .select(Order.star())
    .from(Order)
    .where(Order.id.equals(req.params.id))
    .exec(function(err, rows) {
      res.json(rows[0]);
    });
});
// CREATE Order
router.post('/', function(req, res) {
  Order
    .insert(req.body)
    .returning(Order.star())
    .exec(function(err, rows) {
      res.json(rows[0]);
    });
});
// UPDATE Order
router.put('/:id', function(req, res) {
  Order
    .update(req.body)
    .where(Order.id.equals(req.params.id))
    .exec(function(err, rows) {
      res.status(204).end();
    });
});
// DELETE Order
router.delete('/:id', function(req, res) {
  Order
    .delete()
    .from(Order)
    .where(Order.id.equals(req.params.id))
    .exec(function(err, rows) {
      res.status(204).end();
    });
});
