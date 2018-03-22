import $ from 'jquery';

export class Stolen {
  constructor(parameters) {
    this.city = parameters.city;
    this.color = parameters.color;
    this.manufacturer = parameters.manufacturer;
    this.single = [];
  }

  makeRequest(displayData,displaySearch,errorMessageUser) {
    let that = this;
    let zipCodeArray2 = [];
    console.log('city:', this.city, 'color:', this.color, 'man', this.manufacturer);
    displaySearch()
     let url = `https://bikeindex.org:443/api/v3/search?page=1&per_page=15&location=${this.city}&distance=25&stolenness=proximity&appid=${process.env.BIKE_API_KEY}&secret=${process.env.BIKE_SECRET}&query=${this.color}&manufacturer=${this.manufacturer}`;
    $.get(url).then(function(results) {

      results.bikes.forEach(function(bike){
        let single = bike.stolen_location.match(/\d+/g);
        zipCodeArray2.push(single[0]);
        window.zipCodeArray.push(single[0]);
      });
      that.single = zipCodeArray2
      displayData(results);
    }).fail(function() {
      errorMessageUser()
    });
  }

  getLatLong() {
    window.zipCodeArray.forEach(function(zip) {
      let url = `https://maps.googleapis.com/maps/api/geocode/json?address=${zip}`;
      $.get(url).then(function(results) {
        window.latLongArray.push(results.results[0].geometry.location);
      }).fail(function() {
        console.log('error in getLatLong');
      });
    });
  }

}
