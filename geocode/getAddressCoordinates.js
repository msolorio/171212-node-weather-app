const request = require('request');
const formatAddressData = require('./formatAddressData');

/**
 * getAddressCoordinates - given a string address make api call to get address data
 *
 * @param  {string} addr - the requested address in string form
 * @return {object} - the data object for that address
 */
module.exports = function getAddressCoordinates(addr) {
  const encodedAddress = encodeURIComponent(addr);

  return new Promise((resolve, reject) => {
    request({
      url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`,
      json: true
    }, (error, response, body) => {

      switch(true) {
        case !!error:
          return reject(`Unable to connect to google server.\n${error}`);

        case (body.status === 'ZERO_RESULTS'):
          return reject('no results found for address');

        case (body.status === 'OK'):
          const addressCoordinates = formatAddressData(body);
          return resolve(addressCoordinates);

        default:
          reject('somethings went weird retreiving address');
      }
    });
  });
}
