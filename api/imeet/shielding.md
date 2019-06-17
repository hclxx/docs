# 屏蔽接口

## 添加 用户/动态屏蔽

**方式**

`POST`

**路径**

`/api/shieldings`

**参数**

|  名称  |  类型  | 必须 | 说明  |
| :----: | :----: | :--: | :----: |
| users | array |  是  | 屏蔽的用户 `[1,2,3]` |
| type | string |  是  | 屏蔽类型: `look_me` 不让他看我的动态 `look_hime` 不看他的动态  |

**响应**

`Status code 200`

```json
{
    "msg": "屏蔽成功",
    "code": 0,
    "data": null
}
```

## 屏蔽列表 

**方式**

`GET`

**路径**

`/api/shieldings`

**参数**

|  名称  |  类型  | 必须 | 说明  |
| :----: | :----: | :--: | :----: |
| type | string |  是  | 屏蔽类型: `look_me` 不让他看我的动态 `look_hime` 不看他的动态  |

**响应**

`Status code 200`

```json
{
    "msg": "ok",
    "code": 0,
    "data": [
        {
            "id": 1,/*主键ID*/
            "target_user_id": 3,
            "target_user": {
                "id": 3,
                "name": "eric",
                "avatar": null
            }
        }
    ]
}
```

## 屏蔽列表 

**方式**

`DELETE`

**路径**

`/api/shieldings`

**参数**

|  名称  |  类型  | 必须 | 说明  |
| :----: | :----: | :--: | :----: |
| type | string |  是  | 屏蔽类型: `look_me` 不让他看我的动态 `look_hime` 不看他的动态  |
| ids | array |  是  | 移除的屏蔽id `[1,2,3]`  |

**响应**

`Status code 200`

```json
{
    "msg": "ok",
    "code": 0,
    "data": [
        {
            "id": 1,/*主键ID*/
            "target_user_id": 3,
            "target_user": {
                "id": 3,
                "name": "eric",
                "avatar": null
            }
        }
    ]
}
```

