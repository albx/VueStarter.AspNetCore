"use strict";

const path = require("path");
const outputDir = "./wwwroot";

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
        filename: "js/[name].js"
    },
    module: {
        rules: [
            {
                test: /\.js?$/,
                loader: "babel-loader"
            }
        ]
    }
};