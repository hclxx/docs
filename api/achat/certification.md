# 实名认证

## 申请认证

**方式**

`POST`

**路径**

`/api/certification`

**参数**

|  名称   |  类型  | 必须 |  说明  |
| :-----: | :----: | :--: | :----: |
| front | string |  是  |  证件正面照  |
| back | string |  是  | 证件反面照 |
| hand | string |  是  |  手持证件照  |
| number | string |  是  | 证件号 |
| name | string |  是  | 证件人姓名 |
| type | string |  是  | 证件类型: id-card(身份证)，暂仅支持身份证 |

**响应**

`Status code 200`

```json
{
    "msg": "提交成功，后台管理管理员将在2-3个工作日进行处理",
    "code": 0,
    "data": {
        "examiner": 0,
        "user_id": 1,
        "certification_name": "real_name",
        "data": {
            "front": "http://fffsss.id-card.com/asdasdsadas.jpg",/*正面照*/
            "back": "http://fffsss.id-card.com/asdasdsadas.jpg",/*反面照*/
            "hand": "http://fffsss.id-card.com/asdasdsadas.jpg",/*手持照*/
            "number": "5137221993",/*证件号码*/
            "name": "章三",/*证件人姓名*/
            "type": "id-card",/*证件类型:id-card 身份证*/
            "desc": "认证通过描述",/*status为1存在该字段*/
            "reason": "正确",/*status为2存在该字段*/
        },
        "status": 0,/*状态: 0-待审核 1-审核通过 2-被驳回，状态在0或1情况下，不能进行更改*/
        "updated_at": "2019-02-15 16:07:44",
        "created_at": "2019-02-15 16:07:44",
        "id": 2
    }
}
```

## 更新认证

**方式**

`PUT`

**路径**

`/api/certification`

**参数**

|  名称   |  类型  | 必须 |  说明  |
| :-----: | :----: | :--: | :----: |
| front | string |  是  |  证件正面照  |
| back | string |  是  | 证件反面照 |
| hand | string |  是  |  手持证件照  |
| number | string |  是  | 证件号 |
| name | string |  是  | 证件人姓名 |
| type | string |  是  | 证件类型: id-card(身份证)，暂仅支持身份证 |

**响应**

`Status code 200`

```json
{
    "msg": "提交成功，后台管理管理员将在2-3个工作日进行处理",
    "code": 0,
    "data": {
        "examiner": 0,
        "user_id": 1,
        "certification_name": "real_name",
        "data": {
            "front": "http://fffsss.id-card.com/asdasdsadas.jpg",/*正面照*/
            "back": "http://fffsss.id-card.com/asdasdsadas.jpg",/*反面照*/
            "hand": "http://fffsss.id-card.com/asdasdsadas.jpg",/*手持照*/
            "number": "5137221993",/*证件号码*/
            "name": "章三",/*证件人姓名*/
            "type": "id-card"/*证件类型:id-card 身份证*/
        },
        "status": 0,
        "updated_at": "2019-02-15 16:07:44",
        "created_at": "2019-02-15 16:07:44",
        "id": 2
    }
}
```

## 获取认证

**方式**

`GET`

**路径**

`/api/certification`

**参数**

无

**响应**

`Status code 200`

```json
{
    "msg": "",
    "code": 0,
    "data": {
        "id": 2,
        "certification_name": "real_name",
        "user_id": 1,
        "data": {
            "front": "http://fffsss.id-card.com/asdasdsadas.jpg",
            "back": "http://fffsss.id-card.com/asdasdsadas.jpg",
            "hand": "http://fffsss.id-card.com/asdasdsadas.jpg",
            "number": "5137221993",
            "name": "章三",
            "type": "id-card"
        },
        "examiner": 0,
        "status": 0,
        "created_at": "2019-02-15 16:07:44",
        "updated_at": "2019-02-15 16:07:44"
    }
}
```
## 铉算充值回调

**方式**

`POST`

**路径**

`/api/agm/notify`

**参数**

|  名称   |  类型  | 必须 |  说明  |
| :-----: | :----: | :--: | :----: |
| address | string |  是  |  充值钱包地址  |
| txid | string |  是  | 交易hash |
| num | string |  是  |  充值数量  |
| status | int |  是  | 交易状态：0：待确认，1：确认完成，2：失败 |
| sign | string |  是  | 签名字符串 |
| timestamp | int |  是  | 当前时间戳 |

**时间戳**

1524801032

**签名**

1.将请求参数(除sign外)按照参数名称的字典顺序进⾏升序排序
2.将升序排序后的参数按照“参数名=参数值&”的格式进行拼接
3.将SecretKey拼接到字符串尾部
4.对拼接SecretKey的字符串进行md5加密，最后的值即为sign值
MD5("address=864804031618796&num=12&status=2&timestamp=1524801032&txid=12322"  + "c37e5e4685bee3564f" )

**响应**

`Status code 200`

```json
{
    "msg": "success",
    "code": 0
}
```
