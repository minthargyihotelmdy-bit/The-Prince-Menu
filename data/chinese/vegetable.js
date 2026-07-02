// chinese/vegetable.js — data for chinese -> vegetable category
window.menusPartials = window.menusPartials || {};
window.menusPartials['chinese'] = window.menusPartials['chinese'] || {};

// 1. 蔬菜与豆腐系列名称保留原中文名称
const chineseVegetableNames = [
  '荷兰豆花菜炒鸡蛋',
  '清炒西兰花',
  '蚝油芥兰',
  '清炒芦笋',
  '红烧日本豆腐',
  '酸辣日本豆腐',
  '风味酱炒豆角',
  '清炒鲜菇',
  '鲜菇炒芥兰',
  '鲜菇炒玉米笋',
  '清炒空心菜',
  '清炒玉米笋',
  '清炒什锦蔬菜',
  '鲜菇炒空心菜',
  '清炒瓜苗'
];

// 2. 从 Myanmar Master File 自动获取 desc, price 和 img
window.menusPartials['chinese'].vegetable = chineseVegetableNames.map((zhName, index) => {
  // 从缅甸语数据中获取相同索引（index）的 vegetable 数据
  const baseData = window.menusPartials['myanmar'].vegetable[index]; 

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