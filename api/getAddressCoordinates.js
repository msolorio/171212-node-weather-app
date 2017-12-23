const axios = require('axios');
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

    const googleMapsRequestUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`;

    axios.get(googleMapsRequestUrl)
      .then((response) => {
        switch(true) {
          case (response.data.status === 'ZERO_RESULTS'):
            return reject('No results found for address.');

          case (response.data.status === 'OK'):
            return resolve(formatAddressData(response.data));

          default:
            return reject(`somethings went weird retreiving address from google maps api.\nResponse status code: ${response.status}`);
        }
      })
      .catch((error) => {
        switch(true) {
          case (error.code === 'ENOTFOUND'):
            return reject('Unable to connect to google api server.');

          default:
            return reject(`There was an error connecting to the google api server.\nError code: ${error.code}`);
        }
      });
  });
}
