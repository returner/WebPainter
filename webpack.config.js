const path = require('path');
const TSLintPlugin = require('tslint-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    mode : "development",
    entry : {
        "entry":"./app/index.ts"
    },
    output : {
        path : path.resolve(__dirname, 'docs')
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
        // new CopyWebpackPlugin([
        //     {
        //         from : './app/**/*',
        //     }
        // ]),
        new TSLintPlugin({
            files : ['./app/**/*.ts'],
        })
    ]
};
