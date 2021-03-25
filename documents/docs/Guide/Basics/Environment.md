# 环境变量

项目根目录中的下列文件来指定环境变量：

::: tip 提示
- `.env`: 在所有的环境中被载入
- `.env.[mode]`: 在指定的模式中被载入
:::

环境文件只包含环境变量的“键=值”对：

```bash
VUE_APP_TITLE=MapWhale
```

## 模式

| 文件 | 说明 | 命令 |
| --- | --- | --- |
| .env | 通用配置 | - |
| .env.development | 开发环境 | npm run serve |
| .env.testmode | 测试环境 | npm run build:test |
| .env.production | 生产环境 | npm run build |

## 内置属性

### VUE_APP_TITLE

用于显示默认的页面标题，配合路由 mate.title 属性，最后展示效果：

> MapWhale | 首页

### VUE_APP_API

默认异步请求路径前缀，区分开发环境和生产环，在创建 axios 实例时被引入：

```js{2}
const request = axios.create({
  baseURL: process.env.VUE_APP_BASE_URL,
  timeout: 10000,
});
```

> 代码参考 @/libs/request.js

### VUE_APP_STATIC_URL

静态资源路径前缀，区分开发环境和生产环境，具体用法参考 [静态资源加载组件](/Components/Static.md)。