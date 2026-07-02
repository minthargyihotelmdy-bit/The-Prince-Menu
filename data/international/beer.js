// international/beer.js — data for international -> beer category
window.menusPartials = window.menusPartials || {};
window.menusPartials['international'] = window.menusPartials['international'] || {};

// ၁။ အင်္ဂလိပ်နာမည်များကိုသာ သီးသန့် Array အနေနဲ့ ထားပါမယ်
const internationalBeerNames = [
  'Heineken Bot',
  'Heineken Can',
  'ABC bot',
  'ABC Can',
  'Tiger Bot',
  'Tiger Can',
  'Myanmar Bot',
  'Chang Bot',
  'SPY',
  'Sprite',
  'Shark',
  'Sunkit can',
  'Coke',
  'Lippo',
  'Red Cow Chese'
];

// ၂။ Myanmar Master File ကနေ desc, price နဲ့ img ကို Auto လှမ်းယူပါမယ်
window.menusPartials['international'].beer = internationalBeerNames.map((enName, index) => {
  // Myanmar Data ဆီကနေ 'beer' ထဲက အစီအစဉ် (index) တူတဲ့ data ကို ဆွဲယူပါတယ်
  const baseData = window.menusPartials['myanmar'].beer[index]; 

  // Data မရှိခဲ့ရင် Error မတက်အောင် ကာကွယ်ထားပါတယ်
  if (!baseData) {
    return { name: enName, desc: '', price: '', img: '' };
  }

  // အင်္ဂလိပ်နာမည်ရယ်၊ မြန်မာကနေ ယူထားတဲ့ price, desc, img ရယ်ကို ပေါင်းထုတ်ပေးပါတယ်
  return {
    name: enName,
    desc: baseData.desc,
    price: baseData.price,
    img: baseData.img
  };
});
