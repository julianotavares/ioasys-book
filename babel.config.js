module.exports = {
  presets: ['module:metro-react-native-babel-preset', '@babel/preset-typescript'],
  plugins: [
     [
       'module-resolver',
          {
            root: ['.'],
            extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
            alias: {
              '@src': './src',
              '@assets': './src/assets',
              '@components': './src/components',
              '@configs': './src/configs',
              '@contexts': './src/contexts',
              '@global': './src/global',
              '@helpers': './src/helpers',
              '@hooks': './src/hooks',
              '@screens': './src/screens',
              '@routes': './src/routes',
              '@services': './src/services',
              '@styles': './src/styles',
              '@utils': './src/utils',
            },
          }
    ]
   ],
};
