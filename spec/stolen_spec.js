import {Stolen} from './../src/stolen';

describe('Stolen', function() {
  var stolen;

  beforeEach(function() {
    stolen = new Stolen(portland);
  });

  it('makes request to bike index api to return all stolen bikes for a city', function() {
    let response = stolen.makeRequest()
    expect(response.bikes).not.toEqual(null);
  })



})
