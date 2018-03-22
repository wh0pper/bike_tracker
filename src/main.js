import $ from 'jquery';
import { Stolen } from './stolen'

var displayData = function(results) {
  if (results.bikes.length == 0) {
    $(".bikeList").text('No matches');
  } else {
    $(".bikeList").text('15 most recently stolen bikes matching your search:')
    results.bikes.forEach(function(bike) {
      $(".bikeList").append('<li>' + bike.title + ', ' + bike.stolen_location + ', ' + bike.frame_colors +', ' + bike.manufacturer_name +', ' + bike.serial +'</li>');
      });
    }
  }

  var displaySearch = function() {
    $(".bikeList").text('Finding results...')
  }

  var errorMessageUser = function() {
    $(".bikeList").text('There was an error processing your request.');
  }

$(document).ready(function() {
  $('#formLocation').submit(function(event) {
    let parameters = {'city': '*', 'color': '', 'manufacturer': ''};
    event.preventDefault();
    $(".bikeList").text('');
    let city = $('#city').val();
    let color = $('#color').val();
    let manufacturer = $('#manufacturer').val();
    // let serial = $('#serial').val();
    if (city.length > 0) {
      parameters.city = city;
    }
    if (color.length > 0) {
      parameters.color = color;
    }
    if (manufacturer.length > 0) {
      parameters.manufacturer = manufacturer;
    }
    // if (serial.length > 0) {
    //     parameters.serial = serial;
    // }
    let stolen = new Stolen(parameters);
    stolen.makeRequest(displayData,displaySearch,errorMessageUser);

    // $.get(stolen.makeRequest()).then(function(response) {
    //   console.log(stolen,22)
    //   debugger;
    //   console.log(stolen['response'],33);
    // }).fail(function(error) {
    //   console.log('failed error');
    // });
  });

});
