// international/salad.js — data for international -> salad category
window.menusPartials = window.menusPartials || {};
window.menusPartials['international'] = window.menusPartials['international'] || {};

// ၁။ အသုပ်ဟင်းလျာ နာမည်များကိုသာ သီးသန့် Array အနေနဲ့ ထားပါမယ်
const internationalSaladNames = [
  'Steamed Mixed Vegetable Salad',
  'Aor Son Salad',
  'Fungus Salad',
  'Phetan Salad',
  'Lettuce Salad',
  'Fresh Prawn Salad',
  'Prawn Salad',
  'Seafood Salad',
  'Chicken Web Salad',
  'Chicken Salad',
  'Colon Salad',
  'Grilled Pork Rib Salad',
  'Pork, Sausage and Colon Salad',
  'Squid Salad',
  'Filament Mutton Salad',
  'Mutton Pudding Salad'
];

// ၂။ Myanmar Master File ကနေ desc, price နဲ့ img ကို Auto လှမ်းယူပါမယ်
window.menusPartials['international'].salad = internationalSaladNames.map((enName, index) => {
  // Myanmar Data ဆီကနေ 'salad' ထဲက အစီအစဉ် (index) တူတဲ့ data ကို ဆွဲယူပါတယ်
  const baseData = window.menusPartials['myanmar'].salad[index]; 

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