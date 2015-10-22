// Karma configuration

module.exports = function (config) {
    'use strict';

    var baseConfig = require('./karma.conf');

    baseConfig(config, {
        singleRun: false,
        autoWatch: true,
        browsers: ['Chrome'],
        logLevel: baseConfig.LOG_DEBUG,
        preprocessors: [],
        reporters: ['html']
    });
};
