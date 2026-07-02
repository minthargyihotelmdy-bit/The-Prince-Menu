// chinese/beer.js — data for chinese -> beer category
window.menusPartials = window.menusPartials || {};
window.menusPartials['chinese'] = window.menusPartials['chinese'] || {};

// ၁။ ဘီယာနှင့် အချိုရည် နာမည်များကို မူရင်း တရုတ်စာလုံးအတိုင်း ထားပါမယ်
const chineseBeerNames = [
  '喜力啤酒（瓶装）',
  '喜力啤酒（罐装）',
  'ABC黑啤酒（瓶装）',
  'ABC黑啤酒（罐装）',
  '虎牌啤酒（瓶装）',
  '虎牌啤酒（罐装）',
  '缅甸啤酒（瓶装）',
  '象牌啤酒（瓶装）',
  'SPY气泡酒',
  '雪碧',
  '鲨鱼能量饮料',
  '新奇士（罐装）',
  '可口可乐',
  '力保健',
  '红牛'
];

// ၂။ Myanmar Master File ကနေ desc, price နဲ့ img ကို Auto လှမ်းယူပါမယ်
window.menusPartials['chinese'].beer = chineseBeerNames.map((zhName, index) => {
  // Myanmar Data ဆီကနေ 'beer' ထဲက အစီအစဉ် (index) တူတဲ့ data ကို ဆွဲယူပါတယ်
  const baseData = window.menusPartials['myanmar'].beer[index]; 

  // Data မရှိခဲ့ရင် Error မတက်အောင် ကာကွယ်ထားပါတယ်
  if (!baseData) {
    return { name: zhName, desc: '', price: '', img: '' };
  }

  // တရုတ်နာမည်ရယ်၊ မြန်မာကနေ ယူထားတဲ့ price, desc, img ရယ်ကို ပေါင်းထုတ်ပေးပါတယ်
  return {
    name: zhName,
    desc: baseData.desc,
    price: baseData.price,
    img: baseData.img
  };
});