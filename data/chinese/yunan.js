// chinese/yunan.js — data for chinese -> yunan category
window.menusPartials = window.menusPartials || {};
window.menusPartials['chinese'] = window.menusPartials['chinese'] || {};

// 1. 云南特色菜系列名称保留原中文名称
const chineseYunanNames = [
  '什锦红烧猪肉',
  '酥脆鲶鱼碎沙拉',
  '锡纸包大虾',
  '云南红烧肉',
  '四川回锅五花肉',
  '云南风味莴笋拌鸡爪',
  '特色风味炸鸡',
  '酸豆麻辣黄鳝',
  '泰式皮蛋拌莴笋',
  '四川风味茄子炒豆角',
  '凉拌金针菇（素食）',
  '肉丸豆苗汤',
  '云南千张扣肉',
  '酱香羊肉配馒头',
  '铁板牛肉',
  '浓酱焖海鲜',
  '干锅麻辣鸡块',
  '海鲜春捣金针菇',
  '鲜虾春捣金针菇',
  '滇味酸溜土豆丝',
  '火山排骨',
  '酸辣草鱼尾',
  '海鲜麻辣香锅',
  '鸡肉/猪肉麻辣香锅',
  '大虾麻辣香锅',
  '白菜炒日本豆腐',
  '至尊海鲜炒蛋',
  '什锦肉类炒蛋',
  '掸族酸汤春捣土豆',
  '麻辣罗非鱼',
  '砂锅米线（鸡肉/猪肉）',
  '砂锅米线（海鲜）',
  '美式炸鸡炒饭（大虾/大份）',
  '美式炸鸡炒饭（小虾/小份）'
];

// 2. 从 Myanmar Master File 自动获取 desc, price 和 img
window.menusPartials['chinese'].yunan = chineseYunanNames.map((zhName, index) => {
  // 从缅甸语数据中获取相同索引（index）的 yunan 数据
  const baseData = window.menusPartials['myanmar'].yunan[index]; 

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