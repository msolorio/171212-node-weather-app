const getAddressCoordinates = require('./api/getAddressCoordinates');
const getTemperature = require('./api/getTemperature');
const { address } = require('./args');

getAddressCoordinates(address)
  .then((addressData) => {
    return getTemperature(addressData);
  })
  .then((temperatureData) => {
    console.log(JSON.stringify(temperatureData, undefined, 2));
  })
  .catch((error) => {
    console.error(error);
  });
