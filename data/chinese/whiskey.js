// chinese/whiskey.js — data for chinese -> whiskey category
window.menusPartials = window.menusPartials || {};
window.menusPartials['chinese'] = window.menusPartials['chinese'] || {};

// 1. 威士忌与洋酒系列名称保留原中文名称
const chineseWhiskeyNames = [
  '尊尼获加蓝牌 75cl',
  '轩尼诗 VSOP 70cl',
  '轩尼诗 VSOP 1升',
  '芝华士 1升',
  '尊尼获加双黑 1升',
  '尊尼获加金牌 1升',
  '尊尼获加金牌 75cl',
  '尊尼获加黑牌 1升',
  '尊尼获加黑牌 75cl',
  '尊尼获加黑牌 37.5cl',
  '尊尼获加红牌 1升',
  '尊尼获加红牌 75cl',
  '尊尼获加红牌 37.5cl',
  '百龄坛 75cl',
  '杰克丹尼 1升',
  '爱德华爵士 1升',
  '法国弗顿葡萄酒',
  '缅甸艾达雅葡萄酒',
  '酒庄红葡萄酒'
];

// 2. 从 Myanmar Master File 自动获取 desc, price 和 img
window.menusPartials['chinese'].whiskey = chineseWhiskeyNames.map((zhName, index) => {
  // 从缅甸语数据中获取相同索引（index）的 whiskey 数据
  const baseData = window.menusPartials['myanmar'].whiskey[index]; 

  // 防止数据不存在时导致代码报错
  if (!baseData) {
    return { name: zhName, desc: '', price: '', img: '' };
  }

  // 将中文名称与源自缅甸语文件的 price, desc, img 组合输出
  return {
    name: zhName,
    desc: baseData.desc,
    price: baseData.price,
    img: baseData.img
  };
});