module.exports = {
    entry: './app/app.js',
    output: {
        filename: './public/bundle.js'
    },
    module: {
        loaders : [{
            test: /\.js/,
            include: /app/,
            loader: 'babel-loader',
            query: {
                presets: ["react", "es2015"]
            }
        }]
    }
};