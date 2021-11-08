const { merge } = require('webpack-merge');

const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const commonConfig = require('./webpack.common');
const packageJson = require('../package.json');

const devConfig ={
    mode: 'development',
    devServer:{
        port: 8081,
        historyApiFallback:{
            index: '/index.html'
        },
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'microFrontEnd1',
            filename: 'remoteEntry.js',
            exposes:{
                './MircoFrontEnd1Index': './src/routes',
            },
            shared: packageJson.dependencies,
        })
    ],
};

module.exports = merge(commonConfig, devConfig);