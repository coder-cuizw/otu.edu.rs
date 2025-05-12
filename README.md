# Online Tech University - Serbia

This repository contains the source code for the official website of Online Tech University (OTU), located in Serbia.

## 网站概览

这是一个大学官方网站，包含以下内容：

- 首页（轮播图、学校介绍、课程概览等）
- 关于页面（使命愿景、历史、领导团队等）
- 学术页面（课程和专业介绍）
- 招生页面
- 研究页面
- 校园生活页面
- 联系页面

## 技术栈

- HTML5
- CSS3
- JavaScript (ES6+)
- Bootstrap 5
- Font Awesome 图标库

## 项目结构

```
otu.edu.rs/
│
├── index.html              # 网站首页
├── about.html              # 关于页面
├── academics.html          # 学术页面
├── admissions.html         # 招生页面
├── research.html           # 研究页面
├── campus-life.html        # 校园生活页面
├── contact.html            # 联系页面
│
├── css/                    # CSS文件夹
│   └── style.css           # 主样式文件
│
├── js/                     # JavaScript文件夹
│   └── main.js             # 主脚本文件
│
├── images/                 # 图片文件夹
│   ├── campus.jpg
│   ├── students.jpg
│   ├── research.jpg
│   └── ...
│
└── README.md               # 项目说明文件
```

## 本地开发

要在本地运行此网站：

1. 克隆此仓库
```
git clone https://github.com/yourusername/otu.edu.rs.git
cd otu.edu.rs
```

2. 使用Web服务器（如Python的SimpleHTTPServer）启动本地服务
```
python -m http.server
```

3. 在浏览器中访问 `http://localhost:8000`

## 部署

此网站设计为静态网站，可以部署在任何静态托管服务上，如GitHub Pages、Netlify或Vercel。

### GitHub Pages部署步骤

1. 创建一个GitHub仓库
2. 上传所有文件到仓库
3. 转到仓库设置 > Pages
4. 选择分支（通常是main）作为发布源
5. 保存设置后，您的网站将在几分钟内上线

## 图片来源

网站使用的示例图片仅用于展示目的。在实际部署前，请将这些示例图片替换为您拥有版权的实际图片。

## 许可证

[MIT License](LICENSE)

## 联系

如有任何问题或建议，请联系：info@otu.edu.rs 