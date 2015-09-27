module.exports = function(done) {
  var db = require('./db');
  var Item = require('./models/item');
  Item.insert({
    name: 'Yellow Parrot',
    description: 'Banana',
    price: 20,
    img: 'some image'
  })
  .insert({
    name: 'ORange Parrot',
    description: 'Orange',
    price: 40,
    img: 'no image'
  }).exec(function(err) {
    db.close();
    done(err);
  });
};
