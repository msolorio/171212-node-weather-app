const request = require('request');

request({
  url: 'https://maps.googleapis.com/maps/api/geocode/json?address=7535%20Torrey%20Santa%20Fe%20Rd,%20San%20Diego,%20CA%2092129',
  json: true,
  method: 'GET'
}, (error, response, body) => {
  // JSON.stringify will pretty print our JSON
  // the 3rd argument specifies the indendation
  console.log(JSON.stringify(body, undefined, 2));
});
