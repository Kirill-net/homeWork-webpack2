const path = require('path');
const htmlwebpackplugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    // entry: './src/index.js',
    // output: {
    // path: path.resolve(__dirname, 'dist'),
    // filename: 'main.js',
    // },
    module: {
        rules: [
            // {
            // test: /\.txt$/, // маска для имени файла
            // loader: 'raw-loader' // какой загрузчик использовать
            // },
            {
            test: /\.css$/,
            use: [MiniCssExtractPlugin.loader,'css-loader']
            }
        ],
    },
    plugins: [
        new htmlwebpackplugin({
            template: './src/index.html',
            filename: 'main.html'
        }),
        new MiniCssExtractPlugin({
            filename: 'main.css'
        })
    ]
};  
