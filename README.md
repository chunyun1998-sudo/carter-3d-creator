# Jack 3D Creator — 3D 创作者个人作品集网站

![License](https://img.shields.io/badge/license-MIT-blue)
![React](https://img.shields.io/badge/React-19-61DAFB)
![Vite](https://img.shields.io/badge/Vite-8-646CFF)
![TypeScript](https://img.shields.io/badge/TypeScript-6-3178C6)

A single-page portfolio website for a 3D creator, showcasing personal brand, services and projects. Content is fully driven by a JSON config file. / 为 3D 创作者打造的单页作品集网站，展示个人品牌、服务与作品，内容全部由 JSON 配置文件驱动。

---

## 中文说明

### 项目简介

这是 3D 创作者 Jack 的个人作品集网站。整站为单页滚动布局，包含 Hero 首屏、关于我、服务列表、项目展示和联系入口五个区块，以及一条滚动的作品展示跑马灯。网站内容不写死在组件里，而是集中放在 `src/data/site-config.json`，改文案、换图片、调主题色都不需要动代码。

### 功能特性

- 单页滚动式布局，Hero、About、Services、Projects、Contact 五大区块
- 全部内容由 `site-config.json` 配置驱动，改内容不改代码
- 双排滚动跑马灯作品墙
- Framer Motion 滚动入场动画与磁吸按钮交互
- 深色主题，移动端响应式适配

### 技术栈

| 依赖 | 用途 |
| --- | --- |
| React 19 | UI 框架 |
| Vite 8 | 构建工具 |
| TypeScript | 类型安全 |
| Tailwind CSS 3 | 样式 |
| Framer Motion | 动画 |
| lucide-react | 图标 |
| oxlint | 代码检查 |

### 快速开始

```bash
npm install        # 安装依赖
npm run dev        # 本地开发，默认 http://localhost:5173
npm run build      # 构建生产包到 dist/
npm run preview    # 本地预览生产包
npm run lint       # 运行 oxlint 代码检查
```

### 项目结构

```
├── .github/workflows/deploy.yml   # GitHub Pages 自动部署
├── src/
│   ├── components/                # 各区块组件
│   │   ├── HeroSection.tsx
│   │   ├── AboutSection.tsx
│   │   ├── ServicesSection.tsx
│   │   ├── ProjectsSection.tsx
│   │   ├── MarqueeSection.tsx
│   │   ├── ContactButton.tsx
│   │   └── ...
│   ├── data/
│   │   └── site-config.json       # 站点内容配置（核心）
│   ├── App.tsx
│   └── main.tsx
└── index.html
```

### 内容配置

站点所有文案、图片和主题色都定义在 `src/data/site-config.json`：

- `site` — 站点标题
- `theme` — 背景、文字、标题渐变等颜色
- `hero` — 首屏文案、导航链接、头像
- `marquee` — 跑马灯两行的作品动图 URL
- `about` — 关于我区块的文案与装饰图
- `services` — 服务列表（3D 建模、渲染、动效、品牌、网页设计）
- `projects` — 项目展示列表（分类、名称、图片）

改完保存即可，开发服务器会热更新。

### 部署

项目已配置 GitHub Actions（`.github/workflows/deploy.yml`），每次推送到 `main` 分支会自动构建并部署到 GitHub Pages。部署前需在仓库 Settings > Pages 中将 Source 设置为 GitHub Actions。

### 许可证

[MIT](./LICENSE)

---

## English

### Overview

A single-page portfolio website built for Jack, a 3D creator. The page features five sections: hero, about, services, projects and contact, plus a scrolling marquee of showcase works. All content lives in `src/data/site-config.json`, so updating copy, swapping images or changing the theme colors requires no code changes.

### Features

- Single-page scroll layout with Hero, About, Services, Projects and Contact sections
- Content driven by `site-config.json` — edit content without touching code
- Double-row scrolling marquee showcase
- Framer Motion scroll animations and magnetic button interactions
- Dark theme with responsive mobile layout

### Tech Stack

| Dependency | Purpose |
| --- | --- |
| React 19 | UI framework |
| Vite 8 | Build tool |
| TypeScript | Type safety |
| Tailwind CSS 3 | Styling |
| Framer Motion | Animation |
| lucide-react | Icons |
| oxlint | Linting |

### Getting Started

```bash
npm install        # install dependencies
npm run dev        # local dev server at http://localhost:5173
npm run build      # production build to dist/
npm run preview    # preview the production build
npm run lint       # run oxlint
```

### Project Structure

```
├── .github/workflows/deploy.yml   # GitHub Pages auto-deploy
├── src/
│   ├── components/                # section components
│   ├── data/
│   │   └── site-config.json       # site content config (core)
│   ├── App.tsx
│   └── main.tsx
└── index.html
```

### Content Configuration

All copy, images and theme colors are defined in `src/data/site-config.json`:

- `site` — site title
- `theme` — background, text, heading gradient colors
- `hero` — hero copy, nav links, portrait
- `marquee` — showcase GIF URLs for both marquee rows
- `about` — about section copy and decorations
- `services` — service list (3D modeling, rendering, motion, branding, web design)
- `projects` — project showcase list (category, name, images)

Save the file and the dev server hot-reloads the changes.

### Deployment

A GitHub Actions workflow (`.github/workflows/deploy.yml`) builds and deploys the site to GitHub Pages on every push to `main`. Before first deploy, set Settings > Pages > Source to GitHub Actions.

### License

[MIT](./LICENSE)
