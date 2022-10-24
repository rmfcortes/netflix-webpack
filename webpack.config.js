const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = (env) => {
    console.log('outputDir: ', env.outputDir);
    return ({
        entry: './src/index.tsx',
        output: {
            path: path.join(__dirname, env.outputDir),
            filename: 'index_bundle.js'
        },
        module: {
            rules: [
                {
                    test: /\.tsx$/,
                    use: 'ts-loader',
                    exclude: /node_modules/
                }
            ]
        },
        resolve: {
            extensions: ['.tsx', '.ts', '.js'],
          },
        plugins: [
            new HtmlWebpackPlugin({
                template: './src/index.html'
            })
        ]
    })
} 