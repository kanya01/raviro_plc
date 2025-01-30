module.exports = {
  // Test environment
  testEnvironment: "jsdom",

  // Jest DOM and other global setup
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],

  // Handle module imports
  moduleNameMapper: {
    // Style and asset imports
    "\\.(css|less|scss|sass)$": "identity-obj-proxy",
    "\\.(gif|ttf|eot|svg|png|jpg|jpeg)$":
      "<rootDir>/test/javascript/__mocks__/fileMock.js",

    // Path aliases - adjust based on your Rails app structure
    "^@/(.*)$": "<rootDir>/app/javascript/$1",
    "^components/(.*)$": "<rootDir>/app/javascript/components/$1",
    "^helpers/(.*)$": "<rootDir>/app/javascript/helpers/$1",
  },

  // File transformations
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": ["babel-jest"],
  },

  // Test file patterns
  testMatch: [
    "<rootDir>/app/javascript/**/__tests__/**/*.{js,jsx,ts,tsx}",
    "<rootDir>/app/javascript/**/*.{spec,test}.{js,jsx,ts,tsx}",
  ],

  // Coverage collection
  collectCoverageFrom: [
    "app/javascript/**/*.{js,jsx,ts,tsx}",
    "!app/javascript/**/*.d.ts",
    "!app/javascript/packs/*.js",
    "!**/node_modules/**",
  ],

  // Coverage thresholds
  coverageThreshold: {
    global: {
      branches: 70,
      functions: 70,
      lines: 70,
      statements: 70,
    },
  },

  // Important for Rails integration
  moduleDirectories: ["node_modules", "app/javascript"],
};
