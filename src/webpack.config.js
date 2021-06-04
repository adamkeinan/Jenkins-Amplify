// webpack.config.js
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/dist/plugin').default;
const WebpackBar = require('webpackbar');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const babelConfig = {
    cacheDirectory: true,
    presets: [
        [
            '@babel/preset-env',
            {
                targets: {
                    browsers: [
                        'last 2 versions',
                        'Firefox ESR',
                        '> 1%',
                        'ie = 10',
                        'iOS >= 8',
                        'Android >= 4',
                    ],
                },
            },
        ],
    ],
    plugins: [
        [
            'babel-plugin-import',
            {
                libraryName: 'ant-design-vue',
                libraryDirectory: '', // default: lib
                style: true,
            },
        ],
        [
            '@vue/babel-plugin-jsx', { mergeProps: false, enableObjectSlots: false }],
        '@babel/plugin-proposal-optional-chaining',
        '@babel/plugin-transform-object-assign',
        '@babel/plugin-proposal-object-rest-spread',
        '@babel/plugin-proposal-export-default-from',
        '@babel/plugin-proposal-export-namespace-from',
        '@babel/plugin-proposal-class-properties',
    ],
};

/** @type {import('webpack').Configuration} */

module.exports = {
    mode: 'development',
    entry: {
        app: './examples/index.js',
    },
    stats: {
        warningsFilter: /export .* was not found in/,
    },
    module: {
        rules: [
            {
                test: /\.md$/,
                loader: 'raw-loader',
            },
            {
                test: /\.(vue)$/,
                loader: 'vue-loader',
            },
            {
                test: /\.s(c|a)ss$/,
                use: [
                    'vue-style-loader',
                    'css-loader',
                    {
                        loader: 'sass-loader',
                        // Requires sass-loader@^7.0.0
                        options: {
                            implementation: require('sass'),
                            indentedSyntax: true // optional
                        },
                        // Requires >= sass-loader@^8.0.0
                        options: {
                            implementation: require('sass'),
                            sassOptions: {
                                indentedSyntax: true // optional
                            },
                        },
                        test: /\.(js|jsx)$/,
                        loader: 'babel-loader',
                        exclude: /pickr.*js/,
                        options: babelConfig,
                    },
                    {
                        test: /\.(png|jpg|gif|svg)$/,
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]?[hash]',
                        },
                    },
                    {
                        test: /\.css$/,
                        use: [
                            {
                                loader: MiniCssExtractPlugin.loader,
                                options: {},
                            },
                            'css-loader',
                        ],
                    },
                
                ],
            },
        ],
        exclude: /node_modules/,
    },
},
    devServer: {
    historyApiFallback: {
        rewrites: [{ from: /./, to: '/index.html' }],
    },
    disableHostCheck: true,
        hot: true,
            open: true,
  },
devtool: 'inline-cheap-module-source-map',
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].css',
        }),
        new HtmlWebpackPlugin({
            template: 'examples/index.html',
            filename: 'index.html',
            inject: true,
        }),
        new VueLoaderPlugin(),
        new WebpackBar(),
    ],
};