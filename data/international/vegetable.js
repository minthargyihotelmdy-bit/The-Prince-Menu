// international/vegetable.js — data for international -> vegetable category
window.menusPartials = window.menusPartials || {};
window.menusPartials['international'] = window.menusPartials['international'] || {};

// ၁။ ဟင်းသီးဟင်းရွက်ဟင်းလျာ နာမည်များကိုသာ သီးသန့် Array အနေနဲ့ ထားပါမယ်
const internationalVegetableNames = [
  'Fried Snow Bean, Cauliflower and Egg',
  'Fried Green Cauliflower',
  'Fried Chinese Broccoli with Oyster Sauce',
  'Fried Asparagus',
  'Fried Japanese Tofu with Sweet Gravy',
  'Hot and Sour Japanese Tofu',
  'Fried Long Bean with Rosly Sauce',
  'Fried Fresh Mushroom',
  'Fried Mushroom with Chinese Broccoli',
  'Fried Mushroom with Baby Corn',
  'Fried Water Green',
  'Fried Baby Corn',
  'Fried Mixed Vegetables',
  'Fried Mushroom with Water Green',
  'Fried Marrow Leaf'
];

// ၂။ Myanmar Master File ကနေ desc, price နဲ့ img ကို Auto လှမ်းယူပါမယ်
window.menusPartials['international'].vegetable = internationalVegetableNames.map((enName, index) => {
  // Myanmar Data ဆီကနေ 'vegetable' ထဲက အစီအစဉ် (index) တူတဲ့ data ကို ဆွဲယူပါတယ်
  const baseData = window.menusPartials['myanmar'].vegetable[index]; 

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