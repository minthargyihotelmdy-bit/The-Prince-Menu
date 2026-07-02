// international/yunan.js — data for international -> yunan category
window.menusPartials = window.menusPartials || {};
window.menusPartials['international'] = window.menusPartials['international'] || {};

// ၁။ ယူနန်ဟင်းလျာ အင်္ဂလိပ်နာမည်များကိုသာ သီးသန့် Array အနေနဲ့ ထားပါမယ်
const internationalYunanNames = [
  'Assorted Pork Stew',
  'Crispy Catfish Salad',
  'Baked Prawn in Foil',
  'Yunnan Pork Stew',
  'Szechuan Pork Belly',
  'Yunnan Style Chicken Feet Salad',
  'Zamani Fried Chicken',
  'Fried Eel with Mala Tamarind Sauce',
  'Thai Style Century Egg Salad',
  'Szechuan Style Eggplant and Long Beans',
  'Pounded Vegetarian Enoki Mushroom',
  'Meatball and Snow Pea Leaf Soup',
  'Steamed Yunnan Pork Belly',
  'Mutton with Mantou',
  'Sizzling Beef Hot Plate',
  'Seafood with Rich Gravy Sauce',
  'Stir-Fried Dried Mala Chicken',
  'Pounded Enoki Mushroom Salad (Seafood)',
  'Pounded Prawn with Enoki Mushroom Salad',
  'Stir-Fried Sour and Spicy Shredded Potatoes',
  'Flamed Pork Ribs',
  'Sour and Spicy Carp Tail',
  'Seafood Mala Xiang Guo',
  'Chicken/Pork Mala Xiang Guo',
  'Prawn Mala Xiang Guo',
  'Stir-Fried Japanese Tofu with Chinese Cabbage',
  'Special Egg Omelet (Seafood)',
  'Special Egg Omelet with Assorted Meat',
  'Shan Style Pounded Sour Potatoes',
  'Tilapia Fish with Mala Sauce',
  'Clay Pot Mee Shay (Chicken/Pork)',
  'Clay Pot Mee Shay (Seafood)',
  'American Fried Rice with Chicken & Large Prawn',
  'American Fried Rice with Chicken & Small Prawn'
];

// ၂။ Myanmar Master File ကနေ desc, price နဲ့ img ကို Auto လှမ်းယူပါမယ်
window.menusPartials['international'].yunan = internationalYunanNames.map((enName, index) => {
  // Myanmar Data ဆီကနေ 'yunan' ထဲက အစီအစဉ် (index) တူတဲ့ data ကို ဆွဲယူပါတယ်
  const baseData = window.menusPartials['myanmar'].yunan[index]; 

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