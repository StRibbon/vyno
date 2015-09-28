app.filter('instock', function(){
  return function(input) {
    if (input == true){
    input = "Yes";
  } else {
    input = "No";
  }
    return input;
  }
});
