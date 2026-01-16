module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    ['react-native-worklets/plugin'],
    ['@babel/plugin-transform-export-namespace-from'],
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          '@': './src',
          '@common': './src/common',
          '@features': './src/features',
          '@assets': './src/assets',
          '@utils': './src/utils',
        },
      },
    ],
  ],
};
