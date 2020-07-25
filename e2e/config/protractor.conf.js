const { browser } = require('protractor');
const SpecReporter = require('jasmine-allure-reporter');

module.exports.config = {
    specs: ['../spec/*.spec.js'],
    onPrepare: () => {
        jasmine.getEnv().addReporter(new SpecReporter({
            suite: {
                displayNumber: true
            },
            spec: {
                displayFailed: true,
                displayPending: true,
                displayDuration: true,
                displayStackTrace: true
            },
            summary: {
                displayFailed: true
            }
        }))
    },
    capabilities: {
        'browserName': 'firefox'
    },
    jasmineNodeOpts: {
        print: function() {}
    }
    
}