'use strict';
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const webpack = require('webpack');
module.exports={
    // cheap-module-source-map - 不带列映射(column-map)的 SourceMap，将加载的 Source Map 简化为每行单独映射。
    // 这样可以加快打包速度。
    devtool:'cheap-module-source-map',
    entry: path.resolve(__dirname, './src/client/index.js'),
    output:{
        path:path.resolve(__dirname,'dist'),
        filename:'bundle.js',
    },
    module: {
        rules: [
            { test: /\.js$/, exclude: [path.resolve(__dirname, './node_modules')], include: [path.resolve(__dirname, './src')],loader: "babel-loader" }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            filename: path.resolve(__dirname,'dist/index.html'),
            template: path.resolve(__dirname, 'template/template1.html')
        }),
        new webpack.HotModuleReplacementPlugin()
    ],
    // devServer只能识别contentBase中的index.html 要是没有这个,它就把该目录下的全部文件显示出来
    // 注意如果使用webpack-dev-Server webpack输出的js和HtmlWebpackPlugin输出的模版文件应该放一起，不然会
    // 由于服务器运行后路径改变而导致模版文件中的js文件路径错误无法加载的问题。
    // !！注意webpack-dev-Server会在publicPath定义的文件夹下生成output指定的文件，但是这些我们都看不到，都在内存中，通过
    // 浏览器网站地址可以访问到
    // webpack-dev-Server就是通过改变内存中的这两个文件来实现动态刷行网页的。
    // 写热加载的原则是1.contentBase定义的路径就是webpack-dev-Server开启的服务的全部，一定要在这个根目录下存放index.html文件
    // 否则服务器不能直接加载index.html文件。并且不能根据内存中改变的js文件实时刷新
    // 2.保证index.html中引用的js文件的路径恰好是能够访问到webpack-dev-Server在publicPath路径下生产的。js文件，这样才能实现动态刷新
    devServer:{
        contentBase: path.resolve(__dirname,'./dist'),
        port:9000,
        hot:true,
        open:true,
    }
}

