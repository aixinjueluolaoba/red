module.exports = Object.freeze({
    /**
     * ## 账号相关
     * - `COOKIE` 是必填项
     * - `NOTE` 帐号备注
     * - `NUMBER` 表示是第几个账号
     * - `CLEAR` 是否启用清理功能
     * - `ENABLE_MULTIPLE_ACCOUNT` 是否启用多账号
     * - `MULTIPLE_ACCOUNT_PARM` 多账号参数(JSON格式)
     * ## 调试相关
     * - `LOTTERY_LOG_LEVEL` 输出日志等级 Error<Warn<Info<Debug 1<2<3<4
     * - `NOT_GO_LOTTERY` 关闭抽奖行为
     * ## 多账号
     * 1. 将 ENABLE_MULTIPLE_ACCOUNT 的值改为true
     * 2. 将账号信息依次填写于 multiple_account_parm 中, 参考例子类推
     * - `WAIT` 表示下一个账号运行等待时间(毫秒)
     * 
     * **按顺序依次执行, 防止访问频繁封禁IP**
     */
    account_parm: {
        COOKIE: "",
        NOTE: "",
        NUMBER: 1,
        CLEAR: true,

        ENABLE_MULTIPLE_ACCOUNT: true,

        MULTIPLE_ACCOUNT_PARM: "",
        LOTTERY_LOG_LEVEL: 3,
        NOT_GO_LOTTERY: ""
    },

    /**
     * 为防止环境变量过长, 请将多账号填在此处
     * 以 **大括号内容** 为模板依次复制(包含大括号),逗号分割
     * 
     * ```txt
     * [
     *     {
     *     ...
     *     NUMBER: 1
     *     ...
     *     },
     *     {
     *     ...
     *     NUMBER: 2
     *     ...
     *     }
     * ]
     * ```
     */
    multiple_account_parm: [
  {
            COOKIE: "SESSDATA=c9215874%2C1670641701%2Cae630%2A61; bili_jct=879e85ff45cc3d3fd9ff5784657575e4; DedeUserID=1897133884",
            NOTE: "珈乐的小年糕",
            NUMBER: 1,
            CLEAR: true,
            WAIT: 80 * 1000
        },
        {
            COOKIE: "DedeUserID=1819187428; SESSDATA=4f9f7581%2C1683638941%2C8538b%2Ab1; bili_jct=ef19862acf9d7039614afdd985dc7b9a",
            NOTE: "寻超脱",
            NUMBER: 1,
            CLEAR: true,
            WAIT: 80 * 1000
        },
        {
            COOKIE: "SESSDATA=05d7e823%2C1676562179%2C99810%2A81; bili_jct=7481e8087dc54f08034fe3af959c93e0; DedeUserID=1378875560",
            NOTE: "嘉然今天吃海鸥",
            NUMBER: 1,
            CLEAR: true,
            WAIT: 80 * 1000
        },
        {
            COOKIE: "DedeUserID=93830148; SESSDATA=2b19190f%2C1680743154%2C5b70e*a1; bili_jct=8baefa714d2510d74bd58b20f30f7e1f",
            NOTE: "啵啵杉杉",
            NUMBER: 1,
            CLEAR: true,
            WAIT: 80 * 1000
        },
 {
            COOKIE: "DedeUserID=2088192119; SESSDATA=f71e7f29%2C1683634453%2Cc1479%2Ab1; bili_jct=b3f01f5c6bf5ff0e3bc0b95c285ff872",
            NOTE: "猫猫头头猫",
            NUMBER: 1,
            CLEAR: true,
            WAIT: 80 * 1000
        }
    ],

    /**
     * 推送相关参数
     */
    push_parm: {
        SCKEY: "",
        SENDKEY: "",
        QQ_SKEY: "",
        QQ_MODE: "",
        BARK_PUSH: "",
        BARK_SOUND: "",
        TG_BOT_TOKEN: "",
        TG_USER_ID: "",
        TG_PROXY_HOST: "",
        TG_PROXY_PORT: "",
        DD_BOT_TOKEN: "",
        DD_BOT_SECRET: "",
        QYWX_AM: "",
        QYWX_KEY: "",
        IGOT_PUSH_KEY: "",
        PUSH_PLUS_TOKEN: "",
        PUSH_PLUS_USER: "",
        QMSG_KEY: "",
        QMSG_QQ: "",
        SMTP_HOST: "",
        SMTP_PORT: "",
        SMTP_USER: "",
        SMTP_PASS: "",
        SMTP_TO_USER: ""
    }
})