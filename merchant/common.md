#公用方法

## 验证码

**方式**

`POST`

**路径**

`/verification/code/{namespace?}`

`namespace: 商家后台 merchant 管理后台 admin`

**参数**

|  名称  |  类型  | 必须 |                  说明                   |
| :----: | :----: | :--: | :-------------------------------------: |
| number | string |  是  |  仅支持手机号,已授权用户不需要传手机号  |
| scene  | string |  是  | 场景: merchant-forget-password-忘记密码 add-wallet-address：添加结算账户 |

**响应**

`Status code 200`

```json
{
  "message": "发送成功"
}
```


## 上传

**方式**

`POST`

**路径**

`/merchant/upload`

**参数**

| 名称 | 类型 | 必须 | 说明 |
| :--: | :--: | :--: | :--: |
| file | file |  是  | 文件 |

**响应**

`Status code 200`

```json
{
  "filename": "fcc9effd7b645167633169bba4ee7651.jpeg", // 文件名
  "file_url": "http://p59l6s1jm.bkt.clouddn.com/fcc9effd7b645167633169bba4ee7651.jpeg", // 文件地址
  "file_id": 1 // 文件id
}
```