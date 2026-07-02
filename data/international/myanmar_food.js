// international/myanmar_food.js — data for international -> myanmar_food category
window.menusPartials = window.menusPartials || {};
window.menusPartials['international'] = window.menusPartials['international'] || {};

// ၁။ မြန်မာရိုးရာဟင်းလျာ နာမည်များကိုသာ သီးသန့် Array အနေနဲ့ ထားပါမယ်
const internationalMyanmarFoodNames = [
  'Braised Chicken with Potatoes',
  'Stewed Chicken Oily',
  'Stewed Chicken',
  'Braised Pork with Potatoes',
  'Mandalay Braised Pork Coloured Red',
  'Stewed Pork with Preserved Bean Paste',
  'Stewed Fish Oily',
  'Stewed Sardine Oily',
  'Braised Mutton with Potatoes',
  'Stewed Mutton Oily'
];

// ၂။ Myanmar Master File ကနေ desc, price နဲ့ img ကို Auto လှမ်းယူပါမယ်
window.menusPartials['international'].myanmar_food = internationalMyanmarFoodNames.map((enName, index) => {
  // Myanmar Data ဆီကနေ 'myanmar_food' ထဲက အစီအစဉ် (index) တူတဲ့ data ကို ဆွဲယူပါတယ်
  const baseData = window.menusPartials['myanmar'].myanmar_food[index]; 

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