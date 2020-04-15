# 铉算接口

## 余额锁仓

`api/withdrawals/config`

**请求方法**

`GET`

**返回体**

```json
{
  "msg": "获取成功",
  "code": 0,
  "data": {
    "ratio": "0.001" /*ct和rmb之间比列 ct * ratio = rmb  单位(元)*/,
    "user_min": "200" /*最低提现额度 单位(元)*/,
    "user_day_limit": "2000" /*用户每日限额 单位(元)*/,
    "platform_day_limit": "200000" /*平台限额 单位(元)*/
  }
}
```
