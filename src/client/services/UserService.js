module.exports = function ($http) {
  var factory = {};
  factory.userData = {};
  factory.getUser = function () {
    return User;
  }

  factory.login = function(user) {
    $http.post('/api/users/authenticate', user).then(res => {
      
    });
  }
  factory.signup = function(newUser) {
    $http.post('/api/users', newUser).then(res => {
      console.log(res);
    });
  }
  // factory.updateUser = function(user)
  //   $http.put('/api/users/'+ user.id, $scope.user).then(res => {
  
  // });

  // var User = {
  //   id: 2323,
  //   first_name: 'Stephen',
  //   last_name: 'Ribbon',
  //   address: { street: '448 Page St.', city:'San Francisco', post:'90077'}
  // }

  return factory;
};
