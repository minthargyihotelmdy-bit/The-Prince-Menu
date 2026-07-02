// international/whiskey.js — data for international -> whiskey category
window.menusPartials = window.menusPartials || {};
window.menusPartials['international'] = window.menusPartials['international'] || {};

// ၁။ ဝီစကီနှင့် ဝိုင်နာမည်များကိုသာ သီးသန့် Array အနေနဲ့ ထားပါမယ်
const internationalWhiskeyNames = [
  'Blue Label 75cl',
  'Hennessy VSOP 70cl',
  'Hennessy VSOP 1 Liter',
  'Chivas 1 Liter',
  'Double Black 1 Liter',
  'Gold Label 1 Liter',
  'Gold Label 75cl',
  'Black Label 1 Liter',
  'Black Label 75cl',
  'Black Label 37.5cl',
  'Red Label 1 Liter',
  'Red Label 75cl',
  'Red Label 37.5cl',
  "Ballantine's 75cl",
  "Jack Daniel's 1 Liter",
  'Sir Edward 1 Liter',
  'Fortant Wine',
  'Aythaya Wine',
  'Chateau Wine'
];

// ၂။ Myanmar Master File ကနေ desc, price နဲ့ img ကို Auto လှမ်းယူပါမယ်
window.menusPartials['international'].whiskey = internationalWhiskeyNames.map((enName, index) => {
  // Myanmar Data ဆီကနေ 'whiskey' ထဲက အစီအစဉ် (index) တူတဲ့ data ကို ဆွဲယူပါတယ်
  const baseData = window.menusPartials['myanmar'].whiskey[index]; 

  // Data မရှိခဲ့ရင် Error မတက်အောင် ကာကွယ်ထားပါတယ်
  if (!baseData) {
    return { name: enName, desc: '', price: '', img: '' };
  }

  // နာမည်ရယ်၊ မြန်မာကနေ ယူထားတဲ့ price, desc, img ရယ်ကို ပေါင်းထုတ်ပေးပါတယ်
  return {
    name: enName,
    desc: baseData.desc,
    price: baseData.price,
    img: baseData.img
  };
});