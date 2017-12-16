const request = require('request');
const DARKSKY_API_KEY = require('../config').DARKSKY_API_KEY;

/**
 * getTemperature - given coordinates make api call for weather data and return
 * current temperature
 *
 * @param  {object} coordinates - object containing lat and lng property
 * @return {string} - either the error message or the temperature for the
 * requested location
 */
module.exports = function getTemperature(coordinates) {
  const { lat, lng } = coordinates;

  return new Promise((resolve, reject) => {
    request({
      url: `https://api.darksky.net/forecast/${DARKSKY_API_KEY}/${lat},${lng}`,
      json: true
    }, (error, response, body) => {

      switch(true) {
        case !!error:
          return reject('Unable to connect to Forecast.io server');

        case (response.statusCode === 400):
          return reject('No weather data found for location');

        case (response.statusCode === 403):
          return reject('Not authorized. Please check your darksky api key');

        case (response.statusCode === 200):
          return resolve(body.currently.temperature);

        default:
          reject('Something went weird retrieving weather data');
      }
    });
  });
}
