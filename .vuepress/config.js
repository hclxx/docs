module.exports = {
  title: "Docs",
  base: "/docs/",
  locales: {
    "/": {
      lang: "zh-CN",
      title: "Docs",
      description: "COMC 接口文档"
    }
  },
  markdown: {
    lineNumbers: true
  },
  themeConfig: {
    repo: "COMCFE/docs",
    nav: require("./nav"),
    lastUpdated: "上次更新",
    searchMaxSuggestions: 10,
    sidebar: {
      "/api/": getAppSider("移动端", "规范"),
      "/admin/": getAdminSider("后台管理", "说明"),
      "/merchant/": getMerchantSider("商户管理", "说明"),
      "/web/": getWebSider("PC端", "说明", "H5端", "说明")
    }
  },
  plugins: [
    [
      "@vuepress/pwa",
      {
        serviceWorker: true,
        updatePopup: true
      }
    ],
    [
      "@vuepress/last-updated",
      {
        transformer: (timestamp, lang) => {
          const moment = require("moment");
          moment.locale(lang);
          return moment(timestamp).fromNow();
        }
      }
    ],
    ["@vuepress/back-to-top", true],
    ["@vuepress/notification", true]
  ]
};

/**
 * 移动端 sidebar
 * @param {String} title 标题
 * @param {String} introduction 描述
 */
function getAppSider(title, introduction) {
  return [
    {
      title,
      collapsable: false,
      children: [
        ["", introduction],
        "user",
        "code",
        "goods",
        "poster",
        "consignees",
        "order",
        "base",
        "help",
        "message",
        "yz-auth",
        "wallet",
        "ifuture",
        "discounts",
        "ad",
        "application",
        "version",
        "task",
        "certification",
        "file",
        "share",
        "ore"
      ]
    }
  ];
}

// 后台管理 sidebar
function getAdminSider(title, introduction) {
  return [
    {
      title,
      collapsable: false,
      children: [
        ["", introduction],
        "upload",
        "goods",
        "goods-cate",
        "administrator",
        "roles",
        "currency",
        "discount",
        "sms",
        "system",
        "order",
        "goods_orders",
        "help",
        "task",
        "feedback",
        "ad",
        "express",
        "withdraw",
        "statistics",
        "message",
        "user",
        "poster",
        "special",
        "youzan",
        "merchant",
        "config",
        "item",
        "app-version",
        "certification",
        "ore",
        "recharge",
        "coupon"
      ]
    }
  ];
}

function getMerchantSider(title, introduction) {
  return [
    {
      title,
      collapsable: false,
      children: [
        ["", introduction],
        "merchant",
          "common",
          "login",
          "order",
          "wallet",
          "withdraw",
          "yzOrder",
      ]
    }
  ];
}
// web端 sidebar
function getWebSider(title1, introduction1, title2, introduction2) {
  return [
    {
      title: title1,
      collapsable: true,
      children: [["", introduction1], "pc-demo"]
    },
    {
      title: title2,
      collapsable: true,
      children: [["", introduction2], "h5-demo"]
    }
  ];
}
