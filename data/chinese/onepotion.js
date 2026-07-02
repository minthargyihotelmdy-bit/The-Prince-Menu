// chinese/onepotion.js — data for chinese -> onepotion category
window.menusPartials = window.menusPartials || {};
window.menusPartials['chinese'] = window.menusPartials['chinese'] || {};

// 1. 单人份盖饭系列名称保留原中文名称
const chineseOnePotionNames = [
  '酸辣鸡肉 + 米饭',
  '烤鸡肉串 + 米饭',
  '鸡肉沙拉 + 米饭',
  '炒鸡肉 + 米饭',
  '咖喱粉炒鸡肉 + 米饭',
  '酸辣猪肉 + 米饭',
  '炒猪肉 + 米饭',
  '猪肉沙拉 + 米饭',
  '罗勒炒猪肉 + 米饭',
  '凉拌肥肠 + 米饭',
  '酸辣肥肠 + 米饭',
  '酸辣烤排骨 + 米饭',
  '炒鱼片 + 米饭',
  '酸辣鱼片 + 米饭',
  '虾仁沙拉 + 米饭',
  '酸辣虾仁 + 米饭',
  '炒虾仁 + 米饭',
  '鱿鱼沙拉 + 米饭',
  '酸辣鱿鱼 + 米饭',
  '炒鱿鱼 + 米饭',
  '酥炸羊肉 + 米饭',
  '烤羊肉串 + 米饭',
  '罗勒炒牛肉 + 米饭'
];

// 2. 从 Myanmar Master File 自动获取 desc, price 和 img
window.menusPartials['chinese'].onepotion = chineseOnePotionNames.map((zhName, index) => {
  // 从缅甸语数据中获取相同索引（index）的 onepotion 数据
  const baseData = window.menusPartials['myanmar'].onepotion[index]; 

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