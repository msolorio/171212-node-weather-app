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

module.exports = {
  address: encodeURIComponent(argv.address)
};
