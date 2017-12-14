const request = require('request');
const { address } = require('./args');

function getAddressData(addr) {
  return new Promise((resolve, reject) => {
    request({
      url: `https://maps.googleapis.com/maps/api/geocode/json?address=${addr}`,
      json: true,
      method: 'GET'
    }, (error, response, body) => {

      if (error) return reject(error);

      if (body.results < 1) return reject('no results found');

      resolve(body);
    });
  });
}

function formatResult(addressData) {
  return (
    `address: ${addressData.results[0].formatted_address}
latitude: ${addressData.results[0].geometry.location.lat}
longitute: ${addressData.results[0].geometry.location.lng}`
  );
}

getAddressData(address)
  .then((addressData) => {
    console.log(formatResult(addressData));
  })
  .catch((error) => {
    console.error('error:', error);
  });
