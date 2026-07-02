// chinese/fried_set.js — data for chinese -> fried_set category
window.menusPartials = window.menusPartials || {};
window.menusPartials['chinese'] = window.menusPartials['chinese'] || {};

// 1. 炒饭、炒面系列名称保留原中文名称
const chineseFriedSetNames = [
  '炒饭（鸡肉/猪肉）',
  '炒饭（虾仁）',
  '炒面（鸡肉/猪肉）',
  '炒面（虾仁）',
  '炒米粉（鸡肉/猪肉）',
  '炒米粉（虾仁）',
  '普苏风味炒饭（蔬菜）',
  '普苏风味炒饭（鸡肉/猪肉）',
  '普苏风味炒饭（虾仁）',
  '泰式炒饭（蔬菜）',
  '泰式炒饭（鸡肉/猪肉）',
  '泰式炒饭（虾仁）',
  '冬阴功炒饭（蔬菜）',
  '冬阴功炒饭（鸡肉/猪肉）',
  '冬阴功炒饭（虾仁）',
  '马来西亚风味炒面（蔬菜）',
  '马来西亚风味炒面（鸡肉/猪肉）',
  '马来西亚风味炒面（虾仁）',
  '炒养养面（蔬菜）',
  '炒养养面（鸡肉/猪肉）',
  '炒养养面（虾仁）',
  '西班牙风味炒饭（蔬菜）',
  '西班牙风味炒饭（鸡肉/猪肉）',
  '西班牙风味炒饭（虾仁）',
  '鸡腿炒饭'
];

// 2. 从 Myanmar Master File 自动获取 desc, price 和 img
window.menusPartials['chinese'].fried_set = chineseFriedSetNames.map((zhName, index) => {
  // 从缅甸语数据中获取相同索引（index）的 fried_set 数据
  const baseData = window.menusPartials['myanmar'].fried_set[index]; 

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