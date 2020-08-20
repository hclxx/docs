# 配置

## 获取全局配置信息

**方式**

`GET`

**路径**

`/api/config`

**响应**

`Status code 200`

```json
{
    "msg": "ok",
    "code": 0,
    "data": {
        "pay:switch": {     /*支付开关*/
            "back": "on",   /*银行卡 on-开启 off-关闭*/
            "usdt": "on",   /*usdt on-开启 off-关闭*/
            "alipay": "on"  /*支付宝 on-开启 off-关闭*/
        },
        "conversion": {   /*兑换*/
            "min": "10",  /*最小值*/
            "tips": "这是温馨提示", /*温馨提示*/
            "cd_to_usdt": "0.1",  /*创豆兑换usdt比例*/
            "cd_to_usdt_fee": "10"  /*手续费*/
        },
        "withdrawal": {
            "instr": "提现说明",
            "switch": "on",
            "user_min": "100",      /*最低提现*/
            "user_day_limit": "1000"    /*单日提现上限*/
        },
        "invite": {
            "url": "http://resource.immeet.com/imeet/register.html",
            "mode": "邀请方式",
            "rule": "邀请说明",
            "f_power": 100,
            "s_power": 100
        },
        "version": 0,
        "about": "关于",    /*关于*/
        "register": "注册协议", 
        "user": "用户协议", 
        "cd:limit": "8888", /*最大资产上限*/
        "equal:bus": {      
            "tips": "等量发车规则说明",   /*等量发车说明*/
            "tg": "3",    /*糖果配比*/
            "cd": "50"    /*创豆配比*/
        },
        "trade": {          /*交易*/
            "cd_to_cny": "0.05",    /*单个创豆现金价格*/
            "num_buy_min": "300",   /*最低数量购买数*/
            "usdt_to_cny": "6.00",    /*单个USDT现金价格*/
            "price_buy_min": "10"     /*最低价格购买金额*/
        },
        "cdn_domain": "http://file.818zs.cn"
    }
}
```
