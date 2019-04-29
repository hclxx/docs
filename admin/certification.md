# 认证管理

## 认证列表

`/admin/certification`

**请求方法**

`GET`

**请求参数**

| 名称  |  类型  | 默认 | 必须 |   说明   |
| :---: | :----: | :--: | :--: | :------: |
| limit |  int   |  15  |  是  | 每页条数 |
| user |  string   |  无  |  否  | 用户名称检索 |
| status |  int   |  无  |  否  | 状态检索：0-待审核 1-已通过 2-已驳回 |

**SUCCESS 状态码**

`200`

**SUCCESS 返回体**

```json
{
    "current_page": 1,
    "data": [
        {
            "id": 2,
            "certification_name": "real_name",
            "user_id": 1,
            "data": {
                "front": "http://fffsss.id-card.com/asdasdsadas.jpg",/*证件正面照*/
                "back": "http://fffsss.id-card.com/asdasdsadas.jpg",/*证件背面照*/
                "hand": "http://fffsss.id-card.com/asdasdsadas.jpg",/*手持证件照*/
                "number": "5137221993",/*证件号码*/
                "name": "章三",/*证件人名字*/
                "type": "id-card"/*证件类型: id-card 身份证*/
            },
            "examiner": 0,
            "status": 0,/*状态检索：0-待审核 1-已通过 2-已驳回*/
            "created_at": "2019-02-15 16:07:44",/*认证时间*/
            "updated_at": "2019-02-15 16:07:44",
            "user": {/*认证用户*/
                "id": 1,
                "name": "哈哈哈1",
                "sex": 0,
                "email": null,
                "phone": "18382274309",
                "avatar": "http://pm12qeuu3.bkt.clouddn.com/0c15bb57b3b639cec8e530fcb60a4ecb.jpeg",
                "code": "HHS32J",
                "bio": null,
                "power": 220,
                "last_time": "2019-01-22 01:40:19",
                "last_ip": "192.168.10.1",
                "status": 0,
                "created_at": "2019-01-19 23:31:52",
                "updated_at": "2019-02-13 10:20:45"
            },
            "admin": {/*审核员*/
                    "id": 1,  
                    "name": "超级管理员"
            }
        }
    ],
    "first_page_url": "http://comc-mall-amin.test/admin/certification?page=1",
    "from": 1,
    "last_page": 1,
    "last_page_url": "http://comc-mall-amin.test/admin/certification?page=1",
    "next_page_url": null,
    "path": "http://comc-mall-amin.test/admin/certification",
    "per_page": 15,
    "prev_page_url": null,
    "to": 1,
    "total": 1
}
```

## 认证通过

`/admin/certification/:certification/pass`

**请求方法**

`GET`

**请求参数**

| 名称  |  类型  | 默认 | 必须 |   说明   |
| :---: | :----: | :--: | :--: | :------: |
| desc |  string   |  无  |  是  | 通过描述 |

**SUCCESS 状态码**

`200`

**SUCCESS 返回体**

```json
{
    "message": "通过认证成功",
    "certification": {
        "id": 2,
        "certification_name": "real_name",
        "user_id": 1,
        "data": {
            "front": "http://fffsss.id-card.com/asdasdsadas.jpg",
            "back": "http://fffsss.id-card.com/asdasdsadas.jpg",
            "hand": "http://fffsss.id-card.com/asdasdsadas.jpg",
            "number": "5137221993",
            "name": "章三",
            "type": "id-card",
            "desc": "正确"
        },
        "examiner": 1,
        "status": 1,
        "created_at": "2019-02-15 16:07:44",
        "updated_at": "2019-02-15 17:05:43",
        "user": {
            "id": 1,
            "name": "哈哈哈1",
            "sex": 0,
            "email": null,
            "phone": "18382274309",
            "avatar": "http://pm12qeuu3.bkt.clouddn.com/0c15bb57b3b639cec8e530fcb60a4ecb.jpeg",
            "code": "HHS32J",
            "bio": null,
            "power": 220,
            "last_time": "2019-01-22 01:40:19",
            "last_ip": "192.168.10.1",
            "status": 0,
            "created_at": "2019-01-19 23:31:52",
            "updated_at": "2019-02-13 10:20:45"
        }
    }
}
```

## 认证驳回

`/admin/certification/:certification/reject`

**请求方法**

`GET`

**请求参数**

| 名称  |  类型  | 默认 | 必须 |   说明   |
| :---: | :----: | :--: | :--: | :------: |
| reject_content |  string   |  无  |  是  | 驳回原因 |

**SUCCESS 状态码**

`200`

**SUCCESS 返回体**

```json
{
    "message": "驳回成功",
    "certification": {
        "id": 2,
        "certification_name": "real_name",
        "user_id": 1,
        "data": {
            "front": "http://fffsss.id-card.com/asdasdsadas.jpg",
            "back": "http://fffsss.id-card.com/asdasdsadas.jpg",
            "hand": "http://fffsss.id-card.com/asdasdsadas.jpg",
            "number": "5137221993",
            "name": "章三",
            "type": "id-card",
            "desc": "正确",
            "reason": "正确"
        },
        "examiner": 1,
        "status": 2,
        "created_at": "2019-02-15 16:07:44",
        "updated_at": "2019-02-15 17:09:58",
        "user": {
            "id": 1,
            "name": "哈哈哈1",
            "sex": 0,
            "email": null,
            "phone": "18382274309",
            "avatar": "http://pm12qeuu3.bkt.clouddn.com/0c15bb57b3b639cec8e530fcb60a4ecb.jpeg",
            "code": "HHS32J",
            "bio": null,
            "power": 220,
            "last_time": "2019-01-22 01:40:19",
            "last_ip": "192.168.10.1",
            "status": 0,
            "created_at": "2019-01-19 23:31:52",
            "updated_at": "2019-02-13 10:20:45"
        }
    }
}
```
