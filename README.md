# Portfolio Site

这是一个可直接部署的静态个人作品集站，放在 `portfolio-site/` 目录下，不依赖前端框架。

## 文件

- `index.html`：主页内容
- `en.html`：英文主页
- `resume.html`：中文简历页，可浏览器打印导出 PDF
- `resume-en.html`：英文简历页
- `404.html`：自定义错误页，适合 GitHub Pages / Cloudflare Pages
- `.nojekyll`：关闭 GitHub Pages 的 Jekyll 处理
- `robots.txt`：基础搜索引擎抓取规则
- `cases/`：中英文案例详情页，现已包含
- `global-account-opening*`：机构全球开户流程与 CRM 审核系统
- `ka-portal*`：KA Portal 机构资产管理平台
- `web3-platform*`：Web3.0 机构虚拟资产交易平台
- `astro-bank-desktop*`：天星银行桌面端重构
- `design-assets*`：设计资产沉淀
- `design-enablement*`：设计赋能与 AI 协同
- `personal-accumulation*`：个人沉淀与 5W2H 方法
- `personal-model*`：个人模型与量化成果
- `styles.css`：样式
- `script.js`：滚动出现动画
- `CNAME.example`：自定义域名示例

## 当前站点状态

- 这是纯静态站，不依赖 Node、构建脚本或前端框架
- Cloudflare Pages 可以按“静态 HTML”方式直接部署
- GitHub Pages 可以直接从分支根目录发布
- 站点已经包含 `.nojekyll` 和 `404.html`，对 GitHub Pages 更友好

## 最推荐的免费上线方式

优先建议：Cloudflare Pages

原因：

- 纯静态站可以直接部署，不需要额外构建流程
- 默认会分配一个 `*.pages.dev` 子域名
- 后续如果你绑定自定义域名，Cloudflare 的路径更顺
- 预览部署、回滚和域名管理体验通常比 GitHub Pages 更直接

如果你已经把作品集代码放在 GitHub 仓库里，并且只想要最少步骤，也可以直接用 GitHub Pages。

### 方案 1：Cloudflare Pages

1. 新建一个专门放作品集的 Git 仓库。
2. 把 `portfolio-site/` 里的文件放到仓库根目录，或者保留 `portfolio-site/` 作为子目录。
3. 进入 Cloudflare Pages，选择导入 Git 仓库。
4. 如果你不需要构建步骤，按 Cloudflare 官方静态 HTML 指南，把 Build command 设为 `exit 0`。
5. 如果文件在仓库根目录，Build output directory 用 `/`；如果你保留 `portfolio-site/` 目录，就填 `portfolio-site`。
6. 首次部署成功后，会得到一个免费的 `*.pages.dev` 地址。

### 方案 2：GitHub Pages

1. 新建 GitHub 仓库。
2. 把 `portfolio-site/` 内文件放到仓库根目录，或者改成放在 `/docs` 目录。
3. 进入仓库 `Settings` -> `Pages`。
4. `Source` 选择 `Deploy from a branch`。
5. Branch 选择你的发布分支，目录选 `/(root)` 或 `/docs`。
6. 保存后，GitHub 会生成一个 `github.io` 地址。

## 自定义域名怎么接

- Cloudflare Pages：
  - 如果你接的是子域名，可以把它的 `CNAME` 指向你的 `*.pages.dev`
  - 如果你接的是主域名，官方要求把域名托管到 Cloudflare Zone，再由 Cloudflare 配置 nameserver 和证书
- GitHub Pages：
  - 仓库里可以放 `CNAME` 文件，但 GitHub 官方说明，是否启用自定义域名仍需要在仓库设置里配置
  - 接入后还需要在 DNS 提供商侧补对应记录

## 发布前检查清单

1. 确认邮箱、微信、手机号和 Figma 源文件链接都已更新为最终版本
2. 如果你有正式 PDF 简历，决定是否把简历页入口替换为真实 PDF 下载链接
3. 如果你确认域名，复制 `CNAME.example` 为 `CNAME` 并写入最终域名
4. 上线后，手动点一遍首页、简历页和 8 个详情页
5. 如果要让搜索引擎更完整抓取，等最终域名确定后再补 `sitemap.xml`

## “免费域名”怎么理解

- 如果你接受免费子域名：`pages.dev`、`vercel.app`、`netlify.app`、`github.io` 都可以立即用。
- 如果你想要更像个人品牌域名的免费地址，可以申请社区子域名，例如 `yourname.is-a.dev` 或 `yourname.eu.org`，再把它绑定到上面的免费托管平台。
- 如果你要的是 `yourname.com` 这种独立顶级域名，通常需要付费，长期稳定的真正免费方案基本不现实。

## 需要你后续确认的内容

- 如果你有现成 PDF，可以把简历页入口替换为真实 PDF 地址
- 如果你已经有真实域名，把 `CNAME.example` 改名为 `CNAME`，并写入你的域名

## 官方文档

- Cloudflare Pages 静态 HTML 部署：
  https://developers.cloudflare.com/pages/framework-guides/deploy-anything/
- Cloudflare Pages 自定义域名：
  https://developers.cloudflare.com/pages/configuration/custom-domains/
- GitHub Pages 发布来源设置：
  https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site
- GitHub Pages 自定义 404：
  https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-custom-404-page-for-your-github-pages-site
- GitHub Pages 自定义域名：
  https://docs.github.com/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site
