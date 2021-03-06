module.exports =['$scope', '$state', 'User', 'Map', '$cookieStore', '$rootScope', '$http', function($scope, $state, User, Map, $cookieStore, $rootScope, $http) {
  
  $scope.user = User.getUser();
  var userId = $scope.user.data.id;

  var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 13,
          center: {lat: 37.8116013, lng: -122.483849}
        });

  $scope.loadMap = Map.loadMap();
  
  var geocoder = new google.maps.Geocoder();
  
  $scope.submit = function(){
    window.setTimeout(function () {
      google.maps.event.trigger(map, 'resize')}, 0);
    var newAddress = $scope.user.address_street;
    $cookieStore.put('userAddress', newAddress);
    geocodeAddress(geocoder, map);
    determineETA(newAddress);
  }

  function geocodeAddress(geocoder, resultsMap) {
    var address = $cookieStore.get('userAddress');
    geocoder.geocode({
      'address': address,
      componentRestrictions: {
        country: 'USA',
        locality: 'San Francisco'
      } 
    },function(results, status) {
      if (status === google.maps.GeocoderStatus.OK){
        resultsMap.setCenter(results[0].geometry.location);
        resultsMap.setZoom(16);
        console.log(results[0].geometry.location);
        var marker = new google.maps.Marker({
          map: resultsMap,
          position: results[0].geometry.location
        });
      } else {
        alert('Geocode was not successful for the following reason: ' + status);
      }
    });
  }

  var driverAddy = '45 lucerne st.';
  function determineETA(newAddress){
    var service = new google.maps.DistanceMatrixService;
    service.getDistanceMatrix({
      origins: [newAddress+', san francisco'],
      destinations: [driverAddy+', san francisco'],
      travelMode: google.maps.TravelMode.DRIVING
      }, function(response, status){
        if(status !== google.maps.DistanceMatrixStatus.OK){
          alert('Error: ' + status);            
        } else {
          var duration = response.rows[0].elements[0].duration.text;
          $scope.$applyAsync(function() {
            $scope.duration = duration;
            $cookieStore.put('ETA', $scope.duration);           
          })  
        }
    });
  }
}];

