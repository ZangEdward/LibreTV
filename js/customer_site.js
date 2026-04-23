const CUSTOMER_SITES = {
    ikun: {
        api: 'https://ikunzyapi.com/api.php/provide/vod ',
        name: 'ikun资源',
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
    kk_yun: {
        api: 'https://cj.lziapi.com/api.php/provide/vod/at/json',
        name: '夸克云盘资源',
    },
    naixiangxiang: {
        api: 'https://Naixxzy.com/api.php/provide/vod/',
        name: '奶香香资源',
    },
    ruyi: {
        api: 'https://cj.rycjapi.com/api.php/provide/vod/at/xml/',
        name: '如意资源',
    },
    huya: {
        api: 'https://www.huyaapi.com/api.php/provide/vod/from/hyyun/at/xml/',
        name: '虎牙资源',
    }
};

// 调用全局方法合并
if (window.extendAPISites) {
    window.extendAPISites(CUSTOMER_SITES);
} else {
    console.error("错误：请先加载 config.js！");
}
