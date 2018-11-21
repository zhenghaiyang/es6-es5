const ParallelUglifyPlugin = require('webpack-parallel-uglify-plugin');
module.exports = {
    entry: './src/index.js',  //入口文件位置和名字
    output: {  //输出文件路径设置
        path: __dirname,
        filename: './dist/index.min.js',
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
        }]
    },
    plugins:[
      new ParallelUglifyPlugin({
         cacheDir: '.cache/',
         uglifyJS:{
           output: {
             comments: false, // 删除所有注释
             beautify: true
           },
           compress: {
             drop_console: false, // 删除console
             warnings: true
           }
         }
       })]
}
