import $ from 'jquery';
import { Stolen } from './stolen'

var displayData = function(results) {
  $(".bikeList").append('15 most recently stolen bikes near your location:')
  results.bikes.forEach(function(bike) {
    $(".bikeList").append('<li>' + bike.title + ', ' + bike.stolen_location + '</li>');
  });
}

var displayDataColors = function(results) {
  $(".bikeListColor").append('list of bikes stolen that are a certain color');
  results.bikes.forEach(function(bike) {
    $("bikeListColor").append('<li>'+bike.title+" "+bike.frame_colors+'</li>')
  });
}

$(document).ready(function() {
  let parameters = {'city': '*', 'color': '*'};
  $('#formLocation').submit(function(event) {
    event.preventDefault();
    $(".bikeList").text('');
    let city = $('#city').val();
    parameters.city = city;
    let stolen = new Stolen(parameters);
    stolen.makeRequest(displayData);

    // $.get(stolen.makeRequest()).then(function(response) {
    //   console.log(stolen,22)
    //   debugger;
    //   console.log(stolen['response'],33);
    // }).fail(function(error) {
    //   console.log('failed error');
    // });
  });

  $('#formColor').submit(function(event) {
    console.log(parameters);
    event.preventDefault();
    $('.bikeListColor').text('');
    let color = $('#color').val();
    parameters.color = color;
    let stolen2 = new Stolen(parameters);
  })


});
