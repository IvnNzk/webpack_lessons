'use strict';

const NODE_ENV = process.env.NODE_ENV || 'development';
const webpack = require('webpack');

module.exports = {
    entry:  "./home",
    output: {
        filename: "./build.js",
        library:  "home"
    },
    mode:"development",
    optimization: {
        // We no not want to minimize our code.
        minimize: false
    },
};