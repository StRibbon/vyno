module.exports = function ($http, $state) {
  var UI = {};
  UI.hideSideNav = function(){
    $('.side-nav').sideNav('hide');
  }
  return UI;
};
