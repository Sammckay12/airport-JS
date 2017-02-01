function Weather() {
  this.weather = "stormy"
};

Weather.prototype.condition = function (){
  return this.weather
};
