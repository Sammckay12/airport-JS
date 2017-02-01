function Weather() {
  this.weather = ["stormy","rainy","sunny"]

};

Weather.prototype.condition = function (){
  return this.weather
};

Weather.prototype.randomizer = function(){
  return this.weather[Math.floor(Math.random()* this.weather.length)]

};
