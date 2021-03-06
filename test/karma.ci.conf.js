var baseConfig = require('./karma.conf');

// Karma configuration to run in Travis
module.exports = function(config) {
    'use strict';

    baseConfig(config, {
        singleRun: true,
        autoWatch: false,
        customLaunchers: {
            Chrome_travis_ci: {
                base: 'Chrome',
                flags: ['--no-sandbox']
            }
        },
        browsers: ['Chrome_travis_ci', 'Firefox', 'PhantomJS'],
        logLevel: config.LOG_INFO,
        preprocessors: {
            'src/js/**/*.js': ['coverage']
        },
        reporters: ['spec', 'coverage', 'coveralls']
    });
};
