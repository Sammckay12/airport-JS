function Plane () {
  this.flying = true;
  this.airport = null;
};

Plane.prototype.land = function (airport) {
  this.flying = false;
  this.airport = airport;
};
