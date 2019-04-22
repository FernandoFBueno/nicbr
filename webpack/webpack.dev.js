var webpackMerge = require('webpack-merge');
var commonConfig = require('./webpack.common.js');

module.exports = webpackMerge(commonConfig, {
    "devServer": {
        "port": 80,
        "proxy": {
            "/urlColletor": {
                "target": 'http://fernandobueno.tk',
                "pathRewrite": { '^/urlColletor': '' },
                "changeOrigin": false,
                "secure": true
            }
        }
    }
});
