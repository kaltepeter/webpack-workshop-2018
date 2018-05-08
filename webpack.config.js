const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const modeConfig = env => require(`./build-utils/webpack.${env}`)(env);
const webpackMerge = require('webpack-merge');

module.exports = ({mode, presets} = {mode: 'production', presets: []}) => {
    console.log(mode);
    return webpackMerge({
            mode,
            module: {
                rules: [
                    {
                        test: /\.jpe?g$/,
                        use: [{
                            loader: 'url-loader',
                            options: {
                                limit: 5000
                            }
                        }]
                    }
                ]
            },
            output: {
                filename: "bundle.js"
            },
            plugins: [
                new HtmlWebpackPlugin(), new webpack.ProgressPlugin()
            ]
        },
        modeConfig(mode));
};
