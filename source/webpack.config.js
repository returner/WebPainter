const path = require('path');
const TSLintPlugin = require('tslint-webpack-plugin');

module.exports = {
    mode : "development",
    entry : {
        "entry":"./index.ts"
    },
    devtool : 'inline-source-map',
    output:{
        filename:"app.js"
    },
    module : {
        rules :[
            {
                test : /\.tsx?$/,
                use : 'ts-loader',
                exclude : /node_modules/
            },
            {
                test : /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test : /\.js$/,
                exclude : /node_modules/,
                loader: "babel-loader",
                options : {
                    presets : [[
                        "env", {
                            targets : {
                                browsers : ["last 2 versions"]
                            }
                        }
                    ]]
                }
            },
            
        ]
    },
    resolve : {
        extensions : [".tsx", ".ts", ".js"]
    },
    plugins: [
        new TSLintPlugin({
            files : ['./app/**/*.ts'],
        })
    ]
};
