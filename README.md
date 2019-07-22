# Bug描述
- 权限路由: `routes/PrivateRoutes.tsx`
- 配置于: `pages/index.tsx`顶部注释内
- 生成的`pages/.umi/routes.js`文件内, 第28行, 可看到:
```
        Routes: [require('../../../routes/PrivateRoutes.tsx').default],
```
这个路径多了一个`../`, 所以造成无法编译成功
