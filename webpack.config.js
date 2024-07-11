const Dotenv = require('dotenv-webpack');

module.exports = {
  // Your existing webpack config
  plugins: [
	new Dotenv({
	  path: './.env', // Path to .env file
	}),
  ],
};