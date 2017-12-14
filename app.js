const request = require('request');
const { address } = require('./args');

function getCoordinates(addr) {
  return new Promise((resolve, reject) => {
    request({
      url: `https://maps.googleapis.com/maps/api/geocode/json?address=${addr}`,
      json: true,
      method: 'GET'
    }, (error, response, body) => {

      if (error) reject(error);

      const result = (
`address: ${body.results[0].formatted_address}
latitude: ${body.results[0].geometry.location.lat}
longitute: ${body.results[0].geometry.location.lng}`
      );

      resolve(result);
    });
  });
}

getCoordinates(address)
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.error('error:', error);
  });
