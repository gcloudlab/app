<p align="center"><img width="40%" align="center" src="https://img-yesmore.vercel.app/gcloud/gcloudx.png"></p>

<div align="center">
    <img src="https://img.shields.io/github/stars/yesmore/gcloud-app.svg?logo=github&style=flat-square" alt="star"/>
	<img src="https://img.shields.io/github/license/yesmore/gcloud-app?style=flat-square" alt="GPL"/>
</div>

## 关于 GCloud 云盘

`GCloud` 是使用 Vue3 + Go 开发的云盘应用，具备云盘的基本功能，且开源免费。

> 更新：为方便开发时调试，已部署后端接口供开发者本地调试使用，无需关心跨域等配置，直接上手开发前端；可以使用此接口开发其他项目，不保障稳定性~
> 
> 接口地址：[https://gcloud-3224266014.b4a.run](https://gcloud-3224266014.b4a.run)
>
> 测试账号：`test_user`， 密码: `123456`

> **Warning**
> 禁止使用此接口从事违法犯罪活动

附云盘后端仓库：[https://github.com/gcloudlab/disk-server](https://github.com/gcloudlab/disk-server)

## 应用截图

<img  src='https://raw.githubusercontents.com/yesmore/img/main/gcloud/gcloud-app.png'/>


## 功能特性

- 🎯 支持邮箱注册，安全保障
- 🦄 注册即赠1G免费容量
- 🚀 文件秒传/下载/分享/转存/软删除...
- 😎 文件预览功能 (Markdown/文本/视频/音频/图片/office等)
- 🤖 社区论坛功能 (发帖/评论/点赞/收藏)
- ✨ 纯 Go 开发 (后端)
- 👻 用户隐私安全
- 🎨 **不限速** 

> 关于容量：注册即赠1G容量，暂无升级容量方案（基于腾讯云对象存储 COS，详见 [COS 开通方法](https://github.com/gcloudlab/disk-server/blob/master/docs/README.md#%E5%AF%B9%E8%B1%A1%E5%AD%98%E5%82%A8-cos-%E9%85%8D%E7%BD%AE)）。此项目仅供学习使用。祝您体验愉快~

## 开发者须知

### Install & Run

```bash
git clone https://github.com/gcloudlab/app.git
```

**修改环境变量**

启动前，须创建 `.env.development` 和 `.env.production` 文件，内容参考 `.env.example`。

**本地启动**

```bash
yarn 
yarn dev
```

### 开发手册

详见 [GCloud 开发手册](https://github.com/gcloudlab/disk-server/tree/master/docs).

## 共建者

<div style="display:flex">
<a href='https://github.com/yesmore'>
 <code><img width='40px' src='https://avatars.githubusercontent.com/u/89140804?v=4' alt=''/></code></a>
&nbsp;
<a href='https://github.com/tinyflake'>
 <code><img width='40px' src='https://avatars.githubusercontent.com/u/87841684?v=4' alt=''/></code></a>
</div>

## 请我吃辣条

<p align="center">
  <table border="0">
    <tr>
        <th  align="center"><img width='200px' src='https://raw.githubusercontents.com/yesmore/img/master/img/81E3D2890C073A52E045D9E49457C3ED.jpg' alt='wx'/> <p>微信</p> </th>
        <th align="center"><img width='200px' src='https://raw.githubusercontents.com/yesmore/img/master/img/849E2934286ACA620B988C523AEBC92B.jpg' alt='zfb'/> <p>支付宝</p> </th>
    </tr>    
  </table>
</p>


## License

GCloud is open source software licensed as [GPL](LICENSE).


---

最后，晚安我的马马们。
