import $ from 'jquery';

export class Stolen {
  constructor(city) {
    this.city = city;
    // this.
    // this.response = '';
  }

  makeRequest(displayData) {
     let url = `https://bikeindex.org:443/api/v3/search?page=1&per_page=15&location=${this.city}&distance=25&stolenness=proximity&appid=f45e92290a73a41883482ba2cd230e55a258f5ec1e629825dc88f7c7ac63cd20&secret=2e7ef95d12847833adb4fdfab1464760bdb9b509ad17e4558294aaa8ed162263`;
    $.get(url).then(function(results) {
      displayData(results);
    }).fail(function() {
      console.log('error');
    });

    // let that = this;
    // let promise = new Promise(function(resolve, reject) {
    //   let request = new XMLHttpRequest();
    //   let url = `https://bikeindex.org:443/api/v3/search?page=1&per_page=5&location=seattle&distance=25&stolenness=proximity&appid=f45e92290a73a41883482ba2cd230e55a258f5ec1e629825dc88f7c7ac63cd20&secret=2e7ef95d12847833adb4fdfab1464760bdb9b509ad17e4558294aaa8ed162263`;
    //   request.onload = function() {
    //     if (this.status === 200) {
    //       resolve(request.response);
    //     }
    //     else {
    //       reject(Error(request.statusText));
    //     }
    //   }
    //   request.open("GET", url, true);
    //   request.send();
    // });
    //
    // promise.then(function(response) {
    //   that.response = JSON.parse(response);
    // }, function(error) {
    //   that.response = `There was an error processing your request: ${error.message}`;
    // });
    // return this.response;

  }
}
