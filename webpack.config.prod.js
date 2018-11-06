const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const UglifyWebpackPlugin = require('uglifyjs-webpack-plugin');
const nodeExternals = require('webpack-node-externals')

module.exports = {
    entry: './src/index.ts',
    mode: "production",
    module: {
        rules: [{
            test: /\.ts?$/,
            use: 'ts-loader',
            exclude: /node_modules/
        }]
    },
    plugins: [
        new CleanWebpackPlugin(['dist'])
    ],
    optimization:{
        minimizer:[new UglifyWebpackPlugin()]
    },
    resolve: {
        extensions: ['.ts', '.js']
    },
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, 'dist')
    },
    target:'node',
    externals:[nodeExternals()],
    node:{
        __dirname:false,
        __filename:false
    }
};