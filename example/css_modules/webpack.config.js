const path = require('path');

module.exports = {
  context:path.resolve(__dirname),
  entry: './index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader",{
          loader: 'css-loader',
          options: {
            modules:true,
          }
        }],
      },
    ]
  },
};