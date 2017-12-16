/**
 * formatAddressData - given the address data object returns a formatted
 * object for the official address, the latitude and longitude
 *
 * @param  {object} addressData - data object returned from api call
 * @return {string} - a stringified object containing official address,
 * latitude, and longitude
 */
module.exports = function formatAddressData(addressData) {
  return JSON.stringify({
    address: addressData.results[0].formatted_address,
    latitude: addressData.results[0].geometry.location.lat,
    longitute: addressData.results[0].geometry.location.lng
  }, undefined, 2);
}
