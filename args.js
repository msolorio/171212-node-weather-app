const yargs = require('yargs');

// uses yargs to set up option flags to pass in command line
// and help tools to display with `node app.js --help`
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
