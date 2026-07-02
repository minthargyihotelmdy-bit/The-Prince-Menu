// chinese/seafood.js — data for chinese -> seafood category
window.menusPartials = window.menusPartials || {};
window.menusPartials['chinese'] = window.menusPartials['chinese'] || {};

// 1. 海鲜系列名称保留原中文名称
const chineseSeafoodNames = [
  '鲜虾粉丝砂锅煲',
  '川味砂锅大虾',
  '上海酱汁大虾',
  '明达基龙虾',
  '鹌鹑蛋面包伴炸虾',
  '酸辣大虾',
  '罗望子腰果大虾',
  '酥炸面糊大虾',
  '上海酱汁大虾',
  '土豆丝卷炸虾',
  '辣酱炒鱿鱼',
  '酸辣鱿鱼',
  '香辣酥炸鱿鱼',
  '蚝油炒鱿鱼'
];

// 2. 从 Myanmar Master File 自动获取 desc, price 和 img
window.menusPartials['chinese'].seafood = chineseSeafoodNames.map((zhName, index) => {
  // 从缅甸语数据中获取相同索引（index）的 seafood 数据
  const baseData = window.menusPartials['myanmar'].seafood[index]; 

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