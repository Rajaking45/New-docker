const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/main.jsx', // Match your Vite entry point
  output: {
    path: path.resolve(__dirname, 'dist-webpack'), // Different output folder
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      // Add other loaders as needed
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html', // Match your Vite HTML file
    }),
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist-webpack'),
    },
    port: 3001, // Different port than Vite
  },
};