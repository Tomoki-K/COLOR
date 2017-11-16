var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: {
        'app': './js/app.jsx',
    },
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: '[name].bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.(js|jsx)$/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react']
                }
            },{
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },{
                test: /\.json$/,
                loader: 'json-loader'
            },
        ]
    },
    stats: {
        colors: true
    },
    devtool: 'source-map'
};
