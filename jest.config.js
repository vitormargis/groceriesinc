module.exports = {
  collectCoverageFrom: [
    'components/**/*.{ts,tsx}',
    '!**/*.test.tsx',
    '!**/*.d.ts',
    '!**/node_modules/**',
  ],
  testPathIgnorePatterns: ['/node_modules/', '/.next/', '/cypress/'],
  transformIgnorePatterns: [
    '/node_modules/',
    '^.+\\.module\\.(css|sass|scss)$',
  ],
  moduleNameMapper: {
    '^.+\\.module\\.(css|sass|scss)$': 'identity-obj-proxy',
  },
}