module.exports = ['$http', '$scope', '$state', function($http, $scope, $state) {
  $http.get('/api/items').then(res => {
    $scope.items = res.data;
  });

  $scope.submit = function(e) {
    e.preventDefault();
    $http.post('/api/items', $scope.newItem).then(res => {
      $scope.items.push(res.data);
      e.target.reset();
    });
  };

  
}];
