const getAddressCoordinates = require('./geocode/getAddressCoordinates');
const getTemperature = require('./geocode/getTemperature');
const { address } = require('./args');

getAddressCoordinates(address)
  .then((addressCoordinates) => {
    return getTemperature(addressCoordinates);
  })
  .then((temperature) => {
    console.log(`${temperature} F`);
  })
  .catch((error) => {
    console.error(error);
  });
