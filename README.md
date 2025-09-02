# my-airbnb-react

## 项目简介

本项目是一个基于 React 实现的 Airbnb 风格民宿预订平台前端应用，包含首页、房源列表页、房源详情页等主要页面，支持房源筛选、分页、主题切换等功能，适合前端学习和实战练习。

## 技术栈

- **React 19**：核心 UI 框架
- **React Router v7**：前端路由管理
- **Ant Design 5 / MUI**：UI 组件库
- **styled-components**：CSS-in-JS 方案
- **Zustand**：轻量级状态管理
- **Axios**：网络请求
- **Vite**：前端构建与开发服务器
- **ESLint**：代码规范与检查
- **normalize.css**：样式重置

## 主要功能

- 首页房源推荐、热门房源、折扣房源、向往房源等模块展示
- 房源列表页支持筛选、分页
- 房源详情页展示图片与详细信息
- 响应式布局，适配不同屏幕
- 主题样式统一管理

## 目录结构简述

```
src/
  assets/        // 静态资源（图片、样式、主题等）
  components/    // 通用组件（头部、底部等）
  views/         // 页面级组件（home, entire, detail等）
  store/         // 状态管理（Zustand）
  services/      // 网络请求与接口
  router/        // 路由配置
  utils/         // 工具函数
```

## 快速开始

1. **安装依赖**

   ```bash
   pnpm install
   # 或
   npm install
   # 或
   yarn install
   ```

2. **本地开发启动**

   ```bash
   pnpm dev
   # 或
   npm run dev
   # 或
   yarn dev
   ```

3. **打包构建**

   ```bash
   pnpm build
   # 或
   npm run build
   # 或
   yarn build
   ```

4. **预览构建结果**

   ```bash
   pnpm preview
   # 或
   npm run preview
   # 或
   yarn preview
   ```

## 其他说明

- 本项目仅为前端部分，接口数据可根据实际需求进行对接或 mock。
- 欢迎学习交流，欢迎 star！
