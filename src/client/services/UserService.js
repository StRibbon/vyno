module.exports = function ($http, $state) {
  var User = {};
  User.userData = {};
  User.getUser = function () {
    if (User.userData){
      return User.userData.data;
    } else {
      return null;
    }
    
  }

  User.login = function(user) {
    $http.post('/api/users/authenticate', user).then(res => {
      console.log(res);
      User.userData = res;
      $state.go('items');
    });
  }
  User.signup = function(newUser) {
    $http.post('/api/users', newUser).then(res => {
      console.log(res);
       User.userData = res;
       $state.go('items');
    });
  }
  User.logout = function(user) {
    $http.post('/api/users', user).then(res => {
      console.log(res);
       userData = null;
       $state.go('items');
    });
  }
  // User.updateUser = function(user)
  //   $http.put('/api/users/'+ user.id, $scope.user).then(res => {
  
  // });

  // var User = {
  //   id: 2323,
  //   first_name: 'Stephen',
  //   last_name: 'Ribbon',
  //   address: { street: '448 Page St.', city:'San Francisco', post:'90077'}
  // }

  return User;
};
