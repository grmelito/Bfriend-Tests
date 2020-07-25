const { browser } = require('protractor');

module.exports.config = {
    spec: ['../spec/*.spec.js'],
    capabilities: {
        'browserName': 'firefox'
    },
    jasmineNodeOpts: {
        print: function() {}
    }
    
}