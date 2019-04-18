var webpackMerge = require('webpack-merge');
var commonConfig = require('./webpack.common.js');

module.exports = webpackMerge(commonConfig, {
    "devServer": {
        "port": 80,
        "proxy": {
            "/urlGitHub": {
                "target": 'https://github.com',
                "pathRewrite": { '^/urlGitHub': '' },
                "changeOrigin": false,
                "secure": true
            }
        }
    }
});
