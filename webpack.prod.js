const { merge } = require('webpack-merge');

const config = require('./webpack.config');

module.exports = merge(config, {
    mode: 'production',
    entry: './src/components/react-hls-player.js',
    devtool: 'source-map',
    externals: {
        'react': 'commonjs react'
    }
});
