// international/mutton.js — data for international -> mutton category
window.menusPartials = window.menusPartials || {};
window.menusPartials['international'] = window.menusPartials['international'] || {};

// ၁။ ဆိတ်သားဟင်းလျာ နာမည်များကိုသာ သီးသန့် Array အနေနဲ့ ထားပါမယ်
const internationalMuttonNames = [
  'Filament Mutton',
  'Filament Mutton with Spicy',
  'Deep Fried Mutton',
  'Mutton Kabad',
  'Steamed Mutton with Spicy Paste',
  'Steamed Mutton with Curry Powder',
  'ဆိတ်သားခြောက်ဆီဆမ်း',
  'ဆိတ်ထောင်းလက်ဖက်'
];

// ၂။ Myanmar Master File ကနေ desc, price နဲ့ img ကို Auto လှမ်းယူပါမယ်
window.menusPartials['international'].mutton = internationalMuttonNames.map((enName, index) => {
  // Myanmar Data ဆီကနေ 'mutton' ထဲက အစီအစဉ် (index) တူတဲ့ data ကို ဆွဲယူပါတယ်
  const baseData = window.menusPartials['myanmar'].mutton[index]; 

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