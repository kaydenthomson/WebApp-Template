module.exports = {
  extends: 'airbnb',
  globals: {
    document: false,
  },
  rules: {
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
  },
};
