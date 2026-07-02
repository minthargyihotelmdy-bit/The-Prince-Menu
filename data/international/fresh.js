// international/fresh.js — data for international -> fresh category
window.menusPartials = window.menusPartials || {};
window.menusPartials['international'] = window.menusPartials['international'] || {};

// ၁။ ဖျော်ရည်နှင့် သစ်သီးနာမည်များကိုသာ သီးသန့် Array အနေနဲ့ ထားပါမယ်
const internationalFreshNames = [
  'Avocado Juice',
  'Strawberry Juice',
  'Apple Juice',
  'Pear juice',
  'Orange Juice',
  'Dragon Fruit Juice',
  'Honey lemon Juice',
  'Mango Juice',
  'Fruits Milkshake',
  'Passion Juice',
  'Papaya Juice',
  'Watermelon Juice',
  'Melon Juice',
  'Limes Juice',
  'Pineapple Juice',
  'Assorted Fruit (large)',
  'Assorted Fruit (small)',
  'Lime Fruit'
];

// ၂။ Myanmar Master File ကနေ desc, price နဲ့ img ကို Auto လှမ်းယူပါမယ်
window.menusPartials['international'].fresh = internationalFreshNames.map((enName, index) => {
  // Myanmar Data ဆီကနေ 'fresh' ထဲက အစီအစဉ် (index) တူတဲ့ data ကို ဆွဲယူပါတယ်
  const baseData = window.menusPartials['myanmar'].fresh[index]; 

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