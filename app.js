const getAddressCoordinates = require('./api/getAddressCoordinates');
const getWeather = require('./api/getWeather');
const { address } = require('./args');

getAddressCoordinates(address)
  .then((addressData) => {
    return getWeather(addressData);
  })
  .then((weatherData) => {
    console.log(JSON.stringify(weatherData, undefined, 2));
  })
  .catch((error) => {
    console.error(error);
  });
