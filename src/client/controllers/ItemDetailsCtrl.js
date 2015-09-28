module.exports = ['$http', '$scope', '$stateParams', '$state', function($http, $scope, $stateParams, $state) {
  
  var itemId = $stateParams.itemId;

  // GET ITEM
  $http.get('/api/items/' + itemId ).then(res => {
    $scope.item = res.data;
  });
  // UPDATE ITEM
  $scope.submit = function(){
    $http.put('/api/items/'+ itemId, $scope.item).then(res => {
    });
    $state.go('items');
  }
  // DELETE ITEM
  $scope.delete = function(){
    $http.delete('api/items/'+ itemId, $scope.item).then(res => {
    });
    $state.go('items');
  }

}];
