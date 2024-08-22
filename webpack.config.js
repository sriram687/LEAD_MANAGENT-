
module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader', // Transpiles JavaScript files using Babel
        },
      },
      {
        test: /\.css$/, // Matches CSS files
        use: [
          'style-loader', // Injects CSS into the DOM
          'css-loader'    // Resolves CSS imports
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.css'], // File extensions to resolve
  },
};
