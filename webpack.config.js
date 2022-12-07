const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = (env) => {
    console.log('outputDir: ', env.outputDir);
    return ({
        entry: './src/index.tsx',
        output: {
            path: path.join(__dirname, env.outputDir),
            filename: 'index_bundle.js',
            publicPath: '/'
        },
        module: {
            rules: [
                {
                    test: /\.(tsx|ts)$/,
                    use: 'ts-loader',
                    exclude: /node_modules/
                },
                {
                    test: /\.s[ac]ss$/i,
                    use: ['style-loader', 'css-loader', 'sass-loader'],
                    exclude: /node_modules/
                },
                {
                    test: /\.(png|svg|jpg|jpeg|gif)$/i,
                    type: 'asset/resource',
                },
            ]
        },
        resolve: {
            extensions: ['.tsx', '.ts', '.js'],
            alias: {
                Shared: path.join(__dirname, 'src/shared'),
                Components: path.join(__dirname, 'src/components'),
                src: path.join(__dirname, 'src/'),
                colors: path.join(__dirname, 'src/styles/colors.scss'),
                mixins: path.join(__dirname, 'src/styles/mixins.scss'),
            }
          },
        plugins: [
            new HtmlWebpackPlugin({
                template: './src/index.html'
            })
        ],
        devServer: {
            historyApiFallback: true,
        },
    })
} 