module.exports = function($scope, $state, User, Map, $cookieStore, $rootScope, $http) {
  
  $scope.user = User.getUser();
  var userId = $scope.user.data.id;

  var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 13,
          center: {lat: 37.7833, lng: -122.4157}
        });
  
  var geocoder = new google.maps.Geocoder();
  
  $scope.submit = function(){
    $scope.address = $scope.user.address_street;
    $cookieStore.put('userAddress', $scope.address);
    geocodeAddress(geocoder, map);
    $scope.geocode_form.$setPristine();
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

  var userAddy = '448 page st.';
  var driverAddy = '45 lucerne st.';

  var service = new google.maps.DistanceMatrixService;
  service.getDistanceMatrix({
    origins: [userAddy+', san francisco'],
    destinations: [driverAddy+', san francisco'],
    travelMode: google.maps.TravelMode.DRIVING
    }, function(response, status){
      if(status !== google.maps.DistanceMatrixStatus.OK){
        alert('Error: ' + status);            
      } else {
        // console.log(response.rows[0].elements[0].duration.text);
        $scope.duration = response.rows[0].elements[0].duration.text;
        alert($scope.duration);
      }
  });

};

