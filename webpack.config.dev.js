const path = require('path');
const nodeExternals = require('webpack-node-externals')

module.exports = {
    entry: './src/index.ts',
    mode: "development",
    module: {
        rules: [{
            test: /\.ts?$/,
            use: 'ts-loader',
            exclude: /node_modules/
        }]
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