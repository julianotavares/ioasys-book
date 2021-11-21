const { pathsToModuleNameMapper } = require("ts-jest/utils");
const { compilerOptions } = require("./tsconfig.json");

module.exports = {
  preset: 'react-native',
  collectCoverageFrom: ['<rootDir>/src/**/*.{ts,tsx}'],
  coverageDirectory: '<rootDir>/__tests__/coverage',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: [
    "@testing-library/jest-native/extend-expect",
    "jest-styled-components"
  ],
  clearMocks: true,
  transformIgnorePatterns: [
    'node_modules/(?!(jest-)?react-native|react-clone-referenced-element|@react-native-community|rollbar-react-native|@fortawesome|@react-native|@react-navigation)',
  ],
  transform: {
  },
  globals: {
    "__DEV__": true
  },
  moduleDirectories: [
    "node_modules",
    "src"
  ],
  moduleFileExtensions: [
    "js",
    "json",
    "ts",
    "tsx"
  ],
  testMatch: [
    "**/__tests__/**/*.ts?(x)",
    "**/?(*.)(spec|test).ts?(x)"
],
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, {
    prefix: "<rootDir>",
  }),
}
