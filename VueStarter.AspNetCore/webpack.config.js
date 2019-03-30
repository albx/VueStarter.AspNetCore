"use strict";

const path = require("path");
const outputDir = "./wwwroot";

const { VueLoaderPlugin } = require('vue-loader');

const isDevMode = process.env.NODE_ENV !== 'production';

module.exports = {
    mode: isDevMode ? "development" : "production",
    resolve: {
        modules: ['./node_modules'],
        extensions: ['.js'],
        alias: {
            "@": path.resolve(__dirname, "Client")
        }
    },
    entry: {
        "main-client": "./Client/main.js"
    },
    output: {
        path: path.resolve(__dirname, outputDir),
        publicPath: "/",
        filename: "js/[name].js"
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                include: /Client/,
                loader: 'vue-loader'
            },
            {
                test: /\.js?$/,
                loader: "babel-loader"
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin()
    ]
};