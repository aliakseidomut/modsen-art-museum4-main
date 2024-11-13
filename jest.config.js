/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["@testing-library/jest-dom/extend-expect"],

  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest",
  },

  testMatch: ["**/?(*.)+(spec|test).[tj]s?(x)"],

  moduleNameMapper: {
    "^components(.*)$": "<rootDir>/src/components$1",
    "^utils(.*)$": "<rootDir>/src/utils$1",
    "^types(.*)$": "<rootDir>/src/types$1",
    "^pages(.*)$": "<rootDir>/src/pages$1",
    "^constants(.*)$": "<rootDir>/src/constants$1",
    "^assets(.*)$": "<rootDir>/src/assets$1",
  },

  transformIgnorePatterns: [
    "node_modules/(?!(@testing-library|react-testing-library))",
  ],

  globals: {
    "ts-jest": {
      isolatedModules: true,
    },
  },
};
