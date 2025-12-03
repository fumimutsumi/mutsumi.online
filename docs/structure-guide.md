# 文件结构规范说明

**版本**: 1.1  
**最后更新**: 2025-12-1  
**维护者**: fumimutsumi

---

## 根目录文件

### README.md
- **位置**: 根目录
- **格式**: Markdown
- **用途**: 项目首页和说明文档

### .gitignore
- **位置**: 根目录
- **用途**: 指定 Git 忽略跟踪的文件和文件夹

### .gitattributes
- **位置**: 根目录  
- **用途**: 配合 Git LFS 管理大文件

### index.html
- **位置**: 根目录
- **用途**: 项目默认入口页面

---

## 文件夹结构

### assets/
存放静态资源文件

```

assets/
├──styles/          # CSS 样式资源
└──images/          # 图片文件
    ├── ico/         # .ico 格式图标
    ├── jpg/         # .jpg 格式图片
    └── png/         # .png 格式图片

```

### docs/
存放项目规范和文档

```

docs/
├──images/          # 文档用到的图片文件
├──copyright-notice.md          # 项目版权声明文档
├──structure-guide.md          # 文件结构规范文档
└──naming-convention.md          # 命名规范文档

```

### pages/
存放所有页面文件

```

pages/
├──html/            # HTML 页面资源
├──mini-project/    # 小项目文件
└──troubleshooting/ # 疑难解答文档(markdown文件夹下为修改版本，html文件夹下为正式版本)

```

---

## 使用说明

1. 所有路径均从根目录开始计算
2. 文件命名使用英文符号，避免兼容性问题
3. 各文件夹按功能明确分类，便于维护

> 本规范会根据项目发展适时更新。更新此文档请一并更新html文件。