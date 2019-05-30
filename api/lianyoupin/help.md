# 帮助中心

## 新手教程

**方式**

`GET`

**路径**

`/api/v1/help/courses`

**参数**

无

**响应**

`Status code 200`

```json
{
  "msg": "",
  "code": 0,
  "data": [
    {
      "id": 1 /* 教程id */,
      "type": 1 /* 1-图文 2-视频*/,
      "name": "图文" /*教程标题*/,
      "image": "http://youbinglian.static.com/01.jepg" /*教程封面地址*/,
      "content": "图文介绍" /*内容，type=1 content为html文本内容,type=2 content为视频链接地址*/
    },
    {
      "id": 2,
      "type": 2,
      "name": "视频",
      "image": "http://youbinglian.static.com/01.jepg",
      "content": "http://youbinglian.static.com/01.mp4\n"
    }
  ]
}
```

## 问答分类

**方式**

`GET`

**路径**

`/api/v1/help/question/categories`

**参数**

无

**响应**

`Status code 200`

```json
{
  "msg": "",
  "code": 0,
  "data": [
    {
      "id": 1 /*分类id*/,
      "name": "COMC" /*分类名称*/,
      "count": 0 /*分类下面问题数*/
    }
  ]
}
```

## 问答列表

**方式**

`GET`

**路径**

`/api/v1/help/questions`

**参数**

无

**响应**

`Status code 200`

```json
{
  "msg": "",
  "code": 0,
  "data": [
    {
      "questions": "如何获取comc?" /* 问题 */,
      "answers": "这是个问题啊 哦多克" /*答案*/,
      "is_hot": false /*是否热门*/,
      "cate_id": 1 /*分类id*/
    }
  ]
}
```
