# 闲娱管理

## 订单列表

`admin/xianyu/orders`

**请求方式**

`GET`

**请求参数**

|  名称   | 类型 | 默认 | 必须 |            说明            |
| :-----: | :--: | :--: | :--: | :------------------------: |
|  limit  | int  |  20  |  是  |          每页条数          |
| status  | int  |  -1  |  否  | 状态:0-失败 1-成功 -1 所有 |
| user_id | int  |  -1  |  是  |        状态:-1 所有        |

**权限节点[admin:xianyu:orders]**

**SUCCESS 返回体**

```json
{
  "msg": "ok",
  "code": 0,
  "data": {
    "current_page": 1,
    "data": [
      {
        "id": 17,
        "time": "1585896033" /*时间*/,
        "mediaId": "356" /*媒体ID*/,
        "userId": "349" /*用户ID*/,
        "device": "testdevice" /*用户设备标志，ios - IDFA；android - IMEI*/,
        "taskId": "1" /*闲娱平台广告id，不同的广告类型，id会重复*/,
        "money": "1" /*发放金额，按照媒体汇率转化后的媒体自身计价量*/,
        "taskType": "0" /*业务类型，0-截图；1-游戏；2-小程序；3 -截图留存；4-小程序留存*/,
        "remainIdx": "1" /*>=0 的整数，表示完成留存任务，1代表次留*/,
        "title": "testSuccess" /*奖励发放的描述*/,
        "mediaProfit": "3" /*媒体收入，单位分(若媒体为自有提现方式，则包含给用户的奖励)*/,
        "sign": "71e94f6310dcefc24ec079be481873f3",
        "agm_num": "2.1122" /*生成订单时换算出的 AGM 奖励数量*/,
        "status": null /*状态 0-失败 1-成功*/,
        "created_at": "2020-04-03 14:52:22",
        "updated_at": "2020-04-03 14:52:22",
        /*用户信息*/
        "user": {
          "id": 349,
          "name": "12321",
          "phone": "****",
          "number": null,
          "avatar": null,
          "bio": null,
          "background": null,
          "sex": 0,
          "birthday": null,
          "easemob_pass": null,
          "invite_code": null,
          "power": 0,
          "big_name": 0,
          "wx_openid": "",
          "group_id": null,
          "disabled_at": null,
          "publish_status": 0,
          "created_at": null,
          "grade": {
            "name": "懵懂小白",
            "level": "1",
            "icon": "aptwckzeh.png",
            "small_icon": "tcacsimxf.png",
            "min": 0,
            "max": 100,
            "next_name": "晶莹玻璃"
          }
        }
      }
    ],
    "first_page_url": "http://imeet.test/admin/xianyu/orders?page=1",
    "from": 1,
    "last_page": 1,
    "last_page_url": "http://imeet.test/admin/xianyu/orders?page=1",
    "next_page_url": null,
    "path": "http://imeet.test/admin/xianyu/orders",
    "per_page": 20,
    "prev_page_url": null,
    "to": 10,
    "total": 10
  }
}
```
