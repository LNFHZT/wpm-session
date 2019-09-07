# WPM-session
wpm-session 对微信小程序本地缓存进行再一次封装，本地缓存可设置有效期

## 安装
```
npm install wpm-session --save
cnpm install wpm-session --save
```

## 引用
```
import session from 'wpm-session';
const session = require("wpm-session").default;
```

## 示例
```
import session from 'wpm-session';
session.put('test',{test:1});

```
## 简介
wpm-session  可单独引入  直接session调用所有内置方法
也可以挂载再[wpm-wx](https://www.npmjs.com/package/wpm-wx)依赖中,
内置支持wpm 引入方式
```
import session from 'wpm-session';
import wpm from 'wpm-wx';

wpm.use(session);

new  wpm();
```
use引入后this对象中新增$session 对象</br>

## api
```
<!-- 设置本地缓存 key 值 ,value 必填 ，timer 选填，过期时间，timer 单位为秒 timer=1 就是1秒 -->
session.put('key',value[,timer]);
<!-- 获取本地本地缓存，data可选，data 值为 如果获取本地缓存变量为空，则返回data值且data 不能为undefined 或 null -->
session.get('key'[,data]);
<!-- 删除本地缓存 -->
session.remove('key');
<!-- 清空本地缓存 -->
session.clear();
```
ps ： session 过期时间仅限于session方法调用会有过期时间，如果调用微信原生的方法，则不会出现过期，只会永久有效

## 版本
* v1.0.0
  >ts 重构原session项目
  >实现put，get，remove，clear方法
  >实现本地缓存可设置有效期
