# oni-cli
auto codding for xiaohuoni with umi

CLI for [umi](https://github.com/umijs/umi) .
## 项目结构


```javascript
.
├── bin           //命令配置
├── README.md     //说明文档
├── index.js      //主入口
├── src           //功能文件
├── package.json  //包信息
└── test          //测试用例
```

## Install 
  
  ```javascript
  $ npm i oni-cli -g 


```

## Useage

oni g [type] [name]     

name为 你需要生成的文件名
   
   
   目前支持的type：
   
   * route

oni new [appname]

appname 可选参数 输入则创建一个appname文件夹，为空则表示在当前文件夹下创建app