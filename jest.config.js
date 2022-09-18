/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
const config = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    reporters: [
      "default",
      [
        "jest-stare",
        {
          "resultDir": "output",
          "reportTitle": "API Test Report",
          "additionalResultsProcessors": [
            "jest-junit"
          ]
        }
      ]
    ],
    "transformIgnorePatterns": [
        "node_modules/(?!@ngrx|(?!deck.gl)|ng-dynamic)"
      ]  
  
  };
  module.exports = config;
  