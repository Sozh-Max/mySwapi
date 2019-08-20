module.exports = {
  plugins: [
    require('autoprefixer'),
    require('css-mqpacker'),
    require('cssnano')({
      preset: [
        'default', 
        {
          discardComments: {
            removeAll: true,
          },
        }
      ],
    }),
    require('postcss-preset-env'),
  ]
}