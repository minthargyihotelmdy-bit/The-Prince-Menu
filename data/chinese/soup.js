// chinese/soup.js — data for chinese -> soup category
window.menusPartials = window.menusPartials || {};
window.menusPartials['chinese'] = window.menusPartials['chinese'] || {};

// 1. 汤类系列名称保留原中文名称
const chineseSoupNames = [
  '时蔬汤',
  '鱼头汤',
  '鹌鹑蛋鱼丸汤',
  '酸菜排骨汤',
  '缅式苦叶鸡汤',
  '葫芦瓜鸡汤',
  '什锦肉类蔬菜汤（鸡肉/猪肉/鱼肉）',
  '什锦海鲜蔬菜汤（大虾/海鲜）',
  '冬阴功汤（鸡肉/猪肉/鱼肉）',
  '冬阴功海鲜汤（大虾/海鲜）',
  '泰式酸辣汤（鸡肉/猪肉/鱼肉）',
  '泰式海鲜酸辣汤（大虾/海鲜）',
  '酸菜汤（鸡肉/猪肉/鱼肉）',
  '缅式腐竹粉丝汤'
];

// 2. 从 Myanmar Master File 自动获取 desc, price 和 img
window.menusPartials['chinese'].soup = chineseSoupNames.map((zhName, index) => {
  // 从缅甸语数据中获取相同索引（index）的 soup 数据
  const baseData = window.menusPartials['myanmar'].soup[index]; 

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