// chinese/cocktail.js — data for chinese -> cocktail category
window.menusPartials = window.menusPartials || {};
window.menusPartials['chinese'] = window.menusPartials['chinese'] || {};

// ၁။ ကော့တေးနာမည်များကို မူရင်း တရုတ်စာလုံးအတိုင်း ထားပါမယ်
const chineseCocktailNames = [
  '戈德尔',
  '宝尼克斯',
  '卡鲁索',
  '堕落天使',
  '洛杉矶',
  '罗伯罗伊',
  '哈维华邦哥',
  '温布利',
  '血腥玛丽',
  '金酸酒',
  '威士忌酸酒',
  '朗姆酸酒',
  '红钉',
  '马利宝奶昔',
  '螺丝刀',
  '伏特加酸酒'
];

// 二〕 Myanmar Master File ကနေ desc, price နဲ့ img ကို Auto လှမ်းယူပါမယ်
window.menusPartials['chinese'].cocktail = chineseCocktailNames.map((zhName, index) => {
  // Myanmar Data ဆီကနေ 'cocktail' ထဲက အစီအစဉ် (index) တူတဲ့ data ကို ဆွဲယူပါတယ်
  const baseData = window.menusPartials['myanmar'].cocktail[index]; 

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