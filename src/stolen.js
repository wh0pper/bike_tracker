// import $ from 'jquery';

export class Stolen {
  constructor(city) {
    this.city = city;
  }

  makeRequest() {
    let request = new XMLHttpRequest();
    let url = `https://bikeindex.org:443/api/v3/search?page=1&per_page=5&location=seattle&distance=25&stolenness=stolen&appid=f45e92290a73a41883482ba2cd230e55a258f5ec1e629825dc88f7c7ac63cd20&secret=2e7ef95d12847833adb4fdfab1464760bdb9b509ad17e4558294aaa8ed162263`;
    let response;
    request.onreadystatechange = function() {
      // console.log(this.status,'need 200');
      if (this.readyState === 4 && this.status === 200) {
        response = JSON.parse(this.responseText);
        console.log('good')
      }
      else {
        response = 5;
      }
    }

    request.open("GET", url, true);
    request.send();

    this.response = response;
    // console.log(response);
    return response;
  }
}
