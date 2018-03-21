import $ from 'jquery';
import { Stolen } from './stolen'

var displayData = function(results) {
  $(".bikeList").text('');
  results.bikes.forEach(function(bike) {
    $(".bikeList").append('<li>' + bike.title + '</li>');
  });
}

$(document).ready(function() {
  $('#formLocation').submit(function(event) {
    event.preventDefault();
    let city = $('#city').val();
    console.log(city)
    let stolen = new Stolen(city);
    stolen.makeRequest(displayData)

    // $.get(stolen.makeRequest()).then(function(response) {
    //   console.log(stolen,22)
    //   debugger;
    //   console.log(stolen['response'],33);
    // }).fail(function(error) {
    //   console.log('failed error');
    // });
  });
});
