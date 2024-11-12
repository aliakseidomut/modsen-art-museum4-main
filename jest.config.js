/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["@testing-library/jest-dom/extend-expect"],
  moduleNameMapper: {
    "^components(.*)$": "<rootDir>/src/components$1",
    "^utils(.*)$": "<rootDir>/src/utils$1",
    "^types(.*)$": "<rootDir>/src/types$1",
    "^pages(.*)$": "<rootDir>/src/pages$1",
    "^constants(.*)$": "<rootDir>/src/constants$1",
    "^assets(.*)$": "<rootDir>/src/assets$1",
  },
};
