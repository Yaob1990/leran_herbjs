# herbjs

官方文档：https://www.yuque.com/herbjs/doc

## 本项目目的

让初学 herbjs 的用户，迅速掌握 herbjs 的数据流，熟悉其开发方式。
整理了三种常用的数据流方式：

1. 页面级别数据流
2. 页面和 store 数据交互
3. 页面和组件数据传递（父子）

### 快速开始

```
$ npm run init
```

### 命令介绍

#### 初始化

```
$ npm run init
```

#### 快速创建模版代码

```
# 快速新建页面（创建完后的代码在根目录）
$ npm run create:page

# 快速新建组件（创建完后的代码在根目录）
$ npm run create:component
```

#### 本地研发

```
# 启动文件监听服务
$ npm run dev

# 本地构建
$ npm run build

# 清理产物目录
$ npm run clean
```

#### 语法检查

```
# 检查所有 ts/less 文件语法
$ npm run lint

# 检查所有 ts 文件语法
$ npm run lint：ts

# 检查所有 less 文件语法
$ npm run lint

# 修复所有 ts 文件语法问题
$ npm run format:ts

# 格式化代码风格
$ npm run format:prettier
```

#### 测试

```
# 检查所有 ts/less 文件语法、跑 jest 测试同时产出覆盖率文件
$ npm run ci

# 跑 jest 测试
$ npm run test

# 跑 jest 测试（监听文件变化）
$ npm run test:watch

# 跑 jest 测试同时产出覆盖率文件
$ npm run test:cov
```
