module.exports = function formatAddressData(addressData) {
  return JSON.stringify({
    address: addressData.results[0].formatted_address,
    latitude: addressData.results[0].geometry.location.lat,
    longitute: addressData.results[0].geometry.location.lng
  }, undefined, 2);
}
