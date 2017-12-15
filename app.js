const getAddressData = require('./geocode/getAddressData');
const formatAddressData = require('./geocode/formatAddressData');
const { address } = require('./args');

getAddressData(address)
  .then((addressData) => {
    console.log(formatAddressData(addressData));
  })
  .catch((error) => {
    console.error(error);
  });
