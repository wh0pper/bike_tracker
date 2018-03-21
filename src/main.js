import $ from 'jquery';
import { Stolen } from './stolen'

$(document).ready(function() {
  $('#formLocation').submit(function(event) {
    event.preventDefault();
    let city = $('#city').val();
    let stolen = new Stolen(city);
    let response = stolen.makeRequest()
    console.log(response);
  });
});
