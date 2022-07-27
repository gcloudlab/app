<p align="center"><img width="60%" align="center" src="./src/assets/gcloud.png"></p>

<p align="center">😎 简单 & 免费的开源云盘</p>

<div style='' align="center">
    <img src="https://img.shields.io/github/stars/yesmore/gcloud-app.svg?logo=github&style=flat-square" alt="star"/>
	<img src="https://img.shields.io/github/license/yesmore/gcloud-app?style=flat-square" alt="GPL"/>
</div>

## 关于 GCloud

> 项目开发中

`GCloud` 是使用 Vue3 + [Go](https://golang.org/)（后端）开发的云盘应用，具备云盘的基本功能，且开源免费。另外，`GCloud` 是作为学习 Go 语言的项目而存在，所以不具备大容量存储功能（存储上限为 200MB），开发者可以 `fork` 此项目并自行开通无上限的存储功能（基于腾讯云对象存储COS，详见 [COS开通方法]([/dev/README.md](https://github.com/yesmore/gcloud-server/blob/master/dev/README.md))）共个人使用、学习等。祝您体验愉快~

## 功能特性

- 🚀 文件秒传/下载
- 🎯 支持邮箱注册，安全保障
- ✨ 纯 Go 开发（后端）
- 🎨 **不限速**

详见文档 [API](/docs/API.md).

### TODOs

- [ ] 增加文件分享功能
- [ ] 增加文件分享链接功能
- [ ] 公共文件夹
- [ ] defineAsyncComponent优化

## 开发者须知

### 技术架构

- 后台：go-zero(Monolithic Service)
- 数据库：MySQL、Redis
- 文件存储：腾讯云 COS

### 开发环境

Windows 11 with vscode，go module

### 开发手册

详见 [GCloud开发手册](/dev/README.md).

## License

GCloud is open source software licensed as [GPL](LICENSE)
