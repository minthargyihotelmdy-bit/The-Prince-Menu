// chinese/snack.js — data for chinese -> snack category
window.menusPartials = window.menusPartials || {};
window.menusPartials['chinese'] = window.menusPartials['chinese'] || {};

// 1. 小吃与特色菜系列名称保留原中文名称
const chineseSnackNames = [
  '酥炸什锦肉类拼盘',
  '酥炸大杂烩（鸡肉、猪肉、鱼柳与腰果）',
  '酥炸全鸡',
  '什锦蔬菜清炖鸡汤',
  '农家风味鲶鱼汤',
  '酥炸土鸡',
  '酥炸猪排',
  '清蒸五花肉',
  '炸烤排骨',
  '炸精排',
  '天妇罗大虾',
  '土豆丝卷炸虾'
];

// 2. 从 Myanmar Master File 自动获取 desc, price 和 img
window.menusPartials['chinese'].snack = chineseSnackNames.map((zhName, index) => {
  // 从缅甸语数据中获取相同索引（index）的 snack 数据
  const baseData = window.menusPartials['myanmar'].snack[index]; 

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