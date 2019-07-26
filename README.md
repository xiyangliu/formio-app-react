This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

Agile Formio App
===============================
此前端app需要连接formio服务器，请参考 https://github.com/xiyangliu/formio/tree/translation 关于如何启动本地formio服务器

开发环境配置
------------------
安装Node.js并下载repo
```
npm install
npm start
```
如果react-formio或formiojs安装报错，请参考[使用 SSH 连接到 GitHub](https://help.github.com/cn/articles/connecting-to-github-with-ssh)

如何连接本地formio.js和react-formio项目（以下本地改动不要checkin!)
-------------------
下载repo https://github.com/xiyangliu/formio.js 和 https://github.com/xiyangliu/react-formio。
至formio.js目录
```
npm install
npm run build
cd lib
npm link formiojs
```
至react-formio目录，将package.json里dependencies的formiojs改为本地lib地址，如
```
"formiojs": "file:../formiojs/lib",
```
运行
```
npm link formiojs
npm install
npm run build
```
至formio-app-react目录，将package.json里dependencies的react-formio改为本地地址，如
```
"react-formio": "file:../react-formio",
```
运行
```
npm link react-formio
npm install
npm start
```

如何验证本地formio.js和react-formio改动
-------------------
连接本地formio.js和react-formio成功后，react-formio的改动可以在app启动下动态加载：
进入react-formio目录
```
npm run build
```

formiojs编译时间较长，需要重启app
- 停止app
- 进入formio.js目录
```
npm run build
```
- 启动app

如何发布改动
-------------------
- formio.js
    - 提交改动至chinese-translation或其他个人分支
    - 以下命令将自动把最新改动发布至chinese-translation-releases分支，不要手动修改此分支
    ```
    npm run build
    npm run deploy
    ```
- reac-formio
    - 提交改动至chinese-translation或其他个人分支
    - 以下命令将自动把最新改动发布至chinese-translation-releases分支，不要手动修改此分支
    ```
    npm run build
    npm run deploy
    ```
- formio-app-react
    - 提交改动至master或其他个人分支
    - 以下命令将自动把最新改动发布至releases分支，不要手动修改此分支
    ```
    npm run deploy
    ```

如何取消连接本地formio.js和react-formio项目
-------------------
如果需要验证改动已正确地发布到github分支，需要取消本地连接

至formio.js目录，运行
```
cd lib
npm unlink
```
至react-formio目录，将package.json里dependencies的formiojs改为初始值，运行
```
npm unlink
rm -rf node_modules/formiojs
npm i formiojs
npm run build
```
至formio-app-react目录，将package.json里dependencies的react-formio改为初始值，运行
```
rm -rf node_modules/react-formio
npm i react-formio
npm start
```

汉化
-------------------
react-formio已基本汉化完成，如有遗漏，可按以上本地连接，发布步骤进行汉化

formio.js的汉化主要集中在以下三个地方
- 控件：https://github.com/xiyangliu/formio.js/tree/chinese-translation/src/components 主要修改xxx.js里的label
- 控件编辑页面：https://github.com/xiyangliu/formio.js/tree/chinese-translation/src/components/_classes 包含编辑页面的所有tab和各种widget的label, tooltip, placeholder
- 其他html模版：目前只需要汉化bootstrap4模版，已尽量汉化完成，如有遗漏，可至https://github.com/xiyangliu/formio.js/tree/chinese-translation/src/templates/bootstrap 修改