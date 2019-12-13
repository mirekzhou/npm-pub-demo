const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const htmlWebpackPlugin = new HtmlWebpackPlugin({
	template: path.join(__dirname, "./src/index.html"),
	filename: "./index.html"
});

console.log('======================================')
console.log(path.join(__dirname, "./src/app.js"));
console.log('======================================')

module.exports = {
    entry: path.join(__dirname, "./src/app.js"),
    output: {
		path: path.join(__dirname, "dist"),
		filename: "bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: "babel-loader",
                exclude: /node_modules/
            }
        ]
    },
    plugins: [htmlWebpackPlugin],
    resolve: {
        extensions: ['.js', '.jsx']
    },
    devServer: {
        port: 3001,
        open: true
    }
};