export class Stolen {
  constructor(city) {
    this.city = city;
  }

  makeRequest() {
    let request = new XMLHttpRequest();
    let url = `https://bikeindex.org:443/api/v3/search?page=1&per_page=5&location=${this.city}&distance=25&stolenness=stolen`;

    request.onreadystatechange = function() {
      if (this.readyState === 4 && this.status === 200) {
        let response = JSON.parse(this.responseText);
      }
    }

    request.open("GET", url, true);
    request.send();

    this.response = response;
    return response;
  }
}
