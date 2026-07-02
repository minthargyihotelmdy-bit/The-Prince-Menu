// chinese/pork.js — data for chinese -> pork category
window.menusPartials = window.menusPartials || {};
window.menusPartials['chinese'] = window.menusPartials['chinese'] || {};

// 1. 猪肉系列名称保留原中文名称
const chinesePorkNames = [
  '竹笋炖猪肉',
  '香辣酸菜炒猪肉',
  '糖醋肉丸',
  '罗勒炒猪肉',
  '烤排骨',
  '酸辣烤排骨',
  '炖猪肉',
  '炸排骨',
  '炸猪排',
  '酸辣肥肠',
  '砂锅排骨'
];

// 2. 从 Myanmar Master File 自动获取 desc, price 和 img
window.menusPartials['chinese'].pork = chinesePorkNames.map((zhName, index) => {
  // 从缅甸语数据中获取相同索引（index）的 pork 数据
  const baseData = window.menusPartials['myanmar'].pork[index]; 

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