exports.config = {
    framework: 'jasmine',
    directConnect: false,
    // If we mention seleniumAddress and avoid directConnect:true 
    // then we need to launch selenium server manually by specifying the command: webdriver-manager  start
    seleniumAddress: 'http://localhost:4444/wd/hub',
    capabilities: {
        'browserName': 'chrome'
    },
    jasmineNodeOpts: {
        defaultTimeoutInterval: 90000,
        showColor: true
    },
    //Name of the Specfile
    specs: [
        './dist/**/specs/**/*.spec.js',
        './dist/**/specs/homepage/*.spec.js'
    ],
    suites: {
        homepage: './dist/**/specs/homepage/**/*.spec.js',
        search: ['tests/e2e/contact_search/**/*Spec.js',
            'tests/e2e/venue_search/**/*Spec.js']
    },
    onPrepare: function () {
        //global test set-up goes here 
        require('ts-node').register({
            project: require('path').join(__dirname, './tsconfig.json') // Relative path of tsconfig.json file
        });
        console.log("========== Start Test=================");
    },
    onComplete: function () {
        //global test tear-down goes here 
        console.log("========== End Test =================");
    }
};
