// chinese/light_food.js — data for chinese -> light_food category
window.menusPartials = window.menusPartials || {};
window.menusPartials['chinese'] = window.menusPartials['chinese'] || {};

// 1. 轻食与小吃系列名称保留原中文名称
const chineseLightFoodNames = [
  '黄油果酱吐司',
  '孟买吐司',
  '汉堡包',
  '三明治（鸡肉/芝士）',
  '三明治（金枪鱼/沙丁鱼）',
  '炸腰果',
  '炸薯条',
  '炸薯片',
  '缅甸茶叶沙拉',
  '缅甸生姜沙拉',
  '番茄沙拉'
];

// 2. 从 Myanmar Master File 自动获取 desc, price 和 img
window.menusPartials['chinese'].light_food = chineseLightFoodNames.map((zhName, index) => {
  // 从缅甸语数据中获取相同索引（index）的 light_food 数据
  const baseData = window.menusPartials['myanmar'].light_food[index]; 

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