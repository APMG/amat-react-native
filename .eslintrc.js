module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'universe/native',
    'prettier',
    'plugin:@typescript-eslint/recommended',
    '@react-native-community',
    'plugin:react-native-a11y/ios'
  ],
  rules: {
    'comma-dangle': 'off'
  }
};
