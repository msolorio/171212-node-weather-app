const request = require('request');

/**
 * getAddressData - given a string address returns a data object for address
 *
 * @param  {string} addr - the requested address in string form
 * @return {object} - the data object for that address
 */
module.exports = function getAddressData(addr) {
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
