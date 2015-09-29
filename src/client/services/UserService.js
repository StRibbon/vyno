module.exports = function () {
  var factory = {};

  factory.getUser = function () {
    return User;
  }

  var User = {
    id: 2323,
    first_name: 'Stephen',
    last_name: 'Ribbon',
    address: { street: '448 Page St.', city:'San Francisco', post:'90077'}
  }

  return factory;
};
