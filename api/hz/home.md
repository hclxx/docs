# 首页

## 首页

**方式**

`GET`

**路径**

`/api/home`

**响应**

`Status code 200`

```json
{
    "msg": "ok",
    "code": 0,
    "data": {
        "ipfs": {   /*矿池数据*/
            "total_power": "874.99 PiB",    /*全网总算力*/
            "tipset_height": "227973",    /*最新区块高度*/
            "block_reward": "12.6605 FIL",  /*区块奖励*/
            "unit_price": "30.09",  /*FIL单价*/
            "alteration": "-2.01",  /*涨跌幅*/
            "avg_block_time": "30", /*平均出块时间*/
            "one_day_messages": "1123816",  /*24小时消息增量*/
            "avg_gas_premium": "1590418.0000",  /*平均gas单价*/
            "capitalization": "$886.34 million",  /*流通市值*/
            "current_base_fee_str": "0.0049 NanoFIL", /*当前基础费率*/
            "avg_blocks_in_tipset_str": "4.5",  /*平均每个高度区块数*/
            "avg_messages_tipset": "393", /*平均每个高度消息数*/
            "active_miners": "690", /*旷工数*/
            "one_day_fil_str": "171501.8117", /*24小时FIL增量*/
            "current_fil_str": "29451884.4695 FIL", /*流通总量*/
            "last_turnover_str": "2287366.3676",  /*24小时成交额*/
            "total_fil_str": "2,000,000,000", /*FIL总量*/
            "flow_rate": "0.014725942", /*FIL流通率*/
            "mining_income_str_one_day": "0.1935",  /*24小时平均挖矿收益(T)*/
            "pledge_collateral": "9158288.0884" /*总质压*/
        },
        "real_time": [
            {
                "symbol": "FIL",    /*标识*/
                "price_usd": "30.26", /*usdt价格*/
                "percent_change_24h": "-1.56", /*涨跌幅*/
                "volume_24h_usd": "1348902795"  /*24小时量(需要乘以usdt单价 已亿为单位)*/
            },
            {
                "symbol": "USDT",
                "price_usd": "1",
                "percent_change_24h": "-0.01",
                "volume_24h_usd": "1348902795"
            },
            {
                "symbol": "BTC",
                "price_usd": "15611",
                "percent_change_24h": "1.37",
                "volume_24h_usd": "1348902795"
            },
            {
                "symbol": "ETH",
                "price_usd": "458.35",
                "percent_change_24h": "-0.76",
                "volume_24h_usd": "1348902795"
            },
            {
                "symbol": "EOS",
                "price_usd": "2.48",
                "percent_change_24h": "-1.03",
                "volume_24h_usd": "1348902795"
            }
        ]
    }
}
```
