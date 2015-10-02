var router = module.exports = require('express').Router();
var Item = require('../models/item');
// var auth = require('./users.js').auth;

// INDEX ITEMS
router.get('/', function(req, res) {
  Item
    .select(Item.star())
    .from(Item)
    .exec(function(err, rows) {
      res.json(rows);
    });
});
// FIND ITEM
router.get('/:id', function(req, res) {
  Item
    .select(Item.star())
    .from(Item)
    .where(Item.id.equals(req.params.id))
    .exec(function(err, rows) {
      res.json(rows[0]);
    });
});
// CREATE ITEM
router.post('/', function(req, res) {
  Item
    .insert(req.body)
    .returning(Item.star())
    .exec(function(err, rows) {
      res.json(rows[0]);
    });
});
// UPDATE ITEM
router.put('/:id', function(req, res) {
  Item
    .update(req.body)
    .where(Item.id.equals(req.params.id))
    .exec(function(err, rows) {
      res.status(204).end();
    });
});
// DELETE ITEM
router.delete('/:id', function(req, res) {
  Item
    .delete()
    .from(Item)
    .where(Item.id.equals(req.params.id))
    .exec(function(err, rows) {
      res.status(204).end();
    });
});
