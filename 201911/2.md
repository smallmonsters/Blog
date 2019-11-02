###  babel使用
打开[babel官网](https://babeljs.io/setup#installation)，按教程安装babel
* 安装 
```
npm install --save-dev babel-loader @babel/core  @babel/preset-env
```
* 配置rules
```javascript
module: {
  rules: [
    { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
  ]
}
```
* 生成 .babelrc文件
```json
{
  "presets": ["@babel/preset-env"]
}
```
此时webpack已经能正确的将高版本的js语法转为低版本的语法，但是对于新增的api并不会转化，如promise。这时我们就需要其他的插件

### 使用[polyfill](https://babeljs.io/docs/en/babel-polyfill#docsNav)插件，对于babel=>7.4.0该方法弃用 
* 安装
```
 npm install --save @babel/polyfill
```
* 修改 .babelrc 
```javascript

{
  "presets": [
    [
      "@babel/preset-env",
      {
         "useBuiltIns":"usage" // 只转化使用了的API
      }
    ]
  ]
}
```
* 使用 在需要转换的文件里引入polyfill
```javascript
 import "@babel/polyfill";
```
 * @babel/polyfill 和 @babel/preset-env 的关系

@babel/preset-env 中与 @babel/polyfill 的相关参数有 targets 和 useBuiltIns 两个

targets: 支持的目标浏览器的列表

useBuiltIns: 参数有 “entry”、”usage”、false 三个值。默认值是false，此参数决定了babel打包时如何处理@babel/polyfilll 语句。

“entry”: 会将文件中 import‘@babel/polyfilll’语句 结合 targets ，转换为一系列引入语句，去掉目标浏览器已支持的polyfilll 模块，不管代码里有没有用到，只要目标浏览器不支持都会引入对应的polyfilll 模块。

“usage”: 不需要手动在代码里写import‘@babel/polyfilll’，打包时会自动根据实际代码的使用情况，结合 targets 引入代码里实际用到 部分 polyfilll 模块

false: 对 import‘@babel/polyfilll’不作任何处理，也不会自动引入 polyfilll 模块
### 使用[plugin-transform-runtime](https://babeljs.io/docs/en/babel-plugin-transform-runtime)
* 安装 
```
npm install --save-dev @babel/plugin-transform-runtime
```
* 修改 .babelrc
```
{
"presets": [
    [
      "@babel/preset-env"
    ]
  ],
  "plugins": [
    [
      "@babel/plugin-transform-runtime",
      {
        "absoluteRuntime": false,
        "corejs": 3,
        "helpers": true,
        "regenerator": true,
        "useESModules": false
      }
    ]
  ]
}
```
注意上面corejs设置项，不同的值需要不同的依赖包

|corejs的值|需要安装的依赖包|
|---|---|
|false|npm install --save @babel/runtim|
|2|npm install --save @babel/runtime-corejs2|
|3|npm install --save @babel/runtime-corejs3|


