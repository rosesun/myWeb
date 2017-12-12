const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry:{
        main:'./src/index'
    },
    output:{
        filename:'[name].js',
        publicPath: 'http://127.0.0.1:8080',
        path:path.resolve('public/dist')
    },

    resolve:{
        extensions: [".ts",".tsx",".js",".json",".styl"],
        alias:{
            "style":path.resolve('src/assets/css')
            }
    },

    module:{
        rules: [
            { test: /\.tsx?$/, exclude: /node_modules/, use: "awesome-typescript-loader"},
            { test: /\.json$/, use:"json-loader"},
            { test: /\.styl$/, use:['style-loader','css-loader','stylus-loader']},
            { enforce: "pre", test: /\.js$/, exclude: /node_modules/,use: "source-map-loader"}
        ]
    },
    devtool: 'inline-source-map',
    devServer:{

    },
    plugins:[
        new HtmlWebpackPlugin({
            filename:'index.html',
            template:path.resolve(__dirname,'./src/index.html')
        })
    ],
    // externals: {
    //     "react": "React",
    //     "react-dom": "ReactDOM"
    // },
};
