# school

> 毕设

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

build webpack.base.conf.js是webpack的公共配置；webpack.dev.conf.js是开发时配置；webpack.prod.conf.js是发布时配置；
config 该文件夹中主要都是一些变量的配置，比如index.js，里面会有一些变量的配置，这些变量会被上面的builid文件夹里面的js文件所引用。当然了，index.js中的变量值也是可以自定义改变的。所以说config文件夹和build文件夹都是webpack的相关配置。
node_modules 该文件夹中存放的是项目依赖的包
src 我们平常写的代码就是放到src里面的
static 存放静态资源的地方，放到这里的静态资源会原封不动的输出到dist文件夹中，不会被打包
.eslintrc.js:   配置文件，用于设置如何进行代码检查。  
.gitignore:  表示当我们向服务器上传东西的时候，有些东西是可以不要上传的，可以在该文件中配置哪些东西不上传。
.postcssrc.js: 项目在进行css转换的时候，所需要读取的配置文件。
index.html:  html文件的一个模板，打包的时候会以这个index.html为模板生成一个html文件放入dist文件夹中。
package.json:  主要用于对项目所依赖包的配置和一些指令的设定(scripts属性)。

使用了echarts 百度地图api 高德地图api iview vue全家桶 H5页面额外使用了vant