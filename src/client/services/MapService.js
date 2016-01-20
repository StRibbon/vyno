module.exports = function($rootScope){
  var Map = {};
  
  Map.loadMap = function(){
    window.setTimeout(function () {
      google.maps.event.trigger(map, 'resize')}, 0);
  }

  return Map;
}
