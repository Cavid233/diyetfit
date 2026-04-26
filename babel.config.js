module.exports = {
  presets: ['babel-preset-expo'],
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
