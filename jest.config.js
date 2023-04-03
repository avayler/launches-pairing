module.exports = {
    testPathIgnorePatterns: [
        "<rootDir>/.next/",
        "<rootDir>/node_modules/",
        "<rootDir>/out/",
        "<rootDir>/build/"
    ],
    setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
    transform: {
        "^.+\\.(js|jsx|ts|tsx)$": ["babel-jest", { presets: ["next/babel"] }]
    },
    moduleNameMapper: {
        "\\.(scss|sass|css)$": "identity-obj-proxy"
    },
    testEnvironment: "jsdom",
    testMatch: ["<rootDir>/test/**/*.test.{js,jsx,ts,tsx}"],
    collectCoverageFrom: ["<rootDir>/components/**/*.{js,jsx,ts,tsx}", "!**/*.d.ts", "!**/node_modules/**"],
    coverageReporters: ["json", "lcov", "text", "clover"],
    // Automatically clear mock calls, instances, contexts and results before every test
    clearMocks: true
};
