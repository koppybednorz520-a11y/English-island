阿钰的英语岛 9.0 · 可部署网站项目
=================================

一、当前版本
这是从已有 9.0 樱花小镇冒险试玩版整理的静态网站项目。
保留原版英语词库、背词、阅读、复习、宠物与小镇冒险的原有代码。
目前仍使用浏览器本地存档；尚未接入玩家账号、Supabase 或云端同步。
不要把这个版本宣传为已经支持云端存档。

二、文件结构
index.html                  网站入口
assets/css/game.css         原版游戏样式
assets/js/game-core.js      原版英语学习与阅读等功能
assets/js/sakura-adventure.js  原版樱花小镇剧情与地图
netlify.toml                Netlify 静态托管配置
README_部署说明.txt         本文件

三、如何部署到 Netlify
1. 解压 ZIP，确保 index.html 在项目文件夹最外层。
2. 电脑浏览器访问 https://app.netlify.com/drop
3. 登录 Netlify，拖入整个 ayu-english-island-web 文件夹。
4. 等待部署完成，打开获得的 https://xxxx.netlify.app 网址。
5. 手机端如无法上传文件夹，建议改用电脑；也可通过 GitHub 仓库连接 Netlify。
6. 不要只上传 index.html：assets 文件夹必须一起上传。

四、测试建议
- 打开首页，检查页面是否正常渲染。
- 检查学习、阅读、复习、地图、宠物小屋和主题切换。
- 检查第一章剧情及谜题。
- 关闭再打开网页，确认同一浏览器本地进度还在。
- 换浏览器/设备进度不会同步，这是当前版本的预期行为。

五、下一阶段
增加 Supabase Auth 账号注册登录、RLS 数据库权限、存档版本迁移、
断网缓存及云端同步冲突处理。切勿把 Supabase service_role 密钥写进网页。

提示：首次部署不需要买域名；发布后可以自行更改网站名称。
