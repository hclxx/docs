# 多麦返利

## 栏目列表

`/api/v1/duomai/cates`

**请求方法**

`GET`

**SUCCESS 状态码**

`200`

**SUCCESS 返回体**

```json
{
  "msg": "ok",
  "code": 0,
  "data": {
    /*栏目集合*/
    "items": [
      {
        "name": "热门推荐" /*顶级栏目名称*/,
        "children": [
          {
            "id": 3,
            "name": "淘宝商城" /*二级栏目名称*/,
            "icon": "http://static.app.com/adasdsadasd.png" /*图标*/,
            "explain": "京东商城说明" /*栏目说明*/,
            "target_type": "pdd" /*栏目类型: jd-京东 pdd-拼多多 common-通用*/,
            "target_link": "http://www.baidu.com" /*目标跳转链接*/,
            "pid": 1 /*父级ID*/,
            "ratio_explain": "最高返0.6%" /*返利比例说明*/,
            "order_time_explain": "10分钟" /*订单生成时间说明*/,
            "receipt_time_explain": "2个月" /*到账时间说明*/,
            "special_explain": "拖货无返利说明" /*退换货无返利说明*/,
            "remark": "注意事项" /*注意事项*/,
            "sort": 22,
            "hot": 0,
            "status": 1
          }
        ]
      },
      {
        "name": "商城集合" /*顶级栏目名称*/,
        "children": [
          {
            "id": 3,
            "name": "淘宝商城" /*二级栏目名称*/,
            "icon": "http://static.app.com/adasdsadasd.png" /*图标*/,
            "explain": "京东商城说明" /*栏目说明*/,
            "target_type": "pdd" /*栏目类型: jd-京东 pdd-拼多多 common-通用*/,
            "target_link": "http://www.baidu.com" /*目标跳转链接*/,
            "pid": 1 /*父级ID*/,
            "ratio_explain": "最高返0.6%" /*返利比例说明*/,
            "order_time_explain": "10分钟" /*订单生成时间说明*/,
            "receipt_time_explain": "2个月" /*到账时间说明*/,
            "special_explain": "拖货无返利说明" /*退换货无返利说明*/,
            "remark": "注意事项" /*注意事项*/,
            "sort": 22,
            "hot": 0,
            "status": 1
          }
        ]
      }
    ],
    /*配置信息*/
    "config": {
      "amid": "123123" /*安卓媒体ID*/,
      "imid": "123213" /*苹果媒体ID*/
    }
  }
}
```
