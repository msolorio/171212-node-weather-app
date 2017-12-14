const yargs = require('yargs');

// using yargs to easily access addressed passed
const argv = yargs
  .command('', 'return coordinates for address', {
    address: {
      describe: 'the address you wish to receive coordinates for',
      demand: true
    }
  })
  .help()
  .argv;

const formatAddress = (address) => address.split(' ').join('%20');

module.exports = {
  address: formatAddress(argv.address)
};
