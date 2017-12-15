const request = require('request');
const { address } = require('./args');

function getAddressData(addr) {
  const encodedAddress = encodeURIComponent(addr);

  return new Promise((resolve, reject) => {
    request({
      url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`,
      json: true,
      method: 'GET'
    }, (error, response, body) => {

      switch(true) {
        case !!error:
          return reject(`Unable to connect to server.\n${error}`);

        case (body.status === 'ZERO_RESULTS'):
          return reject('no results found');

        case (body.status === 'OK'):
          return resolve(body);

        default:
          reject('somethings went weird');
      }
    });
  });
}


function formatAddressData(addressData) {
  return (
    `address: ${addressData.results[0].formatted_address}
latitude: ${addressData.results[0].geometry.location.lat}
longitute: ${addressData.results[0].geometry.location.lng}`
  );
}


getAddressData(address)
  .then((addressData) => {
    console.log(formatAddressData(addressData));
  })
  .catch((error) => {
    console.error(error);
  });
