# Nodejs Express项目（连接MySQL）空项目Demo

> 开发工具：Sublime

## 经过配置后可以运行一次ajax请求并向页面返回值

* 安装mysql 建表 插入值（自行填一些数据 ）附建表语句

```
-- 创建表user表

CREATE TABLE T_USER(

	ID INT AUTO_INCREMENT PRIMARY KEY,

	USERNAME VARCHAR(20) NOT NULL,

	PASSWORD VARCHAR(20) NOT NULL

);


```

* 在项目的文件的model目录下的config.js配置mysql数据的地址、用户、密码等

* 然后就可以启动了

```
$ npm start  //启动
```
>浏览器输入 localhost:3000/register 即可查看 
端口号可以在bin文件夹下的www文件中 修改

=== 

### 更新日志

时间：2018年4月12日

version：第一次更新

描述：拉通mysql