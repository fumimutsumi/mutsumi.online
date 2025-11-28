# 命名规范

**版本**: 1.0  
**最后更新**: 2025-11-28  
**维护者**: fumimutsumi

---

## 📁 文件和文件夹命名规范

### 通用原则
- 使用**小写字母**
- 多个单词用**短横线** `-` 分隔
- 避免使用空格和特殊字符
- 名称应具有描述性

### 具体规范

#### 图片文件 (`assets/images/`)
```

按格式分类存放：
assets/images/
├──ico/                    # 图标文件
│└── favicon.ico
├──png/                    # PNG格式图片
│├── header-logo.png
│├── user-avatar.png
│└── background-image.png
└──jpg/                    # JPG格式图片
├── photo-gallery-1.jpg
└── product-image.jpg

```

**命名规则**：
- 描述内容 + 序号（如需）
- 示例：`contact-button.png`、`banner-image-1.jpg`

#### 样式文件 (`assets/styles/`)
```

当前结构：
assets/styles/
├──main.css                # 主样式文件
├──note-style.css          # 笔记页面样式
└──[页面名]-style.css      # 其他页面样式

未来规划：
assets/styles/
├──base/                   # 基础样式
│├── reset.css
│└── typography.css
├──components/             # 组件样式
│├── buttons.css
│└── cards.css
├──pages/                  # 页面样式
│├── note.css
│└── about.css
└──main.css               # 入口文件

```

**命名规则**：
- 页面样式：`[页面名].css` 或 `[页面名]-style.css`
- 组件样式：`[组件名].css`
- 工具样式：`utils.css` 或 `helpers.css`

#### HTML 页面 (`pages/html/`)
```

pages/html/
├──index.html              # 主页面（已在根目录）
├──about.html              # 关于页面
├──contact.html            # 联系页面
├──notes.html              # 笔记页面
├──projects.html           # 项目展示
└──[功能名].html           # 其他功能页面

```

**命名规则**：
- 使用**单数名词**或**功能描述**
- 简洁明了，避免缩写
- 示例：`gallery.html`、`settings.html`、`user-profile.html`

#### 疑难解答 (`pages/troubleshooting/`)
```

pages/troubleshooting/
├──css-layout-issues.md
├──html-semantic-tags.md
├──git-branching.md
├──flexbox-alignment.html
└──[技术]-[问题描述].[格式]

```

**命名规则**：
- 格式：`[技术领域]-[具体问题].[文件格式]`
- 技术领域：css、html、git、javascript 等
- 具体问题：简短描述核心问题
- 示例：`css-flexbox-center.md`、`git-merge-conflict.md`

> 本规范会随着项目发展和团队需求进行更新
```