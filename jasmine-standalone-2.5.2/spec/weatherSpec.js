'use strict'

describe('Weather', function(){
  var weather;
  var airport;

  beforeEach(function() {
    weather = new Weather();
    airport = new Airport();
  });

  it('knows the weather is stormy', function(){
    // spyOn(Airport, 'weather').and.returnValue("stormy")
    expect(weather.condition()).toEqual("stormy")
   });

   







});
