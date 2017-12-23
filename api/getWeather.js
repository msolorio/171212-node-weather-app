const axios = require('axios');
const DARKSKY_API_KEY = require('../config').DARKSKY_API_KEY;

/**
 * getTemperature - given coordinates make api call for weather data and return
 * current temperature
 *
 * @param  {object} addressData - object containing lat, lng, and address property
 * @return {string} - either the error message or the temperature for the
 * requested location
 */
module.exports = function getWeather(addressData) {
  const { lat, lng, address } = addressData;

  return new Promise((resolve, reject) => {

    const darkSkyRequestUrl = `https://api.darksky.net/forecast/${DARKSKY_API_KEY}/${lat},${lng}`;

    axios.get(darkSkyRequestUrl)
      .then((response) => {

        switch(true) {
          case (response.status === 400):
            return reject('No weather data found for location');

          case (response.status === 200):

            return resolve({
              address,
              actualTemp: response.data.currently.temperature,
              apparentTemp: response.data.currently.apparentTemperature,
              precipitationProbability: response.data.currently.precipProbability,
              windSpeed: response.data.currently.windSpeed,
              cloudCover: response.data.currently.cloudCover
            });

          default:
            return reject(
              `Something went weird retrieving weather data.\nResponse status code: ${response.status}`
            );
        }
      })
      .catch((error) => {
        switch(true) {
          case (error.response.status === 403):
            return reject('Not authorized. Please check your darksky api key');

          default:
            reject('Unable to connect to Dark Sky api server');
        }
      });
  });
}
