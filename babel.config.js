module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'babel-plugin-module-resolver',
      {
        root: '.',
        extensions: ['.ts', '.tsx', '.js', '.json'],
        alias: {
          '@': './app',
          '@/*': './app/*',
        }
      }
    ],
    'react-native-worklets/plugin',
  ]
};
