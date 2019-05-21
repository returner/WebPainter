var webpack = require('webpack');
const path = require('path');
const TSLintPlugin = require('tslint-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    mode : "development",
    //mode : "production",
    entry : {
        "entry":"./src/app/index.ts"
    },
    devtool : 'inline-source-map',
    output:{
        filename:"app.js",
        path : path.resolve(__dirname, 'docs/app'),
        publicPath : "/app"
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
            {
                test: /\.(scss)$/,
                use: [
                  {
                    // Adds CSS to the DOM by injecting a `<style>` tag
                    loader: 'style-loader'
                  },
                  {
                    // Interprets `@import` and `url()` like `import/require()` and will resolve them
                    loader: 'css-loader'
                  },
                  {
                    // Loader for webpack to process CSS with PostCSS
                    loader: 'postcss-loader',
                    options: {
                      plugins: function () {
                        return [
                          require('autoprefixer')
                        ];
                      }
                    }
                  },
                  {
                    // Loads a SASS/SCSS file and compiles it to CSS
                    loader: 'sass-loader'
                  }
                ]
              }
        ]
    },
    resolve : {
        extensions : [".tsx", ".ts", ".js"]
    },
    plugins: [
        new TSLintPlugin({
            files : ['./src/app/**/*.ts'],
        }),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            Util: 'exports-loader?Util!bootstrap/js/dist/util'
        })
        // new CopyWebpackPlugin([
        //     {
        //         from : './src/**/*.html',
        //         to: './',
        //         force : true,
        //         toType : 'glob'
        //     }
        // ])
    ]
};
