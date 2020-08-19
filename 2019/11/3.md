### 一、[官网](https://webpack.js.org/loaders/url-loader/)

### 二、作用
使用url-loader可以将文件转换为base64 URI。

### 三、 安装
npm install url-loader --save-dev

### 四、配置
```
//e.g
module.exports = {
  module: {
    rules: [
      {
        test: /\.(png|jpg|gif)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
            },
          },
        ],
      },
    ],
  },
};
```
### 五、参数配置（Options配置）

| name | type | default  | desc  |
|---|---|---|---|
| fallback | String  | 'file-loader' | 指定当目标文件的大小超过limit选项中设置的限制时使用的什么laoder处理文件，默认使用file-loader，需要手动安装 |
 | limit | Number\|Boolean\|String  | 'undefined' | 指定一个字符或在数字，当文件大小大于等于该值时，使用fallback 指定的laoder处理文件，默认无限制，指定为false，则不转化为base64 |
| mimetype | String  | 'file extension' | 设置要转换文件的MIME类型。如果未指定，则文件扩展名将用于查找MIME类型。打包为base64文件是，修改base64的data值，eg：data:text/plain;base64, |