# 项目方商品[新增]


## 商品列表

**方式**

`GET`

**路径**

`/api/v1/project/goods`

**参数**

|    名称    |  类型  | 必须 |                                         说明                                         |
| :--------: | :----: | :--: | :----------------------------------------------------------------------------------: |
|   limit    |  int   |  是  |                                    条目数 默认 10                                    |
|   offset   |  int   |  是  |                                   偏移量 默认为 0                                    |
|  currency  | string |  是  |                             货币类型: comc-comc,ore-矿石                             ||
| order_by |  string   |  排序  |                                       排序：id_desc-最新 price_asc-价格升序 price_desc-价格降序                                        |

**响应**

`Status code 200`

```json
{
    "msg": "ok",
    "code": 0,
    "data": [
        {
            "id": 3,
            "name": "测试项目方",/*项目方名称*/
            "back_id": 2,
            "goods": [
                {
                    "id": 2,
                    "name": "耐克球鞋",/*商品名称*/
                    "intro": "耐克球鞋",/*商品介绍*/
                    "image": "https://img.yzcdn.cn/upload_files/2018/11/13/FsXOQvXwWsvvG1GBWbdBI4FIAHvH.jpg",/*商品图*/
                    "stock_num": 0,/*库存: 0-售罄*/
                    "price": "20.00000000",/*现金价格*/
                    "token_award": {
                        "token_award": "20",/*奖励的通证数量*/
                        "token_symbol": "btc"/*通证符号*/
                    }
                }
            ],
            /*背景图*/
            "bgd": {
                "id": 2,
                "file_url": "https://img.yzcdn.cn/upload_files/2018/11/13/FsXOQvXwWsvvG1GBWbdBI4FIAHvH.jpg"
            }
        }
    ]
}
```

## 商品详情

`GET`

**路径**

`/api/v1/project/goods/{id}`

**参数**

无

**响应**

`Status code 200`

```json
{
    "msg": "ok",
    "code": 0,
    "data": {
        "id": 1,
        "name": "鼠标键盘",
        "intro": "鼠标键盘",
        "image": "https://img.yzcdn.cn/upload_files/2018/11/13/FsXOQvXwWsvvG1GBWbdBI4FIAHvH.jpg",
        "skus": [
            {
                "id": 1,
                "stock_num": 10,
                "sales_num": 5,
                "price": "100.00000000",
                "sale_price": "10.00",
                "image": "https://img.yzcdn.cn/upload_files/2018/11/13/FsXOQvXwWsvvG1GBWbdBI4FIAHvH.jpg",
                "properties": "50",
                "specs_properties": [
                    {
                        "p_id": 50,
                        "s_id": 10,
                        "p_name": "白色黑面",
                        "s_name": "颜色"
                    }
                ],
                "token_award": {
                    "token_award": "20",
                    "token_symbol": "btc"
                },
                "target_type": "goods",
                "target_id": 1
            }
        ],
        "images": [
            {
                "id": 1,
                "filename": "https://img.yzcdn.cn/upload_files/2018/11/13/FnfnVa3bMngMOBUhDy_It8KjdwuW.jpg",
                "file_url": "https://img.yzcdn.cn/upload_files/2018/11/13/FnfnVa3bMngMOBUhDy_It8KjdwuW.jpg"
            }
        ],
        "specs": [
            {
                "id": 1,
                "name": "颜色",
                "target_id": 1,
                "target_type": "goods",
                "properties": [
                    {
                        "id": 1,
                        "target_type": "goods",
                        "name": "红",
                        "specs_id": 1
                    }
                ]
            },
            {
                "id": 2,
                "name": "尺寸",
                "target_id": 1,
                "target_type": "goods",
                "properties": [
                    {
                        "id": 2,
                        "target_type": "goods",
                        "name": "大",
                        "specs_id": 2
                    }
                ]
            }
        ]
    }
}
```
