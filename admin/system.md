# 服务器信息

## 服务器信息

**方式**

`GET`

**路径**

`admin/system/server/info`

**参数**

无

**响应**

`Status code 200`

```json
{
  "php_version": "7.2.14", //PHP版本
  "os": "WINNT", //操作系统
  "server": "Apache/2.4.37 (Win64) PHP/7.2.14", //运行环境
  "db": "mysql", //数据库
  "port": "80", //端口号
  "root": "D:/wamp/wamp64/www/mall-admin/public", //网站跟目录
  "agent": "PostmanRuntime/7.6.0", //你使用的浏览器
  "protocol": "HTTP/1.1", //通信协议
  "method": "GET", //请求方式
  "laravel_version": "5.7.19", //laravel框架版本
  "max_upload_size": "1024", //最大上传限制
  "execute_time": "120秒", //最大执行时间
  "server_date": "2019年1月16日 10:53:47", //服务器时间
  "local_date": "2019年1月16日 18:53:47", //本地时间
  "domain_ip": "shop.igoods.com [ 192.168.0.112 ]", //域名/IP
  "user_ip": "192.168.0.112", //你的IP
  "disk": "946235.47M" //服务器剩余磁盘空间
}
```

## 获取商户配置

**方式**

`GET`

**路径**

`admin/system/merchant`

**参数**

无

**响应**

`Status code 200`

```json
{
    "cash_min": 0, /*最低提现金额*/
}
```

## 更新商户配置

**方式**

`PUT`

**路径**

`admin/system/merchant`

**参数**

| 名称  |  类型  | 默认 | 必须 |            说明             |
| :---: | :----: | :--: | :--: | :-------------------------: |
| cash_min |  int   |  无  |  是  |          商户最低提现金额           |
| cash_cycle |  int   |  无  |  是  |          商户提现周期          |

**响应**

`Status code 200`

```json
{
    "message": "修改成功",
}
```

## 获取一键收取价格配置

**方式**

`GET`

**路径**

`admin/system/collection`

**参数**

无

**响应**

`Status code 200`

```json
[
    {
        "money": 10,  //  金额
        "month": 1    //  时间(月)
    },
    {
        "money": 18,
        "month": 2
    }
]
```

## 配置一键收取价格

**方式**

`PUT`

**路径**

`admin/system/collection`

**参数**

| 名称  |  类型  | 默认 | 必须 |            说明             |
| :---: | :----: | :--: | :--: | :-------------------------: |
| money |  array   |  无  |  是  |          一键收取的价格           |

**响应**

`Status code 200`

```json
{
    "message": "修改成功",
}
```



