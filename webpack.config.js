const path = require("path");

const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const mode = process.env.NODE_ENV || "development";
const isDev = mode === "development";
const target = isDev ? "web" : "browserslist";

module.exports = {
    mode,
    target,
    devServer: {
        port: 3000,
    },
    entry: path.resolve(__dirname, "client/entries", "index.ts"),
    output: {
        path: path.resolve(__dirname, "client", "dist"),
        clean: true,
        filename: "[name]-[chunkhash].js",
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "client/entries", "index.html"),
            filename: "index.html",
        }),
        new MiniCssExtractPlugin({
            filename: "[name].css",
            chunkFilename: "[id].css",
        }),
    ],
    module: {
        rules: [
            {
                test: /\.tsx?$/i,
                use: "ts-loader",
                exclude: /node_modules/,
            },
            {
                test: /\.html/i,
                loader: "html-loader",
            },
            {
                test: /\.css/i,
                use: [
                    isDev ? "style-loader" : MiniCssExtractPlugin.loader,
                    {
                        loader: "css-loader",
                        options: {
                            modules: {
                                localIdentName:
                                    "[name]_[local]__[hash:base64:10]",
                            },
                        },
                    },
                    {
                        loader: "postcss-loader",
                        options: {
                            postcssOptions: {
                                plugins: [["postcss-preset-env"]],
                            },
                        },
                    },
                ],
            },
        ],
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js"],
        alias: {
            "@": path.resolve(__dirname, "client"),
        },
    },
};
