const CUSTOMER_SITES = {
    qiqi: {
        api: 'https://www.qiqidys.com/api.php/provide/vod',
        name: '七七资源',
    },
    wolong: {
        api: 'https://collect.wolongzyw.com/api.php/provide/vod', 
        name: '卧龙资源',
    },
    kuaiyun: {
        api: 'https://www.kyzy.com/api.php/provide/vod',
        name: '快云资源',
    },
        shanhai: {
        api: 'https://zy.sh0o.cn/api.php/provide/vod', 
        name: '山海资源',
    },
    wuyin: {
        api: 'https://api.wsyzy.net/api.php/provide/vod/from/wsym3u8/at/xml/',
        name: '无印资源',
    },
    niuniu: {
     api: 'https://api.niuniuzy.me/api.php/provide/vod/from/nnm3u8/at/xml',
    name: '牛牛资源',
    },
    maotai: {
        api: 'https://caiji.maotaizy.cc/api.php/provide/vod/at/josn/', 
        name: '茅台资源',
    },
    danaizi: {
        api: 'https://apidanaizi.com/api.php/provide/vod/at/xml/',
        name: '大奶子资源',
    }
};

// 调用全局方法合并
if (window.extendAPISites) {
    window.extendAPISites(CUSTOMER_SITES);
} else {
    console.error("错误：请先加载 config.js！");
}
