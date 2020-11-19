const path = require('path');
// entry -> output
// see webpack.js.org
// > Documentation
// >> Entry and Context
// >>> entry


// console.log(__dirname);

const ExtractTextPlugin = require('extract-text-webpack-plugin');

// according to webpack do, we can have a function returning the export
module.exports = (env) => {
    //console.log('env', env);
    const isProduction = env === 'production';
    const CSSExtract = new ExtractTextPlugin('styles.css');

    return {
        entry: './src/app.js',
        output: {
            path: path.join(__dirname, 'public'),
            filename: 'bundle.js'
        },
        module: {
            rules: [{
                loader: 'babel-loader',
                test: /\.js$/,
                exclude: /node_modules/
            },{
                test: /\.s?css$/,
                use: CSSExtract.extract({
                    use: [
                        {
                        	loader: 'css-loader',
                        	options: {
                        		sourceMap: true
                        	}
                        },
                        {
                        	loader: 'sass-loader',
                        	options: {
                        		sourceMap: true
                        	}
                        }
                    ]
                })
            }]
        },
        plugins: [
            CSSExtract
        ],
        devtool: isProduction ? 'source-map' : 'inline-source-map',
        devServer: {
            contentBase: path.join(__dirname, 'public'),
            historyApiFallback: true
        }
    };
};



