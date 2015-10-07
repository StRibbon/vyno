module.exports = function($scope, $state, User, Map, $cookieStore, $rootScope, $http) {
  
  $scope.user = User.getUser();
  var userId = $scope.user.data.id;

  var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 13,
          center: {lat: 37.7833, lng: -122.4157}
        });

  $scope.loadMap = function(){
    window.setTimeout(function () {
      google.maps.event.trigger(map, 'resize')}, 2000);
  }
  
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
          // console.log(response.rows[0].elements[0].duration.text);
          $scope.duration = response.rows[0].elements[0].duration.text;
          alert("Your wine should arrive in " + $scope.duration);
          $cookieStore.put('ETA', $scope.duration);
          $scope.duration = $cookieStore.get('ETA');
        }
    });
  }
};

