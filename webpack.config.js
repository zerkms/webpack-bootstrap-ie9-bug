module.exports = {
    entry: {
        app: './src/app.js'
    },
    output: {
        path: './assets',
        filename: 'js/bundle.js',
        publicPath: '/assets/'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel'
            },
            {
                test: /\.css$/,
                loader: 'style!css'
            },
            {
                test: /\.eot(\?v=.*)?$/,
                loader: 'file-loader?name=fonts/[hash].[ext]'
            },
            {
                test: /\.woff2?(\?v=.*)?$/,
                loader: 'url-loader?limit=10000&minetype=application/font-woff&name=fonts/[hash].[ext]'
            },
            {
                test: /\.ttf(\?v=.*)?$/,
                loader: 'file-loader?name=fonts/[hash].[ext]'
            },
            {
                test: /\.svg(\?v=.*)?$/,
                loader: 'file-loader?name=svg/[hash].[ext]'
            }
        ]
    }
};

