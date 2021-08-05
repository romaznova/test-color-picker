const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const outputPath = path.resolve(__dirname, 'dist');
module.exports = {
  entry: './src/index.tsx',
  output: {
    path: outputPath,
    filename: 'bundle.js',
  },
  mode: 'development',
  devtool: 'source-map',
  devServer: {
    contentBase: outputPath,
    port: 3030,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
      },
      {
        test: /\.(ts|tsx)$/,
        loader: 'ts-loader',
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          'style-loader',
          // Translates CSS into CommonJS
          'css-loader',
          // Compiles Sass to CSS
          // 'sass-loader',
          {
            loader: 'sass-loader',
            options: {
              additionalData: '@import "./src/styles/style.scss";',
            },
          },
        ],
      },
    ],
  },
  plugins: [new HtmlWebpackPlugin({ template: './src/index.html' })],
  resolve: {
    alias: {
      '@components': path.resolve(__dirname, 'src/components'),
      '@containers': path.resolve(__dirname, 'src/containers'),
      '@context': path.resolve(__dirname, 'src/context'),
      '@interfaces': path.resolve(__dirname, 'src/interfaces'),
      '@actions': path.resolve(__dirname, 'src/actions'),
      '@helpers': path.resolve(__dirname, 'src/helpers'),
      '@reducers': path.resolve(__dirname, 'src/reducers'),
    },
    extensions: ['', '.ts', '.tsx', '.js'],
  },
};
