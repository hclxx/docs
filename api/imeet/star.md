# 星球

## 星球项目列表

**方式**

`GET`

**路径**

`/api/star`

**参数**



**响应**

`Status code 200`

```json
{
    "msg": "ok",
    "code": 0,
    "data": [
        {
            "id": 1,
            "name": "社区链",        //  项目名称
            "icon": "image url",     //  项目图标  
            "describe": "全球社区人自己的主链",   //  项目描述
            "intro": "项目介绍"                   //  项目介绍
        },
        {
            "id": 2,
            "name": "星球项目名称",
            "icon": "image url",
            "describe": "全球社区人自己的主链",
            "intro": "项目介绍"
        }
    ]
}
```

## 星球项目详情

**方式**

`GET`

**路径**

`/api/star/{id}`

**参数**



**响应**

`Status code 200`

```json
{
    "msg": "ok",
    "code": 0,
    "data": {
        "id": 1,
        "name": "社区链",                 //  项目名称
        "icon": "image url",               //  项目图标
        "describe": "全球社区人自己的主链",   //  项目描述
        "images": [                           //  项目展示图片
            {
                "mime": "jpg",
                "width": 200,
                "height": 100,
                "filename": "filename1"
            },
            {
                "mime": "png",
                "width": 250,
                "height": 150,
                "filename": "filename2"
            }
        ],
        "intro": "项目介绍",                       //  项目介绍
        "down_link": "http://www.down_link.com",      //  项目下载链接
        "qr_code": "this is qr_code",                 //  项目二维码
        "created_at": "2019-06-24 09:59:45",
        "updated_at": "2019-06-24 09:59:45",
        "join": 0,/*0-未加入 1-已加入*/,
        "group": {
                "id": 86393386762241,/*社群id*/
                "name": "扯魔",/*社群名称*/
                "avatar": "20190629142555754.jpg",/*社群头像*/
                "from": 1,/*来源:1-用户自身创建,2-官方,3-第三方创建*/
                "member_count": 3,/*成员数量*/
                }
    }
}
```