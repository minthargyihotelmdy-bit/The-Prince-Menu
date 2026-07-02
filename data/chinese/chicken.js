// chinese/chicken.js — data for chinese -> chicken category
window.menusPartials = window.menusPartials || {};
window.menusPartials['chinese'] = window.menusPartials['chinese'] || {};

// ၁။ ကြက်သားဟင်းလျာ နာမည်များကို မူရင်း တရုတ်စာလုံးအတိုင်း ထားပါမယ်
const chineseChickenNames = [
  '甜辣鸡肉',
  '鲜笋炒鸡肉',
  '罗勒炒鸡肉',
  '烤鸡肉串',
  '酥炸鸡柳',
  '鸡肉煎蛋',
  '冬阴功炒鸡肉',
  '酥炸鸡翅',
  '炸鸡肉',
  '克钦风味鸡肉'
];

// ၂။ Myanmar Master File ကနေ desc, price နဲ့ img ကို Auto လှမ်းယူပါမယ်
window.menusPartials['chinese'].chicken = chineseChickenNames.map((zhName, index) => {
  // Myanmar Data ဆီကနေ 'chicken' ထဲက အစီအစဉ် (index) တူတဲ့ data ကို ဆွဲယူပါတယ်
  const baseData = window.menusPartials['myanmar'].chicken[index]; 

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