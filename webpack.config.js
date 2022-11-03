const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const WebpackBar = require("webpackbar");
const webpack = require("webpack");

/** @type {import('webpack').Configuration} */
module.exports = {
    mode: "development",
    devtool: "inline-source-map",
    entry: "./src/index.tsx",
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "build"),
    },
    stats: {
        errorDetails: true,
    },
    module: {
        rules: [
            // {
            //     test: /\.tsx?$/,
            //     exclude: /node_modules/,
            //     use: "ts-loader",
            // },
            {
                test: /\.(ts|js)x?$/,
                exclude: /node_modules/,
                use: [{ loader: "babel-loader" }],
            },
        ],
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js"],
    },
    devServer: {
        hot: true,
    },
    plugins: [
        new WebpackBar(),
        new webpack.ProvidePlugin({
            React: "react",
        }),
        new HtmlWebpackPlugin({
            template: "./index.html",
            filename: "index.html",
            title: "Webpack Setup",
        }),
    ],
};
