// chinese/mutton.js — data for chinese -> mutton category
window.menusPartials = window.menusPartials || {};
window.menusPartials['chinese'] = window.menusPartials['chinese'] || {};

// 1. 羊肉系列名称保留原中文名称
const chineseMuttonNames = [
  '炒羊肉丝',
  '香辣羊肉丝',
  '酥炸羊肉',
  '烤羊肉串',
  '辣酱蒸羊肉',
  '咖喱粉蒸羊肉',
  '缅式油淋干羊肉丝',
  '缅式茶叶舂羊肉'
];

// 2. 从 Myanmar Master File 自动获取 desc, price 和 img
window.menusPartials['chinese'].mutton = chineseMuttonNames.map((zhName, index) => {
  // 从缅甸语数据中获取相同索引（index）的 mutton 数据
  const baseData = window.menusPartials['myanmar'].mutton[index]; 

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