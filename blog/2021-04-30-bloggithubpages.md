# 搭博客教程

在此感谢帮助我的老单（dan）学长

本来是有yarn办法的，但因为本人水平有限总是出奇奇怪怪的问题，结果没用成，于是还是选择了github action。

## 本地构建

这玩意跟着文档做有手就行，不多赘述，在此只详细介绍部署在github上的过程。

- [ ] 首先创一个库，以"`用户名.github.io`"命名，这是博客特有的命名格式。

- [ ] 随后编辑`docusaurus.config.js`文件

  ![js](http://tva2.sinaimg.cn/large/008snjoggy1h1ry0chx85j30o10a5dkl.jpg)

- title：标题
- tagline：你想在主页显示的话
- url：你博客的网址
- baseurl：通常为项目名，但如果url中已经有了就直接“/”
- organizationName:github用户名
- projectName：项目名

## 设置personal access token

![YD11{QXABM9GFVPJJ}))UT1](http://tva2.sinaimg.cn/large/008snjoggy1h1ry6su91qj31hc0sck94.jpg)

![QQ截图20220430185901](http://tvax3.sinaimg.cn/large/008snjoggy1h1ry81djjbj30t40lwtg7.jpg)

![image](http://tvax4.sinaimg.cn/large/008snjoggy1h1ry9of7uyj31c60kcqc6.jpg)

![image](http://tva4.sinaimg.cn/large/008snjoggy1h1ryc1gxnaj31ha1rwhaf.jpg)

note随意，Expiration建议设成无期限，select scopes全点，一步到位。然后点generate token

![image](http://tvax3.sinaimg.cn/large/008snjoggy1h1ryesftbjj31hc0sc4bl.jpg)

复制保存好你的密钥，就ghp那一行

返回你想发布博客的项目，点settings

![image](http://tvax1.sinaimg.cn/large/008snjoggy1h1rymbllonj31hc0sc7k5.jpg)

设置secret变量，选择action

![image](http://tva4.sinaimg.cn/large/008snjoggy1h1rynw0eppj31hc0sc4a7.jpg)

![image](http://tvax4.sinaimg.cn/large/008snjoggy1h1rypmo8e1j31hc0scnbf.jpg)

![image](http://tvax1.sinaimg.cn/large/008snjoggy1h1ryqm4dlcj31hc0scdpt.jpg)

value是之前让你复制的密钥，名字的话建议`GITHUBTOKEN`当然之后的workflow会用到。

## github action

[Deployment | Docusaurus](https://docusaurus.io/docs/deployment)

点击上一行的官网

![image](http://tva1.sinaimg.cn/large/008snjoggy1h1ryya7y54j31ha0sawvx.jpg)

这里有两个写好的官方配置文件

![image](http://tva4.sinaimg.cn/large/008snjoggy1h1rz092pvdj31hc0scqe8.jpg)

你依然选之前的博客项目，这里我是随便找了一个

![image](http://tva4.sinaimg.cn/large/008snjoggy1h1rz25ofh6j31hc0sctl7.jpg)

![image](http://tva3.sinaimg.cn/large/008snjoggy1h1rz2mlj8wj31hc0sch6a.jpg)

复制之前的两个官方配置文件

![image](http://tvax1.sinaimg.cn/large/008snjoggy1h1s0f4szjpj31hc0sctu4.jpg)

将此处修改为自己secret的名字。

然后将本地的my—website文件夹push上去，action就会开始运行，以后想要的blog就放进blog文件夹，然后git push。