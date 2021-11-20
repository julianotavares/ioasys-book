const { pathsToModuleNameMapper } = require("ts-jest/utils");
const { compilerOptions } = require("./tsconfig.json");

module.exports = {
  preset: 'react-native',
  collectCoverageFrom: ['<rootDir>/src/**/*.{ts,tsx}'],
  coverageDirectory: '<rootDir>/__tests__/coverage',
  testEnvironment: 'jsdom',
  clearMocks: true,
  transform: {},
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
  collectCoverageFrom: [
    "<rootDir>/src/**/*.tsx",
    "<rootDir>/!src/**/*.spec.tsx"
  ],
  testMatch: [
    "**/__tests__/**/*.ts?(x)",
    "**/?(*.)(spec|test).ts?(x)"
],
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, {
    prefix: "<rootDir>",
  }),
}
