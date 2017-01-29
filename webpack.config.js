var webpackConfig = {
    debug: true,
    devtool: 'source-map',
    output: {
        filename: 'app.js',
        sourceMapFilename: 'app.js.map'
    },
    module: {
        loaders: [
            {
                test: /\.html$/,
                loader: 'html'
            },
            {
                test: /\.json$/,
                loader: 'json'
            }
        ]
    },
    plugins: []
};

module.exports = webpackConfig;