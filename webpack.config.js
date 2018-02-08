const path = require('path');
const webpack = require('webpack');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

const PATHS = {
  source: path.join(__dirname, 'src'),
  build: path.join(__dirname, 'dist'),
};

const config = {
  entry: {
    main: './src/main.js',
  },
  
  output: {
    filename: './main.js',
}
};

module.exports = config;
