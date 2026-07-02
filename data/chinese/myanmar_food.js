// chinese/myanmar_food.js — data for chinese -> myanmar_food category
window.menusPartials = window.menusPartials || {};
window.menusPartials['chinese'] = window.menusPartials['chinese'] || {};

// 1. 缅式传统菜系列名称保留原中文名称
const chineseMyanmarFoodNames = [
  '土豆炖鸡肉',
  '传统油焖鸡',
  '炖鸡肉',
  '土豆炖猪肉',
  '曼德勒红烧肉',
  '豆酱焖猪肉',
  '传统油焖鱼',
  '传统油焖沙丁鱼',
  '土豆炖羊肉',
  '传统油焖羊肉'
];

// 2. 从 Myanmar Master File 自动获取 desc, price 和 img
window.menusPartials['chinese'].myanmar_food = chineseMyanmarFoodNames.map((zhName, index) => {
  // 从缅甸语数据中获取相同索引（index）的 myanmar_food 数据
  const baseData = window.menusPartials['myanmar'].myanmar_food[index]; 

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