function Airport () {
  this.planes = [];

}

var weather = new Weather();

Airport.prototype.land = function (plane) {
  this.planes.push(plane);
};

Airport.prototype.takeOff = function (plane) {
    if (weather.condition() === "stormy") {
      throw new Error ("Sorry");
    }
      this.planes.pop(plane);
};
