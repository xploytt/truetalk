const path = require('path');

module.exports = {
  // ... other webpack configuration options ...
  module: {
    rules: [
      // ... other rules ...
      {
        test: /\.s[ac]ss$/i,
        use: [
          'style-loader',
          'css-loader',
          'resolve-url-loader', // Place resolve-url-loader before sass-loader
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true, // Enable source maps for SASS
            },
          },
        ],
      },
    ],
  },
};
