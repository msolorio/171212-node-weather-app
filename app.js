const request = require('request');

request({
  url: 'https://maps.googleapis.com/maps/api/geocode/json?address=7535%20Torrey%20Santa%20Fe%20Rd,%20San%20Diego,%20CA%2092129',
  json: true,
  method: 'GET'
}, (error, response, body) => {
  if (error) {
    return console.log('error:', error);
  }

  // JSON.stringify will pretty print our JSON
  // 3rd argument specifies indendation
  console.log(JSON.stringify(body, undefined, 2));
  
  console.log(body.results[0].formatted_address);
  console.log(body.results[0].geometry.location.lat);
  console.log(body.results[0].geometry.location.lng);
});
