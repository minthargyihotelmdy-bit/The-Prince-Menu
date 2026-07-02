// chinese/salad.js — data for chinese -> salad category
window.menusPartials = window.menusPartials || {};
window.menusPartials['chinese'] = window.menusPartials['chinese'] || {};

// 1. 凉拌与沙拉系列名称保留原中文名称
const chineseSaladNames = [
  '蒸什锦蔬菜沙拉',
  '什锦拌沙拉',
  '凉拌木耳',
  '凉拌皮蛋',
  '凉拌生菜',
  '凉拌鲜虾',
  '凉拌虾仁',
  '凉拌海鲜',
  '凉拌鸡爪',
  '鸡肉沙拉',
  '凉拌肥肠',
  '烤排骨沙拉',
  '猪肉、香肠与肥肠三拼沙拉',
  '凉拌鱿鱼',
  '凉拌羊肉丝',
  '缅式舂羊肉沙拉'
];

// 2. 从 Myanmar Master File 自动获取 desc, price 和 img
window.menusPartials['chinese'].salad = chineseSaladNames.map((zhName, index) => {
  // 从缅甸语数据中获取相同索引（index）的 salad 数据
  const baseData = window.menusPartials['myanmar'].salad[index]; 

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