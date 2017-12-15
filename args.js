const yargs = require('yargs');

// using yargs to easily access addressed passed
const argv = yargs
  .options({
    address: {
      alias: 'a',
      demand: true,
      string: true,
      description: 'Address to fetch weather'
    }
  })
  .help()
  .alias('help', 'h')
  .argv;

module.exports = {
  address: argv.address
};
