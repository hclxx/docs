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
      // 链优品
      "/api/lianyoupin/": getLypinAppSider("移动端", "规范"),
      "/admin/lianyoupin/": getLypAdminSider("后台管理", "说明"),
      "/merchant/": getLypMerchantSider("商户管理", "说明"),
      // Imeet
      "/api/imeet/": getImeetAppSider("移动端", "规范"),
      "/admin/imeet/": getImeetAdminSider("后台管理", "说明"),
      // AChat
      "/api/achat/": getAchatAppSider("移动端", "规范"),
      "/admin/achat/": getAchatAdminSider("后台管理", "说明"),
      // Schain
      "/api/schain/": getSchainAppSider("移动端", "规范"),
      "/admin/schain/": getSchainAdminSider("后台管理", "说明")
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

// 链优品APP接口文档
function getLypinAppSider(title, introduction) {
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
        "discounts",
        "ad",
        "application",
        "version",
        "task",
        "certification",
        "file",
        "share",
        "ore",
        "juhe",
        "bind-apps",
        "tbk",
        "project-goods",
        "withdrawal",
        "tbk-wallet",
        "tbk-member",
        "tbk-performance",
        "weiyi",
        "tbk-gift",
        "tbk-home",
        "hdk",
        "duomai"
      ]
    }
  ];
}

// 链优品后台接口文档
function getLypAdminSider(title, introduction) {
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
        "coupon",
        "token",
        "tbk-favorites",
        "tbk-member",
        "cash-withdrawal",
        "tbk-wallet",
        "tbk-cate",
        "tbk-gift",
        "tbk-gift-order",
        "tbk-column",
        "duomai"
      ]
    }
  ];
}

// 链优品商户接口文档
function getLypMerchantSider(title, introduction) {
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
        "yzOrder"
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

// Imeet APP接口文档
function getImeetAppSider(title, introduction) {
  return [
    {
      title,
      collapsable: false,
      children: [
        ["", introduction],
        "base",
        "user",
        "attachment",
        "code",
        "tag",
        "friend",
        "task",
        "dynamic",
        "ads",
        "collect",
        "shielding",
        "recommend",
        "count",
        "wallet",
        "report",
        "notice",
        "certification",
        "search",
        "group",
        "helper",
        "star",
        "about",
        "version",
        "plaza-task",
        "ore",
        "share-image",
        "config",
        "news",
        "bonus",
        "activity",
        "waithdrawal"
      ]
    }
  ];
}

// Imeet 后台接口文档
function getImeetAdminSider(title, introduction) {
  return [
    {
      title,
      collapsable: false,
      children: [
        ["", introduction],
        "user",
        "tag-cate",
        "topic-tag",
        "user-tag",
        "ad",
        "admin",
        "authority",
        "certification",
        "login",
        "poster",
        "role",
        "version",
        "config"
      ]
    }
  ];
}
// Achat APP接口文档
function getAchatAppSider(title, introduction) {
  return [
    {
      title,
      collapsable: false,
      children: [
        ["", introduction],
        "certification",
        "code",
        "ore",
        "group",
        "withdrawal",
        "config",
        "xuansuan"
      ]
    }
  ];
}
// Achat admin接口文档
function getAchatAdminSider(title, introduction) {
  return [
    {
      title,
      collapsable: false,
      children: [
        ["", introduction],
        "certification",
        "withdrawal",
        "config",
        "xianyu",
        "xuansuan"
      ]
    }
  ];
}
// 存链科技APP
function getSchainAppSider(title, introduction) {
  return [
    {
      title,
      collapsable: false,
      children: [
        ["", introduction],
        "conf",
        "upload",
        "user",
        "code",
        "task",
        "cer",
        "assets",
        "goods",
        "order",
        "market",
        "msg",
        "ore",
        "power"
      ]
    }
  ];
}
// 存链科技Admin
function getSchainAdminSider(title, introduction) {
  return [
    {
      title,
      collapsable: false,
      children: [
        ["", introduction],
        "goods",
        "order",
        "wallet",
        "admin",
        "login",
        "authority",
        "role",
        "certification",
        "ore",
        "config",
        "feedback",
        "verification-code",
        "message",
        "task",
        "user",
        "one-key",
        "withdraw",
        "agency",
        "version"
      ]
    }
  ];
}
