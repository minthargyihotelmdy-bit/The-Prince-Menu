// chinese/beef.js — data for chinese -> beef category
window.menusPartials = window.menusPartials || {};
window.menusPartials['chinese'] = window.menusPartials['chinese'] || {};

// ၁။ တရုတ်လို နာမည်များကိုသာ သီးသန့် Array အနေနဲ့ ထားပါမယ်
const chineseBeefNames = [
  '芹菜炒牛肉',
  '罗勒炒牛肉',
  '炖牛肉',
  '咖喱牛肉',
  '土豆咖喱牛肉',
  '碎牛肉',
  '炒炖牛肉',
  '炸牛肉串',
  '牛肉汤'
];

// ၂။ Myanmar Master File ကနေ desc, price နဲ့ img ကို Auto လှမ်းယူပါမယ်
window.menusPartials['chinese'].beef = chineseBeefNames.map((zhName, index) => {
  // Myanmar Data ဆီကနေ အစီအစဉ် (index) တူတဲ့ data ကို ဆွဲယူပါတယ်
  const baseData = window.menusPartials['myanmar'].beef[index]; 

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