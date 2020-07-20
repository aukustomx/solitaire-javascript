/* eslint-env node*/

module.exports = function (config) {
  "use strict";

  config.set({

    basePath: "./",

    files: [
      "app/bower_components/angular/angular.js",
      "app/bower_components/angular-route/angular-route.js",
      "app/bower_components/angular-mocks/angular-mocks.js",
      "app/bower_components/underscore/underscore.js",
      "app/cards/**/*.js",
      "app/klondike/piles/pile.js",
      "app/klondike/piles/foundationPile.js",
      "app/klondike/piles/remainderPile.js",
      "app/klondike/piles/tableauPile.js",
      "app/klondike/*.js",
      "tests/**/*.js" 
    ],

    autoWatch: false,

    frameworks: ["jasmine"],

    browsers: ["PhantomJS"],

    plugins: [
      "karma-chrome-launcher",
      "karma-firefox-launcher",
      "karma-phantomjs-launcher",
      "karma-jasmine",
      "karma-junit-reporter"
    ],

    singleRun: true,

    failOnFailingTestSuite: false,

    failOnEmptyTestSuite: false,

    reporters: ['junit'],

    junitReporter: {
      outputDir: "test_results",
      outputFile: "unit.xml",
      suite: "unit"
    }

  });
};
