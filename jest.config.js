module.exports = {
  transform: {
    '^.+\\.tsx?$': 'babel-jest',
    '.+\\.(css|styl|less|sass|scss|svg|png|jpg|ttf|woff|woff2)$': 'jest-transform-stub',
  },
  setupFilesAfterEnv: ['./setupTests.tsx'],
  moduleNameMapper: {
    '@components/(.*)': '<rootDir>/src/components/$1',
    '@svg/(.*)': '<rootDir>/public/svg/$1',
    '@src/(.*)': '<rootDir>/src/$1',
  },
};
