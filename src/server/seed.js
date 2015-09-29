module.exports = function(done) {
  var db = require('./db');
  var Item = require('./models/item');
  Item.insert({
    name: 'Vin Gris',
    maker: 'Birichino',
    year: 2011,
    location: 'Sonoma',
    description: 'This rosé is light, fruity and not too complicated– don’t we all need a little of that in our life?. It’s a perfect “picnic wine,” a highly scientific term we use at our house for drinkable, delicious wine that pairs well with a variety of food.',
    price: 15,
    img: 'http://eat-drink-garden.com/wp-content/uploads/2012/05/birichino-for-web.jpg'
  })
  .insert({
    name: 'SOGI',
    maker: 'Broc Cellars',
    year: 2014,
    location: 'Central Coast',
    description: 'A sultry Pinot/Gamay blend that peaks with medium ripe cheeses and creamy nuts. Also impeccable on its own, a must have for any intimate situation.',
    price: 25,
    img: 'https://dpbfm6h358sh7.cloudfront.net/images/1266013/297336279.jpg'
  }).exec(function(err) {
    db.close();
    done(err);
  });
};
