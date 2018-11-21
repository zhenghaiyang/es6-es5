# ES6 转换成 ES5

* 为什么会有这个
> 遇见过客户浏览器必须使用IE8,但是IE8无法支持ES6语法.但是我们还需要把现在写的ES6的代码嵌入到客户的老项目里面，不想重新写所以，就弄了一个这个

### 如何使用

* 1) npm install
* 2) webpack
> 需要转换的js放到src目录下面，名字随便起，但是需要和webpack.config.js的入口文件名字相同
webpack.config.js 配置文件可以修改。
