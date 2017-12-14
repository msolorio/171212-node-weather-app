const request = require('request');
const { address } = require('./args');

function getCoordinates(addr) {
  request({
    url: `https://maps.googleapis.com/maps/api/geocode/json?address=${addr}`,
    json: true,
    method: 'GET'
  }, (error, response, body) => {
    if (error) {
      return console.log('error:', error);
    }

    console.log('address:', body.results[0].formatted_address);
    console.log('latitude:', body.results[0].geometry.location.lat);
    console.log('longitute:', body.results[0].geometry.location.lng);
  });
}

getCoordinates(address);
